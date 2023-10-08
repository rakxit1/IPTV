export const channelDetailsInfo =
  "https://iptv-org.github.io/api/channels.json";
export const channelStreaming = "https://iptv-org.github.io/api/streams.json";
export const channelGuides = "https://iptv-org.github.io/api/guides.json";
export const channelCategories =
  "https://iptv-org.github.io/api/categories.json";
export const channelLanguages = "https://iptv-org.github.io/api/languages.json";
export const channelCountry = "https://iptv-org.github.io/api/countries.json";
export const channelSubdivisions =
  "https://iptv-org.github.io/api/subdivisions.json";
export const channelRegions = "https://iptv-org.github.io/api/regions.json";
export const channelBlockedList =
  "https://iptv-org.github.io/api/blocklist.json";

export const initialVideoUrl =
  "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8";
export const IPTVIMAGEURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8lF1ln137GxhCnJqY7z3riC5iqEM7Fl9DA&usqp=CAU";
export interface videoUrlStateInterface {
  uri: string;
  type: string;
}

export interface TabCategoriesInterface {
  id: number;
  name: string;
  isSelected: boolean;
}

export const tabCategories: TabCategoriesInterface[] = [
  {
    id: 0,
    name: "All",
    isSelected: true,
  },
  {
    id: 1,
    name: "Channels Details",
    isSelected: false,
  },
  {
    id: 2,
    name: "Channels List",
    isSelected: false,
  },
];

export interface ChannelDetailsInfoInterface {
  id: string;
  name: string;
  alt_names?: (string | null)[] | null;
  network?: string | null;
  owners?: (string | null)[] | null;
  country: string;
  subdivision?: string | null;
  city?: string | null;
  broadcast_area?: string[] | null;
  languages?: string[] | null;
  categories?: (string | null)[] | null;
  is_nsfw: boolean;
  launched?: string | null;
  closed?: string | null;
  replaced_by?: string | null;
  website?: string | null;
  logo: string;
}

export interface InitDataInterface {
  added_at: string;
  bitrate: number;
  channel: string;
  checked_at: string;
  frame_rate: number;
  height: number;
  http_referrer: null;
  status: string;
  updated_at: string;
  url: string;
  user_agent: null;
  width: number;
}

export interface CountryFlagInterface {
  code: string;
  flag: string;
  languages?: string[] | null;
  name: string;
}

export interface channelLanguagesInterface {
  code: string;
  name: string;
}

