import type { AnyProvider } from '@contracts';
import { Provider } from '@types';
import { AnalRzProvider } from '../analrz/AnalRzProvider';
import { ArtStationProvider } from '../artstation/ArtStationProvider';
import { BeegProvider } from '../beeg/BeegProvider';
import { BehanceProvider } from '../behance/BehanceProvider';
import { BlackPornProvider } from '../blackporn/BlackPornProvider';
import { BlueskyProvider } from '../bluesky/BlueskyProvider';
import { BoKepPornProvider } from '../bokepporn/BoKepPornProvider';
import { ColliderPornProvider } from '../colliderporn/ColliderPornProvider';
import { CumLouderProvider } from '../cumlouder/CumLouderProvider';
import { DaFreePornProvider } from '../dafreeporn/DaFreePornProvider';
import { DanbooruProvider } from '../danbooru/DanbooruProvider';
import { DaNudeProvider } from '../danude/DaNudeProvider';
import { DeviantArtProvider } from '../deviantart/DeviantArtProvider';
import { EpicGfsProvider } from '../epicgfs/EpicGfsProvider';
import { EPornerProvider } from '../eporner/EPornerProvider';
import { FlickrProvider } from '../flickr/FlickrProvider';
import { GelbooruProvider } from '../gelbooru/GelbooruProvider';
import { HqPornProvider } from '../hqporn/HqPornProvider';
import { ImgurProvider } from '../imgur/ImgurProvider';
import { InstagramProvider } from '../instagram/InstagramProvider';
import { InterracialProvider } from '../interracial/InterracialProvider';
import { ItsPornProvider } from '../itsporn/ItsPornProvider';
import { Lesbian8Provider } from '../lesbian8/Lesbian8Provider';
import { MangaDexProvider } from '../mangadex/MangaDexProvider';
import { MastodonProvider } from '../mastodon/MastodonProvider';
import { MegaTubeProvider } from '../megatube/MegaTubeProvider';
import { MomVidsProvider } from '../momvids/MomVidsProvider';
import { MyLustProvider } from '../mylust/MyLustProvider';
import { NewgroundsProvider } from '../newgrounds/NewgroundsProvider';
import { OkPornProvider } from '../okporn/OkPornProvider';
import { PerfectGirlsProvider } from '../perfectgirls/PerfectGirlsProvider';
import { PexelsProvider } from '../pexels/PexelsProvider';
import { PinterestProvider } from '../pinterest/PinterestProvider';
import { PixivProvider } from '../pixiv/PixivProvider';
import { Porn300Provider } from '../porn300/Porn300Provider';
import { PornDoeProvider } from '../porndoe/PornDoeProvider';
import { PornHubProvider } from '../pornhub/PornHubProvider';
import { PornIdProvider } from '../pornid/PornIdProvider';
import { PornOneProvider } from '../pornone/PornOneProvider';
import { PornSevenProvider } from '../pornseven/PornSevenProvider';
import { PornsOkProvider } from '../pornsok/PornsOkProvider';
import { PussySpaceProvider } from '../pussyspace/PussySpaceProvider';
import { RedditProvider } from '../reddit/RedditProvider';
import { SexVidProvider } from '../sexvid/SexVidProvider';
import { ShamelessProvider } from '../shameless/ShamelessProvider';
import { SuperPornProvider } from '../superporn/SuperPornProvider';
import { SxyPornProvider } from '../sxyporn/SxyPornProvider';
import { TheyAreHugeProvider } from '../theyarehuge/TheyAreHugeProvider';
import { TikTokProvider } from '../tiktok/TikTokProvider';
import { TnAFlixProvider } from '../tnaflix/TnAFlixProvider';
import { TubeVSexProvider } from '../tubevsex/TubeVSexProvider';
import { TumblrProvider } from '../tumblr/TumblrProvider';
import { TwitterProvider } from '../twitter/TwitterProvider';
import { UnsplashProvider } from '../unsplash/UnsplashProvider';
import { WallHavenProvider } from '../wallhaven/WallHavenProvider';
import { WikiArtProvider } from '../wikiart/WikiArtProvider';
import { WikimediaProvider } from '../wikimedia/WikimediaProvider';
import { XCafeProvider } from '../xcafe/XCafeProvider';
import { XDeguProvider } from '../xdegu/XDeguProvider';
import { XGroovyProvider } from '../xgroovy/XGroovyProvider';
import { XHamsterProvider } from '../xhamster/XHamsterProvider';
import { XnXXProvider } from '../xnxx/XnXXProvider';
import { XozillaProvider } from '../xozilla/XozillaProvider';
import { XVideosProvider } from '../xvideos/XVideosProvider';
import { ZbPornProvider } from '../zbporn/ZbPornProvider';
import { ZzzTubeProvider } from '../zzztube/ZzzTubeProvider';

