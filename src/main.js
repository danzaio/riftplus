import { championCards, featuredCards, footerLinks, heroSlides, latestCards, regionCards } from './data.js';

const app = document.querySelector('#app');

const iconArrow = (direction = 'right') => `
  <svg viewBox="0 0 162 70.28" aria-hidden="true" focusable="false">
    ${direction === 'left' ? '<g transform="translate(162 0) scale(-1 1)">' : ''}
    <circle cx="31.57" cy="35.21" r="11.57"></circle>
    <g>
      <polygon points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
      <rect x="84.61" y="29.76" width="65" height="11.06"></rect>
    </g>
    ${direction === 'left' ? '</g>' : ''}
  </svg>
`;

const iconBadge = () => `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3 4.8 8.5l2.8 10.6H16.4L19.2 8.5 12 3Zm0 4.8 3.5 2.7-1.3 5.2H9.8L8.5 10.5 12 7.8Z"></path>
  </svg>
`;

const renderMajorHeader = (title, icon, extraClass = '') => `
  <div class="major-section-header ${extraClass}">
    <img class="major-section-header__icon" src="${icon}" alt="" aria-hidden="true" />
    <h2 class="major-section-header__title">
      <span class="major-section-header__line"></span>
      <span class="major-section-header__diamond" aria-hidden="true"></span>
      <span class="major-section-header__text">${title}</span>
      <span class="major-section-header__diamond" aria-hidden="true"></span>
      <span class="major-section-header__line"></span>
    </h2>
  </div>
`;

const renderContentCard = (card, index, prefix) => {
  const positions = [
    'grid-column:1;grid-row:1;',
    'grid-column:2;grid-row:1;',
    'grid-column:3 / span 2;grid-row:1 / span 2;',
    'grid-column:1;grid-row:2;',
    'grid-column:2;grid-row:2;',
  ];

  return `
    <a class="${prefix}__card${index === 2 ? ` ${prefix}__card--large` : ''}" style="${positions[index] || ''} --reveal-delay:${index * 95}ms;" href="${card.href}">
      <div class="${prefix}__image" style="background-image:url('${card.image}');${card.position ? ` background-position:${card.position};` : ''}"></div>
      <div class="${prefix}__bottom">
        <div class="${prefix}__titles">
          <span class="type"><img src="${card.icon}" alt="champion icon" /></span>
          <h3>${card.title}</h3>
          <h1>${card.name}</h1>
        </div>
        <div class="${prefix}__view">Explore <span aria-hidden="true">→</span></div>
      </div>
    </a>
  `;
};

