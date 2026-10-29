/**
 * Artist roster data — mirrors the Stitch "HORDE MERCH // ARTIST ROSTER"
 * screen: 5 featured bands, each with official t-shirt releases.
 * Images are public aida-public assets served by googleusercontent.
 */

export const TEE_SIZES = ["S", "M", "L", "XL", "2X"] as const;
export type TeeSize = (typeof TEE_SIZES)[number];

export type TeeTagTone = "blood" | "inverse" | "neutral";

export interface Tee {
  id: string;
  name: string;
  tag: string;
  tagTone: TeeTagTone;
  price: number;
  desc: string;
  image: string;
  sizes: TeeSize[];
}

export interface Band {
  id: string;
  code: string;
  name: string;
  genre: string;
  origin: string;
  badge: string;
  status: string;
  album: string;
  bg: string;
  description: string;
  tshirts: Tee[];
}

const IMG = {
  pentagram:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOss9PtGUQVRk4UzPm6q5IDclb9HqtOYtDyilYU6e-VLRje3UosPhC-6Vuqk2rHFeulLjy9lJc-2F26-0uptwU3rD-BwJsVV-kmOsIT7jVkbvW6hsKg4al4y84QCKCHU4szthvMEoVHapVVDc_-k8Sy4trkFC92JbC64ii0HNjVJVdiq-KmAceyZcN9fSDgIOQb0E1wDx5Y7XxU-Ntap7WmrNFlBnUUsOJJzurPt3z",
  sigil:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8FfiuQ5vDqDVuINhJMMKJAMusYRRUY6Y1RcXq0oFFhohmKRAma3r5UUz5XwN5i9UIUz2-OjSQDAaEmftDQ_TQXZFQMLC3ZlceTkppv4Ojhz6_p-S4YTaceynwBfpxb7yJCmjGmhYJT7CduNpcazlW4tNIiOYX3_em5FaL2aWvOXW-XVScQ29KBmd1UozbZ7RdEO51JCeY8_jqNvWLyS2KJ35Vnqf1GUtp-KYTSlqF",
  blasphemy:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhj_QQC8L87mypPAyjP6PLYhGPJVWoTp5sk4ZMlN6sb56kIcKfRyyvdpureOtZjovLtsfanR6CZObQ2UkwhFhTycafGWD9eiSlqeOZvp2lDH2GNUQeleBIUjr_jUFA_duo3e2K5ycGh2illDmRRuqYtA9EGwMN9hiwKZfcZlhUYoVBp5KWlgijoebI7D1qnLf8p66R8_cs5yKuBj5AQRMI87npn29NGT9-2ONEzGkt",
  necrotic:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8O1YVlSZ6ENBPoEUL5pZzOy-klUyxFadMCgUXNl2kPEvsjP0Xq0m942Ya6VpVlCamr_b8RKkvU7_bHsGQKNRtps7XAHi5OFklF-VFxJds8jod2MSxx7-mp8O4dgJ3bKwiXNLjgNoTflB0dnXnikrhGHFReKAMfWNHLARlJTo7IO2C4UDK5-IPX-ewgA0GD9FhCjX0UN0IxWvWHrjQ73anIfsCKa7FHZy_VMnTC8c5",
  deathWeaverBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFXJ9jcsLW2k0-cW_NNnqjW-CPPNQf4ero6ehTH6B3pblCpO_504NOW02TqG5IqB893tl64YjBmUxKUaooEeD8Qv1d4LdOfR12pCqP_g5eZzf1mPJ3QxXYeDQK74JayilAB7vW5y6xcpBpVjj38r9x1p6W2BsxhmeWv76gshl_05YB5YtfJ0hIEmwLIcsrBKmoa04OJPehfDGvd6HrZ2K-e8p-fT2xJBKk9L2iLW21",
  voidBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6GSTiPqHEe6z6Iqq-Z3BVV-7IrTzOMRBBoIHav7Y1E2JAkGmPiwGbjErN49shHVrFl5dTKPL7N9tf-rFBvH4xkkxN1SNA4e-atmdvhL9XAzl_YAb_rKdPUfRfw_PgVglu0FAB7fAMAfhRdPsG781g3HCOe4eTB0sH-XeFD0SoYW2wX5OOXxjaIieo37VUgyeosbNClbCBwHCAYsA1X-_mwOd7eQf0bl4Fv8X9GFSh",
  ironBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9hVtQ5LC3PAzAosASRT9bP0JI1lf3N7z5MHCFwALp4b349Vi9qbMPh-Sy_4GsUyoGx0SGQS5JB61AggBRgRFT0vlWXL_aByFzEBIg6MJT7dkua6TcHgwPRgKe_ykom6QlazThMRKHOatrOeI2tZ9IWakcokrkEmwc8zIt0H7_1pJ8Fm5vWH5AjW-8Z_WgESJxwummyjT4vA4NOHUOWtzfBj2AUPsbXvPXS7J5P5dl",
  thrashBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjeD_i2g1QWrRUgEfWtMVJKjcRw5kA9gZMvbWEkcT4iK8pNtttofhwD_sXKuJAQLvmjhQfMUKTVVxa12dBQJxGh_TsmuBU1eSsiaaDkHmOmADuxLna249p421BT7ugXNEN9xp1-SPrYesFGUOW0_WErICr7zQG7X-pKE4rrmdRFxE-2B7AB0IPD39j1VssbgSQ8WBSO_uJTwNd0YdE9ucYG6lPmbSa0ZvRX4KnwepR",
  soulBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wgXu-L1IOLAWHJWHXJEoLs7xAD-Ju1Bbuxq1pUs6pOqmemxBj9qVXkSs2h-N69_yNxxOaxP4bVgMHEZY5XHiTFG6SQRdYC6J6XFBVCdGVDt1zYPXd52z11Dw-f7zbpebq6joKFirgLMOTo6OQmiwQ6uirCpRlv-FzhKS4AmntFf8cOS34O8jNxHVK95VaZ-vL2GOsEMLcqTC85r3_JDbbkFk66UAxvSqpXLgSc7Y",
} as const;

