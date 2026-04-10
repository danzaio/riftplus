import { allChampionCards, changelogEntries, featureCards, heroStats, rosterCards, spotlightScripts, supportLinks, suiteSignals } from './danzaio-data.js';

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

const renderCatalogCard = (card, index) => `
  <article class="danzaio-roster-card danzaio-roster-card--catalog" style="--reveal-delay:${index * 40}ms;">
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
      <nav class="riotbar__nav" aria-label="Rift+ navigation">
        <a href="#overview">OVERVIEW</a>
        <a href="#spotlight">SPOTLIGHT</a>
        <a href="#roster">HIGHLIGHTS</a>
        <a href="#all-champions">ALL CHAMPIONS</a>
        <a href="#updates">FACTS</a>
      </nav>
      <div class="riotbar__actions">
        <a class="pill pill--dark" href="https://t.me/DanzAIO" target="_blank" rel="noreferrer">TELEGRAM</a>
        <a class="pill pill--cyan" href="#all-champions">ALL CHAMPIONS</a>
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
          <h1>Rift+ keeps champion control sharp from first queue to last fight.</h1>
          <p class="danzaio-hero__lede">
            30 supported champions, champion-specific menus, prediction controls on supported picks, and direct access to the community when you need it.
          </p>
          <div class="danzaio-hero__actions">
            <a class="pill pill--cyan" href="#all-champions">FULL LINEUP</a>
            <a class="pill pill--dark" href="#updates">DETAILS</a>
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
              <p>Rift+</p>
              <h2>30 champions. Clean menus. Fast setup.</h2>
              <span>Combo, Harass, Clear, Drawings, Killsteal, and champion-specific extras stay close so setup never slows you down.</span>
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
      ${renderMajorHeader('What players get', './assets/icons/content-type-latest.png', 'Champion-specific control, clean menus, and a lineup that stays easy to pick from.')}
      <div class="danzaio-feature-grid">
        ${featureCards.map(renderFeatureCard).join('')}
      </div>
    </section>

    <section class="carousel-section carousel-section--champions danzaio-spotlight-wrap section-animate" id="spotlight">
      <div class="section-bg danzaio-spotlight-bg" aria-hidden="true"></div>
      <div class="carousel-section__inner">
        ${renderMajorHeader('Featured scripts', './assets/icons/content-type-champion.png', 'A few standout picks from the Rift+ lineup.')}
        <div class="champion-spotlight danzaio-spotlight" id="danzaio-spotlight"></div>
      </div>
    </section>

    <section class="danzaio-section danzaio-section--roster section-animate" id="roster">
      ${renderMajorHeader('Current highlights', './assets/icons/content-type-trending.png', 'Popular picks with strong menu depth and quick access to their key tools.')}
      <div class="danzaio-roster-grid">
        ${rosterCards.map(renderRosterCard).join('')}
      </div>
    </section>

    <section class="danzaio-section danzaio-section--catalog section-animate" id="all-champions">
      ${renderMajorHeader('All champions', './assets/icons/content-type-champion.png', 'Every supported champion in the current Rift+ lineup, all in one place.')}
      <div class="danzaio-roster-grid danzaio-roster-grid--catalog">
        ${allChampionCards.map(renderCatalogCard).join('')}
      </div>
    </section>

    <section class="danzaio-section danzaio-section--updates section-animate" id="updates">
      ${renderMajorHeader('Rift+ details', './assets/icons/content-type-faction.png', 'Straight facts about the lineup, the menu structure, and where to find support.')}
      <div class="danzaio-updates-grid">
        ${changelogEntries.map(renderFactCard).join('')}
      </div>
    </section>

    <section class="danzaio-cta section-animate">
      <div class="danzaio-cta__inner">
        <p class="danzaio-kicker">Rift+ // Ready when you are</p>
        <h2>Pick your champion, lock your setup, and queue up.</h2>
        <div class="danzaio-cta__actions">
          <a class="pill pill--cyan" href="#all-champions">FULL LINEUP</a>
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
        <a class="spotlight__cta" href="${card.href}">See champion &rarr;</a>
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
