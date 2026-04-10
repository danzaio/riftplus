export const heroStats = [
  {
    label: 'Supported scripts',
    value: '30',
    note: 'The current launcher catalog in main.lua lists 30 champion entries.',
  },
  {
    label: 'Suite name',
    value: 'League+',
    note: 'League+ is the current public name for the suite shown in these files.',
  },
  {
    label: 'Community',
    value: 'TG + DC',
    note: 'Telegram and Discord links are built into the suite configuration.',
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
    title: 'League+ already has a broad champion catalog.',
    body: 'The current launcher list includes entries such as Ezreal, Jinx, Aphelios, Zed, Pyke, Blitz, Senna, Zoe, Mel, Yunara, and more, with HOT, UPD, TEST, and NEW tags shown in the suite UI.',
  },
  {
    kicker: 'Prediction menus',
    title: 'Players can tune prediction directly from supported menus.',
    body: 'Champion scripts such as Ezreal, Jinx, and Blitzcrank expose prediction settings in their menus, including global hitchance controls on supported scripts.',
  },
  {
    kicker: 'Core modes',
    title: 'Combo, harass, and clear stay front and center.',
    body: 'Across the champion Lua files, the most common player-facing sections are Combo, Harass, and Clear, so the suite matches the way players actually use their scripts in game.',
  },
  {
    kicker: 'Useful extras',
    title: 'Drawings, killsteal, and utility pages are widely present.',
    body: 'Many of the current champion menus include drawings and killsteal sections, while selected scripts also add reactive logic, semi-manual keys, and per-enemy controls.',
  },
  {
    kicker: 'Champion depth',
    title: 'Several scripts go far beyond basic toggles.',
    body: 'Ezreal includes smart targeting and Auto Q controls, Pyke adds E Magnet and E+Flash options, Aphelios exposes weapon-pair logic, and Zed includes Flash Tech and reactive settings.',
  },
  {
    kicker: 'Support access',
    title: 'Community links and bilingual support are already part of the suite.',
    body: 'The current launcher config includes Telegram and Discord links, and the suite UI contains English and Chinese text paths.',
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
      'Ezreal exposes Prediction Settings, smart targeting, Auto Q controls, and dedicated Mystic Shot and Essence Flux pages in the champion menu.',
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
      'Pyke includes Bone Skewer, Phantom Undertow, E Magnet, safety checks, and E+Flash follow tools for players who want more control over engage timing.',
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
      'Aphelios exposes weapon logic, pair controls, killsteal, reactive options, safety rules, flee behavior, and per-enemy controls in one detailed menu.',
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
      'Zed includes prediction, combo, harass, killsteal, Flash Tech, reactive settings, clear, last-hit, and low-HP drawing tools.',
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
    description: 'Jinx includes Prediction Settings, separate spell pages, Automatic options, Killsteal Settings, Draw Settings, and a Permashow section.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    position: 'center top',
  },
  {
    name: 'CAITLYN',
    role: 'Trap Logic',
    label: 'SCRIPT',
    description: 'Caitlyn appears in the current League+ launcher catalog with Trap Logic as her listed focus.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    position: 'center top',
  },
  {
    name: 'SENNA',
    role: 'Soul Farming',
    label: 'UPD',
    description: 'Senna is tagged UPD in the current catalog and stands out as one of the maintained champion entries in the suite.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg',
    position: 'center top',
  },
  {
    name: 'SAMIRA',
    role: 'S-Rank Combo',
    label: 'HOT',
    description: 'Samira is marked HOT in the current catalog and stands out as one of the suite entries aimed at fast combo players.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg',
    position: 'center top',
  },
  {
    name: 'ZOE',
    role: 'Arcane Logic',
    label: 'NEW',
    description: 'Zoe is tagged NEW in the launcher catalog and appears as one of the more recent additions in the current suite list.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
    position: 'center top',
  },
];

export const changelogEntries = [
  {
    version: 'Catalog',
    date: '30 entries',
    type: 'main.lua',
    title: 'The current launcher catalog is already broad and clearly tagged.',
    bullets: [
      'HOT tags currently appear on Ezreal, Jinx, and Samira.',
      'UPD tags appear on Zeri and Senna in the current catalog.',
      'NEW tags appear on entries such as Yunara, Aphelios, Shyvana, Qiyana, Zed, Mel, Zoe, Syndra, and Xayah.',
    ],
  },
  {
    version: 'Menus',
    date: 'player controls',
    type: 'champion luas',
    title: 'The suite menus focus on practical in-game controls.',
    bullets: [
      'Combo, Harass, and Clear appear widely across the champion scripts.',
      'Drawings and Killsteal settings are common player-facing menu sections.',
      'Supported champions add extras like reactive options, semi-manual keys, and per-enemy pages.',
    ],
  },
  {
    version: 'Support',
    date: 'Telegram + Discord',
    type: 'suite links',
    title: 'Players already have direct paths into the League+ community.',
    bullets: [
      'The launcher config includes a Telegram link: t.me/DanzAIO.',
      'The launcher config includes a Discord link: dsc.gg/danzaio.',
      'English and Chinese text paths are present in the suite UI.',
    ],
  },
];

export const supportLinks = [
  { text: 'Live catalog', href: 'https://danzaio.github.io/champions/' },
  { text: 'Telegram', href: 'https://t.me/DanzAIO' },
  { text: 'Discord', href: 'https://dsc.gg/danzaio' },
];