export const BAND_IDS = [
  "death-weaver",
  "void-screamer",
  "iron-ritual",
  "abyssal-thrash",
  "blackened-soul",
] as const;

export type BandId = (typeof BAND_IDS)[number];

export const BANDS: Record<BandId, Band> = {
  "death-weaver": {
    id: "death-weaver",
    code: "DW_01",
    name: "DEATH WEAVER",
    genre: "BLACKENED DEATH METAL",
    origin: "OSLO, NORWAY",
    badge: "SELECTED",
    status: "PRIMARY SHOWCASE",
    album: "LATEST LP: RITUAL OF ASH (2024)",
    bg: IMG.deathWeaverBg,
    description:
      "Forged in the frozen underground of Scandinavia, Death Weaver delivers uncompromising sonic brutality. Explore their official tour merchandise, exclusive vinyl editions, and limited apparel crafted for high durability and pit destruction.",
    tshirts: [
      {
        id: "dw-tee-1",
        name: "RITUAL PENTAGRAM TOUR TEE",
        tag: "EXCLUSIVE TOUR DROP",
        tagTone: "blood",
        price: 35,
        desc: "100% heavy carded cotton (240 GSM). Discharge hand-printed with faded blood red pigment.",
        image: IMG.pentagram,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "dw-tee-2",
        name: "GRIM SIGIL ACID-WASH DISTRESSED TEE",
        tag: "NEW RELEASE",
        tagTone: "blood",
        price: 38,
        desc: "Mineral washed individual treatment for unique distress pattern. Heavy ribbed collar.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "dw-tee-3",
        name: "SCANDINAVIAN BLASPHEMY GRAPHIC TEE",
        tag: "LOW STOCK (4 LEFT)",
        tagTone: "blood",
        price: 36,
        desc: "High density plastisol ink on jet black ring-spun cotton. High tension double-needle stitching.",
        image: IMG.blasphemy,
        sizes: ["M", "L", "XL"],
      },
      {
        id: "dw-tee-4",
        name: "NECROTIC HYMNS PIT RELIC TEE",
        tag: "LIMITED RUN (300 PCS)",
        tagTone: "neutral",
        price: 34,
        desc: "Vintage enzyme washed 220 GSM heavyweight jersey. Dual side print featuring full runic tracklist.",
        image: IMG.necrotic,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "dw-tee-5",
        name: "ASHEN RITES TOUR SHIRT",
        tag: "EXCLUSIVE",
        tagTone: "blood",
        price: 37,
        desc: "Premium heavyweight cotton with vintage tour print. Limited edition design.",
        image: IMG.pentagram,
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "dw-tee-6",
        name: "CRYPTIC SIGIL VINTAGE WASH",
        tag: "NEW",
        tagTone: "neutral",
        price: 39,
        desc: "Acid washed black tee with distressed cryptic symbols. Unique finish.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "dw-tee-7",
        name: "BLACK MASS CEREMONY TEE",
        tag: "LIMITED",
        tagTone: "blood",
        price: 36,
        desc: "Dark ritualistic artwork printed on jet black cotton. Heavyweight feel.",
        image: IMG.blasphemy,
        sizes: ["S", "M", "L"],
      },
      {
        id: "dw-tee-8",
        name: "FORGOTTEN TOMBS GRAPHIC TEE",
        tag: "RESTOCK",
        tagTone: "neutral",
        price: 35,
        desc: "Ominous graveyard artwork with high detail print. Soft ring-spun cotton.",
        image: IMG.necrotic,
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "dw-tee-9",
        name: "RITUAL OF ASH ALBUM TEE",
        tag: "ALBUM MERCH",
        tagTone: "blood",
        price: 40,
        desc: "Official album artwork on heavyweight tee. Collector's item.",
        image: IMG.pentagram,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "dw-tee-10",
        name: "FROZEN CRYPT LONG SLEEVE",
        tag: "SEASONAL",
        tagTone: "neutral",
        price: 42,
        desc: "Long sleeve version with extended artwork. Perfect for cold weather.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL"],
      },
    ],
  },
  "void-screamer": {
    id: "void-screamer",
    code: "VS_02",
    name: "VOID SCREAMER",
    genre: "COSMIC ABYSS",
    origin: "PORTLAND, OR",
    badge: "ACTIVE",
    status: "COSMIC ARCHIVE",
    album: "LATEST LP: BLACK CELESTIAL SINGULARITY (2023)",
    bg: IMG.voidBg,
    description:
      "Channelling deep cosmic isolation through sonic dissonance and hypnotic droning riffs. Official screenprinted band apparel utilizing sulfur-washed pigments and zero softeners for true raw texture.",
    tshirts: [
      {
        id: "vs-tee-1",
        name: "COSMIC ABYSS VOID GRAPHIC TEE",
        tag: "SIGNATURE DROP",
        tagTone: "blood",
        price: 36,
        desc: "260 GSM custom milled heavyweight cotton. Deep ultraviolet glow discharge screen print on pitch black.",
        image: IMG.voidBg,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "vs-tee-2",
        name: "CELESTIAL HORROR VINTAGE WASH TEE",
        tag: "TOUR EXCLUSIVE",
        tagTone: "inverse",
        price: 39,
        desc: "Hand-dyed mineral charcoal bath. Features distorted astral vortex front graphic with distressed back sigil.",
        image: IMG.pentagram,
        sizes: ["M", "L", "XL", "2X"],
      },
      {
        id: "vs-tee-3",
        name: "ASTRAL DECAY OVERSIZED TOUR TEE",
        tag: "LOW RUN",
        tagTone: "neutral",
        price: 42,
        desc: "Drop-shoulder boxy cut. 280 GSM ultra-heavy combed cotton with silver metallic foil ink details.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL"],
      },
    ],
  },
  "iron-ritual": {
    id: "iron-ritual",
    code: "IR_03",
    name: "IRON RITUAL",
    genre: "DOOM SLUDGE",
    origin: "LEEDS, UK",
    badge: "TOUR DROP",
    status: "UK DOOM MONOLITH",
    album: "LATEST LP: GRAVITATIONAL TORTURE (2024)",
    bg: IMG.ironBg,
    description:
      "Slow, crushing, earth-shattering monoliths of pure British sludge doom. These t-shirts are constructed from brutalist thick 250 GSM heavy iron-weave cotton built to outlast any pit.",
    tshirts: [
      {
        id: "ir-tee-1",
        name: "FORGED IN DARKNESS HEAVY ANVIL TEE",
        tag: "TOUR VAULT",
        tagTone: "blood",
        price: 36,
        desc: "Raw uncombed 250 GSM canvas-grade cotton. Printed with industrial sludge gray ink and chain artwork.",
        image: IMG.ironBg,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "ir-tee-2",
        name: "BLACKENED SLUDGE DISTRESSED BOXY TEE",
        tag: "RESTOCKED",
        tagTone: "inverse",
        price: 38,
        desc: "Boxy skater fit with drop collar. Grungy oil wash with monolithic sacrificial altar front print.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "ir-tee-3",
        name: "IRON CORE DOOM RITUAL TEE",
        tag: "LIMITED TO 200",
        tagTone: "neutral",
        price: 35,
        desc: "Rigid structure with reinforced collar ribbing. Features Leeds underground tour dates on reverse.",
        image: IMG.pentagram,
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  "abyssal-thrash": {
    id: "abyssal-thrash",
    code: "AT_04",
    name: "ABYSSAL THRASH",
    genre: "RAW THRASH",
    origin: "SÃO PAULO, BR",
    badge: "ACTIVE",
    status: "SOUTH AMERICAN ATTACK",
    album: "LATEST LP: SPEED METAL DECAPITATION (2024)",
    bg: IMG.thrashBg,
    description:
      "Raw, hyper-fast South American thrash mayhem. Aggressive cracked-ink screenprints printed directly onto indestructible combat-weight heavy tees.",
    tshirts: [
      {
        id: "at-tee-1",
        name: "UNDER THE ABYSS SPEED/THRASH TEE",
        tag: "PIT FAVORITE",
        tagTone: "blood",
        price: 34,
        desc: "High velocity nuclear skull print with intentional ink cracking. 100% Brazilian heavy jersey.",
        image: IMG.thrashBg,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "at-tee-2",
        name: "MANTICORE PIT RELIC TEE",
        tag: "REPRINT DROP",
        tagTone: "inverse",
        price: 36,
        desc: "Distressed blood-splattered print with barbed wire borders. Pre-washed for that genuine 1988 relic handfeel.",
        image: IMG.pentagram,
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "at-tee-3",
        name: "RAW VIOLENCE 1998 REPRINT TEE",
        tag: "LIMITED TO 250",
        tagTone: "neutral",
        price: 37,
        desc: "Exact reproduction of the cult São Paulo underground show tee with flyer graphics on the back.",
        image: IMG.blasphemy,
        sizes: ["M", "L", "XL", "2X"],
      },
    ],
  },
  "blackened-soul": {
    id: "blackened-soul",
    code: "BS_05",
    name: "BLACKENED SOUL",
    genre: "SYMPHONIC BLACK",
    origin: "GOTHENBURG, SE",
    badge: "RESTOCK",
    status: "SCANDINAVIAN MAJESTY",
    album: "LATEST LP: HYMNS OF THE VOID REVEREND (2024)",
    bg: IMG.soulBg,
    description:
      "Ornate, baroque atmospheres married with ferocious Scandinavian blastbeats. Exquisite high-definition screenprints featuring gothic cathedral ruins and intricate lunar sigils.",
    tshirts: [
      {
        id: "bs-tee-1",
        name: "CATHEDRAL OF SHADOWS GOTHIC TEE",
        tag: "RESTOCKED",
        tagTone: "blood",
        price: 38,
        desc: "Baroque cathedral silhouette printed in high contrast silver and bone white ink on deep black 240 GSM cotton.",
        image: IMG.soulBg,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
      {
        id: "bs-tee-2",
        name: "SYMPHONY OF THE DAMNED MINERAL WASH TEE",
        tag: "SIGNATURE DROP",
        tagTone: "inverse",
        price: 40,
        desc: "Acid mist charcoal wash with antique gold metallic logo highlights and ornate back score notation.",
        image: IMG.sigil,
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "bs-tee-3",
        name: "ETHEREAL ECLIPSE VINTAGE TOUR TEE",
        tag: "LIMITED RUN (400)",
        tagTone: "neutral",
        price: 36,
        desc: "Gothic black metal typography across chest with Swedish cathedral architecture on rear.",
        image: IMG.pentagram,
        sizes: ["S", "M", "L", "XL", "2X"],
      },
    ],
  },
};

/** Band match used by the SEARCH BAND / ARTIST console. */
export function getBandMatch(query: string): {
  matched: BandId | null;
  count: number;
} {
  const val = query.trim().toLowerCase();
  if (!val) return { matched: null, count: BAND_IDS.length };

  const matches = BAND_IDS.filter((id) => {
    const name = BANDS[id].name.toLowerCase();
    const key = id.replace(/-/g, " ");
    return name.includes(val) || key.includes(val);
  });

  return { matched: matches[0] ?? null, count: matches.length };
}