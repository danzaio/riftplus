import { changelogEntries, featureCards, heroStats, rosterCards, spotlightScripts, supportLinks, suiteSignals } from './danzaio-data.js';

const app = document.querySelector('#app');

const iconArrow = (direction = 'right') => `
  <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2"></circle>
    <path d="${direction === 'right' ? 'M40 31 61 50 40 69' : 'M60 31 39 50 60 69'}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`;

const iconBadge = () => `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3 4.8 8.5l2.8 10.6H16.4L19.2 8.5 12 3Zm0 4.8 3.5 2.7-1.3 5.2H9.8L8.5 10.5 12 7.8Z"></path>
  </svg>
`;

const renderMajorHeader = (title, icon, body) => `
  <div class="major-section-header danzaio-section-header">
    <img class="major-section-header__icon" src="${icon}" alt="" aria-hidden="true" />
    <h2 class="major-section-header__title">
      <span class="major-section-header__line"></span>
      <span class="major-section-header__diamond" aria-hidden="true"></span>
      <span class="major-section-header__text">${title}</span>
      <span class="major-section-header__diamond" aria-hidden="true"></span>
      <span class="major-section-header__line"></span>
    </h2>
    <p class="danzaio-section-header__body">${body}</p>
  </div>
`;

const renderFeatureCard = (card, index) => `
  <article class="danzaio-feature-card" style="--reveal-delay:${index * 80}ms;">
    <p class="danzaio-feature-card__kicker">${card.kicker}</p>
    <h3>${card.title}</h3>
    <p>${card.body}</p>
  </article>
`;

const renderRosterCard = (card, index) => `
  <article class="danzaio-roster-card" style="--reveal-delay:${index * 85}ms;">
    <div class="danzaio-roster-card__image" style="background-image:url('${card.image}'); background-position:${card.position};"></div>
    <div class="danzaio-roster-card__body">
      <div class="danzaio-roster-card__topline">
        <span class="danzaio-roster-card__label">${card.label}</span>
        <span class="danzaio-roster-card__badge">${iconBadge()}</span>
      </div>
      <h3>${card.name}</h3>
      <h4>${card.role}</h4>
      <p>${card.description}</p>
    </div>
  </article>
`;

const renderFactCard = (entry, index) => `
  <article class="danzaio-update-card" style="--reveal-delay:${index * 100}ms;">
    <div class="danzaio-update-card__meta">
      <span>${entry.version}</span>
      <span>${entry.date}</span>
      <span>${entry.type}</span>
    </div>
    <h3>${entry.title}</h3>
    <ul>
      ${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
    </ul>
  </article>
`;

