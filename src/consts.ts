// Central site data & helpers — single source of truth for content & navigation.

// import.meta.env.BASE_URL may or may not have a trailing slash depending on config —
// normalise to a base without a trailing slash so we control the joins ourselves.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Build an absolute (base-prefixed) in-site URL from a path like "musiker". */
export const url = (path = ''): string => {
  const p = path.replace(/^\/+/, '');
  return p ? `${BASE}/${p}` : `${BASE}/`;
};

/** Build a URL to a file in /public (images, etc.). */
export const asset = (path: string): string => url(path);

// Hosts on which the site is a staging/preview deployment and must NOT be indexed
// by search engines. Matched against location.hostname at runtime (exact host or any
// subdomain of these). Everything else — i.e. the real production domain — is indexed
// automatically, no manual switch needed. Add patterns here if you use other previews.
export const STAGING_HOST_PATTERNS: string[] = [
  'github.io', // GitHub Pages preview, e.g. waltermelcher.github.io
  'pages.dev', // Cloudflare Pages previews
  'netlify.app', // Netlify previews
  'vercel.app', // Vercel previews
];

export const SITE = {
  name: 'Brass.313',
  claim: 'Blasmusik ausm Ländle',
  email: 'info@brass313.de',
  instagram: 'https://www.instagram.com/brass.313/',
  description:
    'Sieben Musiker, eine Leidenschaft: Brass.313 verbindet traditionelle Blasmusik mit modernen Pop-Arrangements zu einem einzigartigen Klangerlebnis.',
};

export type NavItem = { label: string; href: string; id: string };

// One-pager: nav points at in-page anchors. Absolute (base) hrefs so the links
// also work from the separate Impressum page (jump back to home + section).
export const NAV: NavItem[] = [
  { label: 'Wer wir sind', href: `${url('')}#band`, id: 'band' },
  { label: 'Auftritte', href: `${url('')}#auftritte`, id: 'auftritte' },
  { label: 'Termine', href: `${url('')}#termine`, id: 'termine' },
  { label: 'Musiker', href: `${url('')}#musiker`, id: 'musiker' },
  { label: 'Kontakt', href: `${url('')}#kontakt`, id: 'kontakt' },
];

export type Musician = { name: string; image: string };

// Original site lists the seven members by name (instruments are not individually
// specified — only the overall formation: 3 hohe Bläser, 1 Schlagzeuger, 3 tiefe Bläser).
// `image` = placeholder band/performance photos. Swap in real portraits here per person.
export const MUSICIANS: Musician[] = [
  { name: 'Bálint Takács', image: 'images/m1.jpg' },
  { name: 'Simon Harder', image: 'images/m2.jpg' },
  { name: 'Christian Geltner', image: 'images/m3.jpg' },
  { name: 'Marcel Jäger', image: 'images/m4.jpg' },
  { name: 'Christoph Kolb', image: 'images/m5.jpg' },
  { name: 'Lucas Class', image: 'images/m6.jpg' },
  { name: 'Sascha Schröter', image: 'images/m7.jpg' },
];

export type Gig = {
  date: string; // ISO
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  note: string;
};

export const GIGS: Gig[] = [
  {
    date: '2026-05-16',
    day: '16',
    month: 'Mai',
    title: 'Musiknacht Nürtingen',
    location: 'Nürtingen',
    time: '19:00 Uhr',
    note: 'Open Air · Eintritt frei',
  },
  {
    date: '2026-08-09',
    day: '09',
    month: 'Aug',
    title: 'Zehntscheuer Nabern',
    location: 'Nabern',
    time: '11:00 Uhr',
    note: 'Unterhaltung · Eintritt frei',
  },
  {
    date: '2026-08-14',
    day: '14',
    month: 'Aug',
    title: 'Kulturforum Metzingen',
    location: 'Metzingen',
    time: '19:00 Uhr',
    note: 'Open Air · Eintritt frei',
  },
  {
    date: '2026-09-05',
    day: '05',
    month: 'Sep',
    title: 'Neckarmüller Tübingen',
    location: 'Tübingen',
    time: '12:00 Uhr',
    note: 'Unterhaltung · Eintritt frei',
  },
];

export type Offer = { title: string; text: string };

export const OFFERS: Offer[] = [
  {
    title: 'Konzertreihen',
    text: 'Abendfüllende Programme mit bestuhltem Publikum — von traditioneller Blasmusik bis zu modernen Pop-Arrangements.',
  },
  {
    title: 'Festzeltauftritte',
    text: 'Stimmungsvolle Unterhaltung für Volksfeste, Zeltfeste und Feiern — der Sound, der das Festzelt zum Kochen bringt.',
  },
  {
    title: 'Event-Umrahmung',
    text: 'Die passende musikalische Begleitung für Empfänge, Jubiläen und besondere Anlässe — präzise abgestimmt auf Ihr Event.',
  },
  {
    title: 'Firmenfeiern',
    text: 'Hochwertige Live-Musik für Firmenevents und Galas, die Ihre Gäste begeistert und in Erinnerung bleibt.',
  },
];