/**
 * Every provider class, keyed by the provider it serves.
 *
 * @remarks
 * This lives under `providers/` rather than `core/` on purpose. A provider table
 * inside the core layer is what made `core` depend on `providers` and closed the
 * import cycle removed in #154; here the dependency only ever points one way.
 *
 * `Default` is deliberately absent. It is the fallback used when nothing matches,
 * and listing it would make this module and `DefaultProvider` import each other.
 */
export const providerClasses: Partial<Record<Provider, new (url: string) => AnyProvider>> = {
	[Provider.AnalRz]: AnalRzProvider,
	[Provider.ArtStation]: ArtStationProvider,
	[Provider.Beeg]: BeegProvider,
	[Provider.Behance]: BehanceProvider,
	[Provider.BlackPorn]: BlackPornProvider,
	[Provider.Bluesky]: BlueskyProvider,
	[Provider.BoKepPorn]: BoKepPornProvider,
	[Provider.ColliderPorn]: ColliderPornProvider,
	[Provider.CumLouder]: CumLouderProvider,
	[Provider.DaFreePorn]: DaFreePornProvider,
	[Provider.DaNude]: DaNudeProvider,
	[Provider.Danbooru]: DanbooruProvider,
	[Provider.DeviantArt]: DeviantArtProvider,
	[Provider.EPorner]: EPornerProvider,
	[Provider.EpicGfs]: EpicGfsProvider,
	[Provider.Flickr]: FlickrProvider,
	[Provider.Gelbooru]: GelbooruProvider,
	[Provider.HqPorn]: HqPornProvider,
	[Provider.Imgur]: ImgurProvider,
	[Provider.Instagram]: InstagramProvider,
	[Provider.Interracial]: InterracialProvider,
	[Provider.ItsPorn]: ItsPornProvider,
	[Provider.Lesbian8]: Lesbian8Provider,
	[Provider.MangaDex]: MangaDexProvider,
	[Provider.Mastodon]: MastodonProvider,
	[Provider.MegaTube]: MegaTubeProvider,
	[Provider.MomVids]: MomVidsProvider,
	[Provider.MyLust]: MyLustProvider,
	[Provider.Newgrounds]: NewgroundsProvider,
	[Provider.OkPorn]: OkPornProvider,
	[Provider.PerfectGirls]: PerfectGirlsProvider,
	[Provider.Pexels]: PexelsProvider,
	[Provider.Pinterest]: PinterestProvider,
	[Provider.Pixiv]: PixivProvider,
	[Provider.Porn300]: Porn300Provider,
	[Provider.PornDoe]: PornDoeProvider,
	[Provider.PornHub]: PornHubProvider,
	[Provider.PornId]: PornIdProvider,
	[Provider.PornOne]: PornOneProvider,
	[Provider.PornSeven]: PornSevenProvider,
	[Provider.PornsOk]: PornsOkProvider,
	[Provider.PussySpace]: PussySpaceProvider,
	[Provider.Reddit]: RedditProvider,
	[Provider.SexVid]: SexVidProvider,
	[Provider.Shameless]: ShamelessProvider,
	[Provider.SuperPorn]: SuperPornProvider,
	[Provider.SxyPorn]: SxyPornProvider,
	[Provider.TheyAreHuge]: TheyAreHugeProvider,
	[Provider.TikTok]: TikTokProvider,
	[Provider.TnAFlix]: TnAFlixProvider,
	[Provider.TubeVSex]: TubeVSexProvider,
	[Provider.Tumblr]: TumblrProvider,
	[Provider.Twitter]: TwitterProvider,
	[Provider.Unsplash]: UnsplashProvider,
	[Provider.WallHaven]: WallHavenProvider,
	[Provider.WikiArt]: WikiArtProvider,
	[Provider.Wikimedia]: WikimediaProvider,
	[Provider.XCafe]: XCafeProvider,
	[Provider.XDegu]: XDeguProvider,
	[Provider.XGroovy]: XGroovyProvider,
	[Provider.XHamster]: XHamsterProvider,
	[Provider.XVideos]: XVideosProvider,
	[Provider.XnXX]: XnXXProvider,
	[Provider.Xozilla]: XozillaProvider,
	[Provider.ZbPorn]: ZbPornProvider,
	[Provider.ZzzTube]: ZzzTubeProvider
};