app.innerHTML = `
  <header class="riotbar">
    <div class="riotbar__inner">
      <a class="riotbar__brand" href="/">
        <span class="riotbar__brand-mark" aria-hidden="true"></span>
        <span>Universe</span>
      </a>
      <nav class="riotbar__nav" aria-label="Primary">
        <a href="#champions">CHAMPIONS</a>
        <a href="#regions">REGIONS</a>
        <a href="#latest">COMICS</a>
        <span class="dim">ALT UNIVERSE</span>
        <a href="https://map.leagueoflegends.com/" target="_blank" rel="noreferrer" class="dim">MAP ↗</a>
        <a href="#featured">EXPLORE</a>
        <span class="dim">SEARCH</span>
      </nav>
      <div class="riotbar__actions">
        <button class="pill pill--dark" type="button">SIGN IN</button>
        <button class="pill pill--cyan" type="button">PLAY NOW</button>
      </div>
    </div>
  </header>

  <main class="page">
    <section class="hero" aria-label="Universe hero carousel">
      <div class="hero__track">
        <div class="hero__carousel">
          <div class="hero__controls">
            <button class="hero__button hero__button--prev" type="button" aria-label="Previous slide">${iconArrow('left')}</button>
            <button class="hero__button hero__button--next" type="button" aria-label="Next slide">${iconArrow('right')}</button>
          </div>
          <div class="hero__slides" id="hero-slides"></div>
        </div>
        <div class="hero__descriptions" id="hero-descriptions"></div>
      </div>
    </section>

    <section class="latest section section-animate" id="latest">
      <div class="section-background section-background--latest" aria-hidden="true">
        <div class="section-background__gradient"></div>
      </div>
      ${renderMajorHeader('Latest', '/assets/icons/content-type-latest.png', 'major-section-header--latest')}
      <div class="latest__grid" id="latest-grid"></div>
    </section>

    <section class="featured section section-animate" id="featured">
      <div class="section-background section-background--featured" aria-hidden="true">
        <div class="section-background__gradient"></div>
      </div>
      ${renderMajorHeader('Featured', '/assets/icons/content-type-trending.png', 'major-section-header--featured')}
      <div class="featured__grid" id="featured-grid"></div>
    </section>

    <section class="carousel-section carousel-section--champions section-animate" id="champions">
      <div class="section-bg section-bg--champions" aria-hidden="true"></div>
      <div class="carousel-section__inner">
        <div class="carousel-header major-section-header major-section-header--compact is-visible">
          <img class="icon" src="/assets/icons/content-type-champion.png" alt="champion icon" />
          <div class="title">Featured Champions</div>
          <div class="subtitle"></div>
        </div>
        <div class="champion-spotlight" id="champion-spotlight"></div>
        <div class="spotlight__view-all"><a href="/en_US/champions/">View All Champions →</a></div>
      </div>
    </section>

    <section class="carousel-section carousel-section--regions section-animate" id="regions">
      <div class="section-bg section-bg--regions" aria-hidden="true"></div>
      <div class="carousel-section__inner">
        <div class="carousel-header major-section-header major-section-header--compact is-visible">
          <img class="icon" src="/assets/icons/content-type-faction.png" alt="faction icon" />
          <div class="title">Featured Regions</div>
          <div class="subtitle"></div>
        </div>
        <div class="region-spotlight" id="region-spotlight"></div>
        <div class="spotlight__view-all"><a href="/en_US/regions/">View All Regions →</a></div>
      </div>
    </section>
  </main>

  <footer class="footer section-animate">
    <div class="footer__inner">
      <ul class="footer__links">
        ${footerLinks.map((link) => `<li><a href="${link.href}" target="_blank" rel="noreferrer">${link.text}</a></li>`).join('')}
      </ul>
      <div class="footer__brand">
        <span class="footer__brand-mark" aria-hidden="true"></span>
        <span>Riot Games</span>
      </div>
      <div class="footer__legal">
        ™ &amp; © 2026 Riot Games, Inc. League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
      </div>
      <div class="footer__sub-links">
        <a href="https://www.riotgames.com/en/privacy-notice" target="_blank" rel="noreferrer">Privacy Notice</a>
        <a href="https://www.riotgames.com/en/terms-of-service" target="_blank" rel="noreferrer">Terms of Service</a>
        <a href="javascript:void(0)">Cookie Preferences</a>
      </div>
      <div class="footer__rating">
        <img src="/assets/meta/esrb.png" alt="ESRB" />
        <p>
          Blood<br />
          Fantasy Violence<br />
          Mild Suggestive Themes<br />
          Use of Alcohol and Tobacco<br />
          Online Interactions Not Rated by the ESRB
        </p>
      </div>
    </div>
  </footer>
`;

const heroSlidesEl = document.querySelector('#hero-slides');
const heroDescriptionsEl = document.querySelector('#hero-descriptions');
const latestGridEl = document.querySelector('#latest-grid');
const featuredGridEl = document.querySelector('#featured-grid');
const championSpotlightEl = document.querySelector('#champion-spotlight');
const regionSpotlightEl = document.querySelector('#region-spotlight');
const championSectionBgEl = document.querySelector('.section-bg--champions');
const regionSectionBgEl = document.querySelector('.section-bg--regions');

const clampIndex = (index, list) => (index + list.length) % list.length;

let heroIndex = 0;
let championIndex = 2;
let regionIndex = 0;

function renderHero() {
  const prev = clampIndex(heroIndex - 1, heroSlides);
  const next = clampIndex(heroIndex + 1, heroSlides);
  const prev2 = clampIndex(heroIndex - 2, heroSlides);
  const next2 = clampIndex(heroIndex + 2, heroSlides);

  const heroPositions = new Map([
    [prev2, { offset: -72, scale: 0.86, opacity: 0.2, z: 1 }],
    [prev, { offset: -36, scale: 0.94, opacity: 0.55, z: 2 }],
    [heroIndex, { offset: 0, scale: 1.08, opacity: 1, z: 4 }],
    [next, { offset: 36, scale: 0.94, opacity: 0.55, z: 2 }],
    [next2, { offset: 72, scale: 0.86, opacity: 0.2, z: 1 }],
  ]);

  heroSlidesEl.innerHTML = heroSlides
    .map((slide, index) => {
      const classes = ['hero__slide'];
      const pos = heroPositions.get(index) || { offset: 0, scale: 0.82, opacity: 0, z: 0 };
      if (index === heroIndex) classes.push('is-active');
      else if (index === prev) classes.push('is-prev');
      else if (index === next) classes.push('is-next');

      return `
        <article class="${classes.join(' ')}" aria-label="${slide.name}" style="transform: translateX(-50%) translateX(${pos.offset}%) scale(${pos.scale}); opacity:${pos.opacity}; z-index:${pos.z};">
          <div class="hero__image" style="background-image:url('${slide.image}'); background-position:${slide.position};"></div>
        </article>
      `;
    })
    .join('');

  heroDescriptionsEl.innerHTML = `
    <div class="hero__descriptions-inner">
      ${[prev, heroIndex, next]
        .map((index) => heroSlides[index])
        .map((slide, slot) => {
          const index = [prev, heroIndex, next][slot];
          return `
            <button class="hero__description${index === heroIndex ? ' is-active' : ''}" type="button" data-index="${index}">
              <span class="badge">${iconBadge()}</span>
              <h2>${slide.title}</h2>
              <h1>${slide.name}</h1>
              <p>&nbsp;</p>
            </button>
          `;
        })
        .join('')}
    </div>
  `;

  heroDescriptionsEl.querySelectorAll('[data-index]').forEach((button) => {
    button.addEventListener('click', () => {
      heroIndex = Number(button.dataset.index);
      renderHero();
    });
  });
}

