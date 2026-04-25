import { hanbotSuite, platformCards, venSuite } from './danzaio-data.js';

const app = document.querySelector('#app');
const pageKind = location.pathname.includes('/ven/') ? 'ven' : location.pathname.includes('/hanbot/') ? 'hanbot' : 'home';
const assetPrefix = pageKind === 'home' ? './' : '../';
const rootPrefix = pageKind === 'home' ? './' : '../';
const requestEndpoint = window.RIFTPLUS_REQUEST_ENDPOINT || '';

const assetUrl = (path) => (path.startsWith('http') ? path : `${assetPrefix}${path.replace(/^\.\//, '')}`);

const iconBadge = () => `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3 4.8 8.5l2.8 10.6H16.4L19.2 8.5 12 3Zm0 4.8 3.5 2.7-1.3 5.2H9.8L8.5 10.5 12 7.8Z"></path>
  </svg>
`;

const renderMajorHeader = (title, icon, body) => `
  <div class="major-section-header danzaio-section-header">
    <img class="major-section-header__icon" src="${assetUrl(icon)}" alt="" aria-hidden="true" />
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

const renderFactCard = (entry, index) => `
  <article class="danzaio-update-card" style="--reveal-delay:${index * 100}ms;">
    <div class="danzaio-update-card__meta">
      <span>${entry.version}</span>
      <span>${entry.date}</span>
      <span>${entry.type}</span>
    </div>
    <h3>${entry.title}</h3>
    <ul>${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
  </article>
`;

const renderChampionActions = (card, platform) => `
  <div class="champion-actions">
    <button class="pill pill--dark" type="button" data-request="bug" data-platform="${platform}" data-champion="${card.name}">Report bug</button>
    <button class="pill pill--cyan" type="button" data-request="feature" data-platform="${platform}" data-champion="${card.name}">Request feature</button>
  </div>
`;

const renderRosterCard = (card, index, platform, compact = false) => `
  <article class="danzaio-roster-card${compact ? ' danzaio-roster-card--catalog' : ''}" style="--reveal-delay:${index * (compact ? 40 : 85)}ms;">
    <div class="danzaio-roster-card__image" style="background-image:url('${assetUrl(card.image)}'); background-position:${card.position};"></div>
    <div class="danzaio-roster-card__body">
      <div class="danzaio-roster-card__topline">
        <span class="danzaio-roster-card__label">${card.label}</span>
        <span class="danzaio-roster-card__badge">${iconBadge()}</span>
      </div>
      <h3>${card.name}</h3>
      <h4>${card.role}</h4>
      <p>${card.description}</p>
      ${card.features ? `<ul class="champion-feature-list">${card.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>` : ''}
      ${renderChampionActions(card, platform)}
    </div>
  </article>
`;

function renderShellHeader(active) {
  return `
    <header class="riotbar riotbar--danzaio">
      <div class="riotbar__inner">
        <a class="riotbar__brand riotbar__brand--danzaio" href="${rootPrefix}">
          <span class="riotbar__brand-mark" aria-hidden="true"></span>
          <span>Rift+</span>
        </a>
        <nav class="riotbar__nav" aria-label="Rift+ navigation">
          <a href="${rootPrefix}">PLATFORMS</a>
          <a href="${rootPrefix}ven/" class="${active === 'ven' ? '' : 'dim'}">VEN</a>
          <a href="${rootPrefix}hanbot/" class="${active === 'hanbot' ? '' : 'dim'}">HANBOT</a>
          ${active !== 'home' ? '<a href="#all-champions">CHAMPIONS</a><a href="#requests">REQUESTS</a>' : ''}
        </nav>
        <div class="riotbar__actions">
          <a class="pill pill--dark" href="https://t.me/DanzAIO" target="_blank" rel="noreferrer">TELEGRAM</a>
          <a class="pill pill--cyan" href="https://dsc.gg/danzaio" target="_blank" rel="noreferrer">DISCORD</a>
        </div>
      </div>
    </header>
  `;
}

function renderHome() {
  app.innerHTML = `
    ${renderShellHeader('home')}
    <main class="page danzaio-shell">
      <section class="platform-landing">
        <div class="platform-landing__backdrop" aria-hidden="true"></div>
        <div class="platform-landing__inner section-animate is-visible">
          <p class="danzaio-kicker">DanZAIO suite</p>
          <h1>Choose your platform.</h1>
          <div class="platform-grid">
            ${platformCards.map((platform) => `
              <a class="platform-card platform-card--${platform.key}" href="${platform.href}">
                <div class="platform-card__image" style="background-image:url('${assetUrl(platform.image)}');"></div>
                <div class="platform-card__shade"></div>
                <div class="platform-card__body">
                  ${platform.kicker ? `<p>${platform.kicker}</p>` : ''}
                  <h2>${platform.title}</h2>
                  ${platform.body ? `<span>${platform.body}</span>` : ''}
                  ${platform.stats?.length ? `<div class="platform-card__stats">${platform.stats.map((stat) => `<b>${stat}</b>`).join('')}</div>` : ''}
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderSuite(suite) {
  if (suite.locked) {
    return renderLockedSuite(suite);
  }

  app.innerHTML = `
    ${renderShellHeader(suite.key)}
    <main class="page danzaio-shell suite-page suite-page--${suite.key}">
      <section class="danzaio-hero danzaio-hero--${suite.key}" id="overview">
        <div class="danzaio-hero__backdrop" style="background-image:linear-gradient(90deg, rgba(8, 10, 13, 0.92) 0%, rgba(8, 10, 13, 0.72) 42%, rgba(8, 10, 13, 0.22) 64%, rgba(8, 10, 13, 0.76) 100%), url('${assetUrl(suite.heroImage)}');" aria-hidden="true"></div>
        <div class="danzaio-hero__texture" aria-hidden="true"></div>
        <div class="danzaio-hero__inner">
          <div class="danzaio-hero__copy section-animate is-visible">
            <p class="danzaio-kicker">${suite.platformLabel}</p>
            <h1>${suite.headline}</h1>
            <p class="danzaio-hero__lede">${suite.lede}</p>
            <div class="danzaio-hero__actions">
              <a class="pill pill--cyan" href="#all-champions">FULL LINEUP</a>
              <button class="pill pill--dark" type="button" data-request="new-champion" data-platform="${suite.name}">REQUEST NEW CHAMPION</button>
            </div>
            <div class="danzaio-hero__stats">
              ${suite.stats.map((stat) => `<article class="danzaio-stat"><p>${stat.label}</p><h2>${stat.value}</h2><span>${stat.note}</span></article>`).join('')}
            </div>
          </div>
          <div class="danzaio-hero__panel section-animate is-visible">
            <div class="danzaio-hero__panel-image" style="background-image:linear-gradient(180deg, rgba(10, 10, 12, 0.08), rgba(10, 10, 12, 0.76)), url('${assetUrl(suite.panelImage)}');"></div>
            <div class="danzaio-hero__panel-overlay"></div>
            <div class="danzaio-hero__panel-content">
              <div class="danzaio-terminal">${suite.signals.map((signal) => `<span>${signal}</span>`).join('')}</div>
              <div class="danzaio-hero__panel-copy"><p>${suite.name}</p><h2>${suite.panelTitle || `${suite.stats[0].value} champions. Clean menus. Fast setup.`}</h2><span>${suite.lede}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="danzaio-signal-strip section-animate is-visible">
        <div class="danzaio-signal-strip__inner">
          ${suite.supportLinks.map((link) => link.action ? `<button type="button" data-request="${link.action}" data-platform="${suite.name}">${link.text}</button>` : `<a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${link.text}</a>`).join('')}
        </div>
      </section>

      <section class="danzaio-section section-animate" id="systems">
        ${renderMajorHeader('What players get', 'assets/icons/content-type-latest.png', 'Champion-specific control, clean menus, and a lineup that stays easy to pick from.')}
        <div class="danzaio-feature-grid">${suite.features.map(renderFeatureCard).join('')}</div>
      </section>

      <section class="danzaio-section danzaio-section--catalog section-animate" id="all-champions">
        ${renderMajorHeader('Choose your champion', 'assets/icons/content-type-champion.png', `Every supported ${suite.name} champion in one clean lineup.`)}
        <div class="danzaio-roster-grid danzaio-roster-grid--catalog">${suite.champions.map((card, index) => renderRosterCard(card, index, suite.name, true)).join('')}</div>
      </section>

      <section class="danzaio-section danzaio-section--updates section-animate" id="updates">
        ${renderMajorHeader('Built around the way you play', 'assets/icons/content-type-faction.png', 'Pick your champion, tune the essentials, and tell us what should feel better next.')}
        <div class="danzaio-updates-grid">${suite.facts.map(renderFactCard).join('')}</div>
      </section>

      <section class="danzaio-cta section-animate" id="requests">
        <div class="danzaio-cta__inner">
          <p class="danzaio-kicker">${suite.name} // requests</p>
          <h2>Missing a champion or feature? Tell us what you want improved.</h2>
          <div class="danzaio-cta__actions">
            <button class="pill pill--cyan" type="button" data-request="new-champion" data-platform="${suite.name}">REQUEST NEW CHAMPION</button>
            <a class="pill pill--dark" href="https://dsc.gg/danzaio" target="_blank" rel="noreferrer">JOIN DISCORD</a>
          </div>
        </div>
      </section>
    </main>
    ${renderRequestModal()}
  `;

  setupRequestForms();
}

function renderLockedSuite(suite) {
  app.innerHTML = `
    ${renderShellHeader(suite.key)}
    <main class="page danzaio-shell suite-page suite-page--${suite.key}">
      <section class="danzaio-hero danzaio-hero--${suite.key} locked-suite" id="overview">
        <div class="danzaio-hero__backdrop" style="background-image:linear-gradient(90deg, rgba(8, 10, 13, 0.92) 0%, rgba(8, 10, 13, 0.72) 42%, rgba(8, 10, 13, 0.22) 64%, rgba(8, 10, 13, 0.76) 100%), url('${assetUrl(suite.heroImage)}');" aria-hidden="true"></div>
        <div class="danzaio-hero__texture" aria-hidden="true"></div>
        <div class="danzaio-hero__inner">
          <div class="danzaio-hero__copy section-animate is-visible">
            <p class="danzaio-kicker">${suite.platformLabel}</p>
            <h1>${suite.headline}</h1>
            <p class="danzaio-hero__lede">${suite.lede}</p>
            <div class="danzaio-hero__actions">
              <a class="pill pill--cyan" href="${rootPrefix}ven/">VIEW VEN</a>
              <a class="pill pill--dark" href="https://dsc.gg/danzaio" target="_blank" rel="noreferrer">JOIN DISCORD</a>
            </div>
          </div>
          <div class="danzaio-hero__panel section-animate is-visible locked-suite__panel">
            <div class="danzaio-hero__panel-image" style="background-image:linear-gradient(180deg, rgba(10, 10, 12, 0.08), rgba(10, 10, 12, 0.84)), url('${assetUrl(suite.panelImage)}');"></div>
            <div class="danzaio-hero__panel-overlay"></div>
            <div class="danzaio-hero__panel-content">
              <div class="danzaio-terminal">${suite.signals.map((signal) => `<span>${signal}</span>`).join('')}</div>
              <div class="danzaio-hero__panel-copy"><p>To be announced</p><h2>Hanbot lineup is locked for now.</h2><span>Details will be revealed when the page is ready for players.</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderRequestModal() {
  return `
    <div class="request-modal" id="request-modal" aria-hidden="true">
      <div class="request-modal__overlay" data-close-modal></div>
      <div class="request-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="request-modal-title">
        <button class="request-modal__close" type="button" data-close-modal aria-label="Close request form">x</button>
        <p class="danzaio-kicker" id="request-modal-kicker">Player request</p>
        <h2 id="request-modal-title">Send request</h2>
        <form class="request-form" id="request-form">
          <input type="hidden" name="requestType" id="request-type" />
          <div class="request-form__grid" id="request-fields"></div>
          <label class="request-form__field request-form__field--full request-form__bot" aria-hidden="true"><span>Leave this empty</span><input name="website" autocomplete="off" tabindex="-1" /></label>
          <div class="request-form__actions"><button class="pill pill--cyan" type="submit">Submit request</button><button class="pill pill--dark" type="button" data-close-modal>Cancel</button></div>
          <p class="request-form__status" id="request-status" role="status"></p>
        </form>
      </div>
    </div>
  `;
}

const field = ({ name, label, type = 'text', value = '', placeholder = '', full = false, options = null, rows = 4 }) => {
  if (options) {
    return `<label class="request-form__field${full ? ' request-form__field--full' : ''}"><span>${label}</span><select name="${name}">${options.map((option) => `<option value="${option}" ${option === value ? 'selected' : ''}>${option}</option>`).join('')}</select></label>`;
  }
  if (type === 'textarea') {
    return `<label class="request-form__field${full ? ' request-form__field--full' : ''}"><span>${label}</span><textarea name="${name}" rows="${rows}" placeholder="${placeholder}">${value}</textarea></label>`;
  }
  return `<label class="request-form__field${full ? ' request-form__field--full' : ''}"><span>${label}</span><input name="${name}" type="${type}" value="${value}" placeholder="${placeholder}" /></label>`;
};

function fieldsFor(type, platform, champion) {
  if (type === 'bug') {
    return [
      field({ name: 'platform', label: 'Platform', value: platform }),
      field({ name: 'champion', label: 'Champion', value: champion }),
      field({ name: 'contact', label: 'Discord or Telegram', placeholder: '@name' }),
      field({ name: 'mode', label: 'What were you using?', options: ['Combo', 'Harass', 'Clear', 'Jungle', 'Kill pressure', 'Visuals', 'Menu', 'Other'] }),
      field({ name: 'summary', label: 'What went wrong?', full: true, placeholder: 'Example: E dashed under turret during combo' }),
      field({ name: 'expected', label: 'What did you expect?', type: 'textarea', full: true, rows: 3 }),
      field({ name: 'actual', label: 'What happened instead?', type: 'textarea', full: true, rows: 4 }),
      field({ name: 'steps', label: 'What were you doing when it happened?', type: 'textarea', full: true, rows: 4, placeholder: 'Game mode, enemy champion, your combo, and anything that helps explain the moment.' }),
      field({ name: 'mediaUrl', label: 'Video or screenshot URL', type: 'url', full: true, placeholder: 'YouTube, Streamable, Imgur, Discord CDN, etc.' }),
    ].join('');
  }

  if (type === 'feature') {
    return [
      field({ name: 'platform', label: 'Platform', value: platform }),
      field({ name: 'champion', label: 'Champion', value: champion }),
      field({ name: 'contact', label: 'Discord or Telegram', placeholder: '@name' }),
      field({ name: 'priority', label: 'How important is it?', options: ['Nice to have', 'Important', 'High impact'] }),
      field({ name: 'menuSection', label: 'Where should it fit?', options: ['Combo', 'Harass', 'Clear', 'Jungle', 'Kill pressure', 'Defensive', 'Visuals', 'Prediction', 'Other'] }),
      field({ name: 'settingName', label: 'Feature idea', placeholder: 'Example: Safer E all-in toggle' }),
      field({ name: 'behavior', label: 'What should it do in game?', type: 'textarea', full: true, rows: 5, placeholder: 'Describe the moment, what you want the feature to help with, and what it should avoid.' }),
      field({ name: 'hotkey', label: 'Key, toggle, or automatic?', placeholder: 'Optional' }),
      field({ name: 'notes', label: 'Clip, example, or extra notes', type: 'textarea', full: true, rows: 3 }),
    ].join('');
  }

  return [
    field({ name: 'platform', label: 'Platform', value: platform }),
    field({ name: 'champion', label: 'Champion wanted', placeholder: 'Champion name' }),
    field({ name: 'contact', label: 'Discord or Telegram', placeholder: '@name' }),
    field({ name: 'role', label: 'Main role or playstyle', options: ['ADC', 'Support', 'Mid', 'Jungle', 'Top', 'Flex'] }),
    field({ name: 'combo', label: 'What should the combo feel like?', type: 'textarea', full: true, rows: 4, placeholder: 'Burst, poke, all-in, safe trading, reset play, engage, peel, or anything specific.' }),
    field({ name: 'harass', label: 'How should poke or trading work?', type: 'textarea', full: true, rows: 3, placeholder: 'When you want it to trade, what it should avoid, and any mana or safety preferences.' }),
    field({ name: 'clear', label: 'What should farming or jungle clear do?', type: 'textarea', full: true, rows: 3, placeholder: 'Lane clear, jungle clear, objective help, or last-hit preferences.' }),
    field({ name: 'killsteal', label: 'How should it finish kills?', type: 'textarea', full: true, rows: 3, placeholder: 'Important spells, long-range finishers, execute moments, or safety limits.' }),
    field({ name: 'defensive', label: 'What danger should it react to?', type: 'textarea', full: true, rows: 3, placeholder: 'Gapclosers, interrupts, shields, dodges, panic buttons, or ally saves.' }),
    field({ name: 'drawings', label: 'What should it show on screen?', type: 'textarea', full: true, rows: 3, placeholder: 'Ranges, damage, status text, kill indicators, or anything you want visible.' }),
    field({ name: 'references', label: 'Clips, examples, or links', type: 'textarea', full: true, rows: 3, placeholder: 'Gameplay clips, ideas, or other examples that show what you want.' }),
  ].join('');
}

function setupRevealObservers() {
  document.querySelectorAll('.section-animate, .major-section-header').forEach((el) => el.classList.add('is-visible'));
}

function setupRequestForms() {
  const modal = document.querySelector('#request-modal');
  const form = document.querySelector('#request-form');
  const fields = document.querySelector('#request-fields');
  const status = document.querySelector('#request-status');
  const title = document.querySelector('#request-modal-title');
  const kicker = document.querySelector('#request-modal-kicker');
  const typeInput = document.querySelector('#request-type');
  if (!modal || !form) return;

  document.querySelectorAll('[data-request]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.request;
      const platform = button.dataset.platform || '';
      const champion = button.dataset.champion || '';
      typeInput.value = type;
      fields.innerHTML = fieldsFor(type, platform, champion);
      status.textContent = '';
      kicker.textContent = `${platform || 'Rift+'} request`;
      title.textContent = type === 'bug' ? `Report ${champion} bug` : type === 'feature' ? `Request ${champion} feature` : 'Request new champion';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      modal.querySelector('input, select, textarea')?.focus();
    });
  });

  modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload.website) return;
    payload.createdAt = new Date().toISOString();
    payload.page = location.href;

    if (requestEndpoint) {
      await fetch(requestEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } else {
      const saved = JSON.parse(localStorage.getItem('riftplusRequests') || '[]');
      saved.push(payload);
      localStorage.setItem('riftplusRequests', JSON.stringify(saved));
    }

    form.reset();
    status.textContent = 'Request submitted. Thank you.';
  });
}

if (pageKind === 'home') renderHome();
if (pageKind === 'ven') renderSuite(venSuite);
if (pageKind === 'hanbot') renderSuite(hanbotSuite);
setupRevealObservers();