app.innerHTML = `
  <header class="riotbar riotbar--danzaio">
    <div class="riotbar__inner">
      <a class="riotbar__brand riotbar__brand--danzaio" href="./">
        <span class="riotbar__brand-mark" aria-hidden="true"></span>
        <span>Rift+</span>
      </a>
      <nav class="riotbar__nav" aria-label="Rift+ showcase">
        <a href="#overview">OVERVIEW</a>
        <a href="#systems">FEATURES</a>
        <a href="#spotlight">SPOTLIGHT</a>
        <a href="#roster">ROSTER</a>
        <a href="#updates">FACTS</a>
      </nav>
      <div class="riotbar__actions">
        <a class="pill pill--dark" href="https://t.me/DanzAIO" target="_blank" rel="noreferrer">TELEGRAM</a>
        <a class="pill pill--cyan" href="https://danzaio.github.io/champions/" target="_blank" rel="noreferrer">LIVE CATALOG</a>
      </div>
    </div>
  </header>

  <main class="page danzaio-shell">
    <section class="danzaio-hero" id="overview">
      <div class="danzaio-hero__backdrop" aria-hidden="true"></div>
      <div class="danzaio-hero__texture" aria-hidden="true"></div>
      <div class="danzaio-hero__inner">
        <div class="danzaio-hero__copy section-animate is-visible">
          <p class="danzaio-kicker">Rift+ // Hanbot script suite</p>
          <h1>Rift+ puts its lineup, controls, and community in one place.</h1>
          <p class="danzaio-hero__lede">
            Browse featured scripts, scan the lineup, see the kind of menu depth each champion offers, and jump straight into the live catalog or community.
          </p>
          <div class="danzaio-hero__actions">
            <a class="pill pill--cyan" href="#roster">BROWSE ROSTER</a>
            <a class="pill pill--dark" href="#updates">SEE FACTS</a>
          </div>
          <div class="danzaio-hero__stats">
            ${heroStats.map((stat) => `
              <article class="danzaio-stat">
                <p>${stat.label}</p>
                <h2>${stat.value}</h2>
                <span>${stat.note}</span>
              </article>
            `).join('')}
          </div>
        </div>
        <div class="danzaio-hero__panel section-animate is-visible">
          <div class="danzaio-hero__panel-image"></div>
          <div class="danzaio-hero__panel-overlay"></div>
          <div class="danzaio-hero__panel-content">
            <div class="danzaio-terminal">
              ${suiteSignals.map((signal) => `<span>${signal}</span>`).join('')}
            </div>
            <div class="danzaio-hero__panel-copy">
              <p>Quick snapshot</p>
              <h2>30 supported entries, champion-specific menus, and direct support links.</h2>
              <span>From prediction pages to combo, harass, clear, drawings, and killsteal tools, Rift+ is built to be tuned fast.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="danzaio-signal-strip section-animate is-visible">
      <div class="danzaio-signal-strip__inner">
        ${supportLinks.map((link) => `<a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${link.text}</a>`).join('')}
      </div>
    </section>

    <section class="danzaio-section section-animate" id="systems">
      ${renderMajorHeader('What players get', './assets/icons/content-type-latest.png', 'Everything below stays focused on the actual experience: supported champions, adjustable menu sections, and fast access to the live catalog.')}
      <div class="danzaio-feature-grid">
        ${featureCards.map(renderFeatureCard).join('')}
      </div>
    </section>

    <section class="carousel-section carousel-section--champions danzaio-spotlight-wrap section-animate" id="spotlight">
      <div class="section-bg danzaio-spotlight-bg" aria-hidden="true"></div>
      <div class="carousel-section__inner">
        ${renderMajorHeader('Featured scripts', './assets/icons/content-type-champion.png', 'A closer look at standout scripts and the menu depth players can expect.')}
        <div class="champion-spotlight danzaio-spotlight" id="danzaio-spotlight"></div>
      </div>
    </section>

    <section class="danzaio-section danzaio-section--roster section-animate" id="roster">
      ${renderMajorHeader('Current lineup', './assets/icons/content-type-trending.png', 'A fast scan of the current roster, using the same names and tags players already see in the suite.')}
      <div class="danzaio-roster-grid">
        ${rosterCards.map(renderRosterCard).join('')}
      </div>
    </section>

    <section class="danzaio-section danzaio-section--updates section-animate" id="updates">
      ${renderMajorHeader('Rift+ facts', './assets/icons/content-type-faction.png', 'Straight facts about the lineup, menu structure, and support links.')}
      <div class="danzaio-updates-grid">
        ${changelogEntries.map(renderFactCard).join('')}
      </div>
    </section>

    <section class="danzaio-cta section-animate">
      <div class="danzaio-cta__inner">
        <p class="danzaio-kicker">Rift+ // Ready to queue</p>
        <h2>Open the catalog, join the community, and pick the champion you want to play next.</h2>
        <div class="danzaio-cta__actions">
          <a class="pill pill--cyan" href="https://danzaio.github.io/champions/" target="_blank" rel="noreferrer">OPEN LIVE CATALOG</a>
          <a class="pill pill--dark" href="https://dsc.gg/danzaio" target="_blank" rel="noreferrer">JOIN DISCORD</a>
        </div>
      </div>
    </section>
  </main>
`;

const spotlightEl = document.querySelector('#danzaio-spotlight');
const spotlightBgEl = document.querySelector('.danzaio-spotlight-bg');
let spotlightIndex = 0;

const clampIndex = (index, list) => (index + list.length) % list.length;

function renderSpotlight() {
  const card = spotlightScripts[spotlightIndex];

  if (spotlightBgEl) {
    spotlightBgEl.style.backgroundImage = `url('${card.image}')`;
  }

  spotlightEl.innerHTML = `
    <button class="spotlight__arrow spotlight__arrow--prev" type="button" aria-label="Previous featured script">
      ${iconArrow('left')}
    </button>
    <button class="spotlight__arrow spotlight__arrow--next" type="button" aria-label="Next featured script">
      ${iconArrow('right')}
    </button>
    <div class="spotlight__image danzaio-spotlight__image" style="background-image:url('${card.image}');"></div>
    <div class="spotlight__panel danzaio-spotlight__panel">
      <div class="spotlight__panel-inner danzaio-spotlight__panel-inner">
        <div class="spotlight__crest"><img src="${card.crest}" alt="${card.crestAlt}" /></div>
        <div class="spotlight__name">${card.name}</div>
        <div class="spotlight__details">
          <div>${card.laneLabel}: ${card.lane}</div>
          <div>${card.systemLabel}: ${card.system}</div>
        </div>
        <a class="spotlight__cta" href="${card.href}">View lineup &rarr;</a>
      </div>
      <p class="danzaio-spotlight__blurb">${card.title} - ${card.blurb}</p>
    </div>
  `;

  spotlightEl.querySelector('.spotlight__arrow--prev').addEventListener('click', () => {
    spotlightIndex = clampIndex(spotlightIndex - 1, spotlightScripts);
    renderSpotlight();
  });

  spotlightEl.querySelector('.spotlight__arrow--next').addEventListener('click', () => {
    spotlightIndex = clampIndex(spotlightIndex + 1, spotlightScripts);
    renderSpotlight();
  });
}

renderSpotlight();

function setupRevealObservers() {
  const targets = document.querySelectorAll('.section-animate, .major-section-header');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((el) => observer.observe(el));
}

setupRevealObservers();

