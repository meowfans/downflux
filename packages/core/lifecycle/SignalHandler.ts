/** Work to run before the process exits on a termination signal. */
export type ShutdownTask = () => Promise<void> | void;

/**
 * Single owner of `SIGINT`/`SIGTERM` shutdown.
 *
 * @remarks
 * Adding a signal listener in Node suppresses the default "exit immediately"
 * behaviour, so every component that wants to clean up must also agree on who
 * finally exits. Registering here keeps that decision in one place: the renderer
 * restores the terminal, an aborting job removes its partial files, and the exit
 * happens once, after both have run.
 *
 * Tasks are bounded by a five second grace period; a download that refuses to
 * unwind must not leave the user stuck on a terminal that will not respond.
 */
export class SignalHandler {
	private static readonly GRACE_MS = 5000;

	private static readonly tasks = new Set<ShutdownTask>();

	private static installed = false;

	private static shuttingDown = false;

	/**
	 * Adds a shutdown task.
	 *
	 * @returns A function that removes it again.
	 */
	public static register(task: ShutdownTask): () => void {
		SignalHandler.tasks.add(task);
		SignalHandler.install();

		return () => {
			SignalHandler.tasks.delete(task);

			if (!SignalHandler.tasks.size) SignalHandler.uninstall();
		};
	}

	private static readonly onSignal = (): void => {
		// a second Ctrl+C means the user is done waiting
		if (SignalHandler.shuttingDown) process.exit(130);

		SignalHandler.shuttingDown = true;

		const grace = new Promise<void>((resolve) => setTimeout(resolve, SignalHandler.GRACE_MS).unref());

		const drain = Promise.allSettled([...SignalHandler.tasks].map(async (task) => task()));

		void Promise.race([drain, grace]).then(() => process.exit(130));
	};

	private static install(): void {
		if (SignalHandler.installed) return;

		process.on('SIGINT', SignalHandler.onSignal);
		process.on('SIGTERM', SignalHandler.onSignal);

		SignalHandler.installed = true;
	}

	private static uninstall(): void {
		if (!SignalHandler.installed) return;

		process.off('SIGINT', SignalHandler.onSignal);
		process.off('SIGTERM', SignalHandler.onSignal);

		SignalHandler.installed = false;
	}
}
