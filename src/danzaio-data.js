export const heroStats = [
  {
    label: 'Supported scripts',
    value: '30',
    note: '30 champion entries are currently listed in the Rift+ lineup.',
  },
  {
    label: 'Suite name',
    value: 'Rift+',
    note: 'One name, one lineup, one place to browse the suite.',
  },
  {
    label: 'Community',
    value: 'TG + DC',
    note: 'Telegram and Discord are both linked directly from the suite.',
  },
];

export const suiteSignals = [
  'supported.scripts // 30',
  'prediction.settings // available',
  'combo.harass.clear // common',
  'telegram.discord // linked',
];

export const featureCards = [
  {
    kicker: 'Current lineup',
    title: '30 supported entries are already in rotation.',
    body: 'The lineup includes names like Ezreal, Jinx, Aphelios, Zed, Pyke, Blitz, Senna, Zoe, Mel, Yunara, and more, with HOT, UPD, TEST, and NEW tags visible in the suite.',
  },
  {
    kicker: 'Prediction menus',
    title: 'Prediction settings are there when you want them.',
    body: 'Supported champions like Ezreal, Jinx, and Blitzcrank expose prediction controls directly in their menus, including hitchance tuning on supported pages.',
  },
  {
    kicker: 'Core modes',
    title: 'Combo, Harass, and Clear stay easy to tune.',
    body: 'The most common menu sections are built around real in-game use: combo pressure, harass windows, and clear control.',
  },
  {
    kicker: 'Useful extras',
    title: 'Drawings, killsteal, and utility pages are built in.',
    body: 'Many champions also add drawings and killsteal sections, while selected scripts go further with reactive logic, semi-manual keys, and per-enemy controls.',
  },
  {
    kicker: 'Champion depth',
    title: 'Some scripts go far beyond basic toggles.',
    body: 'Ezreal adds smart targeting and Auto Q tools, Pyke brings E Magnet and E+Flash options, Aphelios gets weapon-pair logic, and Zed includes Flash Tech and reactive settings.',
  },
  {
    kicker: 'Support access',
    title: 'The community is always one click away.',
    body: 'Telegram and Discord links are built in, and the suite supports both English and Chinese text paths.',
  },
];

export const spotlightScripts = [
  {
    name: 'EZREAL',
    title: 'Mystic Shot Prediction',
    laneLabel: 'Menu',
    lane: 'Prediction + Q',
    systemLabel: 'Focus',
    system: 'Smart targeting',
    blurb:
      'Prediction Settings, smart targeting, Auto Q controls, and dedicated Mystic Shot and Essence Flux pages keep Ezreal flexible without feeling bloated.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    crest: './assets/crests/piltover.png',
    crestAlt: 'piltover crest',
    href: '#roster',
  },
  {
    name: 'PYKE',
    title: 'Execute Resets',
    laneLabel: 'Menu',
    lane: 'Q / E / R',
    systemLabel: 'Focus',
    system: 'E Magnet + safety',
    blurb:
      'Bone Skewer, Phantom Undertow, E Magnet, safety checks, and E+Flash follow tools give Pyke players more control over every engage.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg',
    crest: './assets/crests/shadow-isles.png',
    crestAlt: 'shadow isles crest',
    href: '#roster',
  },
  {
    name: 'APHELIOS',
    title: 'Weapon Pair Automation',
    laneLabel: 'Menu',
    lane: 'Q / W / R',
    systemLabel: 'Focus',
    system: 'Pairs + reactive',
    blurb:
      'Weapon logic, pair controls, killsteal, reactive options, safety rules, flee behavior, and per-enemy controls make this one of the deepest scripts in the lineup.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg',
    crest: './assets/icons/content-type-champion.png',
    crestAlt: 'champion icon',
    href: '#roster',
  },
  {
    name: 'ZED',
    title: 'Shadow State Combat',
    laneLabel: 'Menu',
    lane: 'Combo + flash',
    systemLabel: 'Focus',
    system: 'Reactive + drawings',
    blurb:
      'Prediction, combo, harass, killsteal, Flash Tech, reactive settings, clear, last-hit, and low-HP drawing tools give Zed players a wide control surface.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    crest: './assets/icons/content-type-trending.png',
    crestAlt: 'trending icon',
    href: '#roster',
  },
];

export const rosterCards = [
  {
    name: 'BLITZ',
    role: 'Hook Prediction',
    label: 'SCRIPT',
    description: 'Prediction Settings, Auto Q logic, interrupt lists, anti-gapclose options, and keybind tools are all exposed in the Blitzcrank menu.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
    position: 'center top',
  },
  {
    name: 'JINX',
    role: 'Get Excited Reset',
    label: 'HOT',
    description: 'Prediction Settings, spell pages, Automatic options, Killsteal Settings, Draw Settings, and Permashow keep Jinx easy to shape around your playstyle.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    position: 'center top',
  },
  {
    name: 'CAITLYN',
    role: 'Trap Logic',
    label: 'SCRIPT',
    description: 'Trap Logic is one of the highlighted focuses in the lineup and fits players who want more control around lane pressure and trap setup.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    position: 'center top',
  },
  {
    name: 'SENNA',
    role: 'Soul Farming',
    label: 'UPD',
    description: 'Marked UPD in the lineup, Senna stands out as one of the maintained entries for players who want scaling utility and range.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg',
    position: 'center top',
  },
  {
    name: 'SAMIRA',
    role: 'S-Rank Combo',
    label: 'HOT',
    description: 'Marked HOT in the lineup, Samira is positioned for players who want fast combo flow and high-tempo all-in play.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg',
    position: 'center top',
  },
  {
    name: 'ZOE',
    role: 'Arcane Logic',
    label: 'NEW',
    description: 'Marked NEW in the lineup, Zoe shows up as one of the fresher options for players who want a more specialist script profile.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
    position: 'center top',
  },
];

export const changelogEntries = [
  {
    version: 'Lineup',
    date: '30 entries',
    type: 'visible tags',
    title: 'The lineup is already broad and clearly labeled.',
    bullets: [
      'HOT tags currently appear on Ezreal, Jinx, and Samira.',
      'UPD tags appear on Zeri and Senna.',
      'NEW tags appear on entries such as Yunara, Aphelios, Shyvana, Qiyana, Zed, Mel, Zoe, Syndra, and Xayah.',
    ],
  },
  {
    version: 'Menus',
    date: 'player controls',
    type: 'common sections',
    title: 'The suite is built around the controls players actually use.',
    bullets: [
      'Combo, Harass, and Clear appear widely across the champion menus.',
      'Drawings and Killsteal settings are common menu sections.',
      'Selected scripts add reactive options, semi-manual keys, and per-enemy pages.',
    ],
  },
  {
    version: 'Support',
    date: 'Telegram + Discord',
    type: 'quick access',
    title: 'Community and support stay close to the lineup.',
    bullets: [
      'Telegram is linked directly in the suite.',
      'Discord is linked directly in the suite.',
      'English and Chinese text paths are available across the UI.',
    ],
  },
];

export const supportLinks = [
  { text: 'Live catalog', href: 'https://danzaio.github.io/champions/' },
  { text: 'Telegram', href: 'https://t.me/DanzAIO' },
  { text: 'Discord', href: 'https://dsc.gg/danzaio' },
];