function renderLatest() {
  latestGridEl.innerHTML = latestCards.map((card, index) => renderContentCard(card, index, 'latest')).join('');
}

function renderFeatured() {
  featuredGridEl.innerHTML = featuredCards.map((card, index) => renderContentCard(card, index, 'featured')).join('');
}

const spotlightArrow = (direction = 'right') => `
  <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2"></circle>
    <path d="${direction === 'right' ? 'M40 31 61 50 40 69' : 'M60 31 39 50 60 69'}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`;

function renderChampionSpotlight() {
  const card = championCards[championIndex];
  if (championSectionBgEl) {
    championSectionBgEl.style.backgroundImage = `url('${card.image}')`;
  }

  championSpotlightEl.innerHTML = `
    <button class="spotlight__arrow spotlight__arrow--prev" type="button" aria-label="Previous champion">
      ${spotlightArrow('left')}
    </button>
    <button class="spotlight__arrow spotlight__arrow--next" type="button" aria-label="Next champion">
      ${spotlightArrow('right')}
    </button>
    <div class="spotlight__image" style="background-image:url('${card.image}');"></div>
    <div class="spotlight__panel">
      <div class="spotlight__panel-inner">
        <div class="spotlight__crest"><img src="${card.crest}" alt="${card.crestAlt}" /></div>
        <div class="spotlight__name">${card.name}</div>
        <div class="spotlight__details">
          <div>${card.title}: ${card.role}</div>
          <div>${card.regionLabel}: ${card.region}</div>
        </div>
        <a class="spotlight__cta" href="${card.href}">Explore →</a>
      </div>
    </div>
  `;

  championSpotlightEl.querySelector('.spotlight__arrow--prev').addEventListener('click', () => {
    championIndex = clampIndex(championIndex - 1, championCards);
    renderChampionSpotlight();
  });
  championSpotlightEl.querySelector('.spotlight__arrow--next').addEventListener('click', () => {
    championIndex = clampIndex(championIndex + 1, championCards);
    renderChampionSpotlight();
  });
}

function renderRegionSpotlight() {
  const card = regionCards[regionIndex];
  if (regionSectionBgEl) {
    regionSectionBgEl.style.backgroundImage = `url('${card.image}')`;
  }

  regionSpotlightEl.innerHTML = `
    <button class="spotlight__arrow spotlight__arrow--prev" type="button" aria-label="Previous region">
      ${spotlightArrow('left')}
    </button>
    <button class="spotlight__arrow spotlight__arrow--next" type="button" aria-label="Next region">
      ${spotlightArrow('right')}
    </button>
    <div class="spotlight__image" style="background-image:url('${card.image}');"></div>
    <div class="spotlight__panel spotlight__panel--region">
      <div class="spotlight__panel-inner spotlight__panel-inner--region">
        <div class="spotlight__crest"><img src="${card.crest}" alt="${card.name.toLowerCase()}" /></div>
        <div class="spotlight__name">${card.name}</div>
        <a class="spotlight__cta" href="${card.href}">Explore →</a>
      </div>
    </div>
  `;

  regionSpotlightEl.querySelector('.spotlight__arrow--prev').addEventListener('click', () => {
    regionIndex = clampIndex(regionIndex - 1, regionCards);
    renderRegionSpotlight();
  });
  regionSpotlightEl.querySelector('.spotlight__arrow--next').addEventListener('click', () => {
    regionIndex = clampIndex(regionIndex + 1, regionCards);
    renderRegionSpotlight();
  });
}

renderHero();
renderLatest();
renderFeatured();
renderChampionSpotlight();
renderRegionSpotlight();

function setupRevealObservers() {
  const targets = document.querySelectorAll('.section-animate, .major-section-header:not(.major-section-header--compact)');
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

document.querySelector('.hero__button--prev').addEventListener('click', () => {
  heroIndex = clampIndex(heroIndex - 1, heroSlides);
  renderHero();
});

document.querySelector('.hero__button--next').addEventListener('click', () => {
  heroIndex = clampIndex(heroIndex + 1, heroSlides);
  renderHero();
});
