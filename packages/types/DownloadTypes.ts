/** Job output mode */
export enum OutputType {
	/** Writes files to device storage */
	DEVICE = 'DEVICE',

	/** Writes ExecutionCoordinator metadata as JSON */
	JSON = 'JSON',

	/**
	 * Delivers each item as a readable stream.
	 *
	 * @remarks
	 * Bytes are never held in memory: transport media is remuxed on the fly and
	 * piped straight through, so an HTTP handler can forward it to the client at
	 * constant memory regardless of file size.
	 */
	STREAM = 'STREAM',

	/** Returns extracted metadata without downloading */
	RETURN = 'RETURN'
}