export const TenChannelDetailsForAllSection: ChannelDetailsInfoInterface[] = [
  {
    alt_names: [],
    broadcast_area: ["s/ID-AC"],
    categories: [],
    city: "Banda Aceh",
    closed: null,
    country: "ID",
    id: "AcehTV.id",
    is_nsfw: false,
    languages: ["ind", "gay"],
    launched: "2006-08-15",
    logo: "https://upload.wikimedia.org/wikipedia/id/3/3d/Logo_acehtv.png",
    name: "Aceh TV",
    network: "Indonesia Network",
    owners: [],
    replaced_by: null,
    subdivision: "ID-AC",
  },
  {
    alt_names: [],
    broadcast_area: ["s/CA-MB"],
    categories: ["education", "culture"],
    city: "Winnipeg",
    closed: null,
    country: "CA",
    id: "APTNHD.ca",
    is_nsfw: false,
    languages: ["eng"],
    launched: "1992-01-21",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/APTN_Colour-300x300.svg/512px-APTN_Colour-300x300.svg.png",
    name: "APTN HD",
    network: "APTN",
    owners: ["Aboriginal Peoples Television Network Inc."],
    replaced_by: null,
    subdivision: "CA-MB",
    website: "https://www.aptntv.ca/hd/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/ID-KI"],
    categories: [],
    city: "Balikapan",
    closed: null,
    country: "ID",
    id: "BalikapanTV.id",
    is_nsfw: false,
    languages: ["ind"],
    launched: "2011-01-22",
    logo: "https://i.imgur.com/P3whqna.png",
    name: "Balikapan TV",
    network: "Jawa Pos Multimedia",
    owners: [],
    replaced_by: null,
    subdivision: "ID-KI",
    website: "https://btv.co.id/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/ID-JB"],
    categories: [],
    city: "Bandung",
    closed: null,
    country: "ID",
    id: "BandungTV.id",
    is_nsfw: false,
    languages: ["ind"],
    launched: "2005-01-03",
    logo: "https://i.imgur.com/fpFs6Ay.png",
    name: "Bandung TV",
    network: "Indonesia Network",
    owners: [],
    replaced_by: null,
    subdivision: "ID-JB",
    website: "http://bandungtv.tv/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/ID-BT"],
    categories: [],
    city: "Serang",
    closed: null,
    country: "ID",
    id: "BantenTV.id",
    is_nsfw: false,
    languages: ["ind"],
    launched: "2010-01-25",
    logo: "https://i.imgur.com/tbtF40p.png",
    name: "Banten TV",
    network: "Jawa Pos Multimedia",
    owners: [],
    replaced_by: null,
    subdivision: "ID-BT",
    website: "http://bantentv.com/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/ID-RI"],
    categories: [],
    city: "Batam",
    closed: null,
    country: "ID",
    id: "BatamTV.id",
    is_nsfw: false,
    languages: ["ind"],
    launched: "2003-01-17",
    logo: "https://i.imgur.com/lo7YXnW.png",
    name: "Batam TV",
    network: "Jawa Pos Multimedia",
    owners: [],
    replaced_by: null,
    subdivision: "ID-RI",
    website: "http://batamtvnews.com/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/ID-BE"],
    categories: [],
    city: "Bengkulu",
    closed: null,
    country: "ID",
    id: "BETV.id",
    is_nsfw: false,
    languages: ["ind"],
    launched: "2013-12-18",
    logo: "https://i.imgur.com/3EX0zax.png",
    name: "BE TV",
    network: "Jawa Pos Multimedia",
    owners: [],
    replaced_by: null,
    subdivision: "ID-BE",
    website: "http://betv.rakyatbengkulu.com/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/AR-A"],
    categories: ["general"],
    city: "Salta",
    closed: null,
    country: "AR",
    id: "Canal10Salta.ar",
    is_nsfw: false,
    languages: ["spa"],
    launched: "1971-12-24",
    logo: "https://i.imgur.com/don0WSG.png",
    name: "Canal 10 Salta",
    network: "Multivisión Federal",
    owners: [],
    replaced_by: null,
    subdivision: "AR-A",
    website: "https://el10tv.com/",
  },
  {
    alt_names: [],
    broadcast_area: ["s/AR-B"],
    categories: [],
    city: "Trenque Lauquen",
    closed: null,
    country: "AR",
    id: "Canal12TrenqueLauquen.ar",
    is_nsfw: false,
    languages: ["spa"],
    launched: "1970-05-22",
    logo: "https://i.imgur.com/gbqqsGg.png",
    name: "Canal 12 Trenque Lauquen",
    network: "Radio y Televisión Argentina S.E.",
    owners: [],
    replaced_by: null,
    subdivision: "AR-B",
    website: "https://noticiasdoce.com.ar/",
  },
  {
    alt_names: [],
    broadcast_area: ["c/MX"],
    categories: [],
    city: "Aguascalientes",
    closed: null,
    country: "MX",
    id: "Canal26.mx",
    is_nsfw: false,
    languages: ["spa"],
    launched: "1996-04-01",
    logo: "https://i.imgur.com/PAvnVN9.png",
    name: "Canal 26",
    network: "RYTA",
    owners: [],
    replaced_by: null,
    subdivision: "MX-AGU",
    website: "https://ryta.com.mx/",
  },
];

export const TenChannelFlagForAllSection: CountryFlagInterface[] = [
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "CA", flag: "🇨🇦", languages: ["eng", "fra"], name: "Canada" },
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "ID", flag: "🇮🇩", languages: ["ind"], name: "Indonesia" },
  { code: "AR", flag: "🇦🇷", languages: ["grn", "spa"], name: "Argentina" },
  { code: "AR", flag: "🇦🇷", languages: ["grn", "spa"], name: "Argentina" },
  { code: "MX", flag: "🇲🇽", languages: ["spa"], name: "Mexico" },
];
