import { content } from './content.js';
import { initScrollExperience } from './ui/scroll.js';
import './style.css';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('Buggy Wears app root (#app) is missing.');
}

const navigation = content.navigation
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('');

const looks = content.lookbook.items
  .map(
    (item, index) => `
      <figure class="look-card look-card--${item.layout}" data-reveal>
        <div class="look-image-wrap">
          <img
            src="${item.src}"
            alt="${item.alt}"
            width="1200"
            height="1500"
            loading="lazy"
            decoding="async"
          />
          <span class="look-index" aria-hidden="true">${String(index + 1).padStart(2, '0')} / 05</span>
        </div>
        <figcaption>
          <span class="look-title">${item.title}</span>
          <span class="look-caption">${item.caption}</span>
        </figcaption>
      </figure>
    `,
  )
  .join('');

const craftDetails = content.craft.details
  .map(
    (detail) => `
      <li class="craft-detail" data-reveal>
        <span class="detail-number">${detail.number}</span>
        <div>
          <h3>${detail.title}</h3>
          <p>${detail.text}</p>
        </div>
      </li>
    `,
  )
  .join('');

const valueLines = content.values.lines
  .map(
    (value, index) => `
      <div class="value-line" data-reveal>
        <span class="value-number">0${index + 1}</span>
        <h3>${value.word}</h3>
        <p>${value.note}</p>
      </div>
    `,
  )
  .join('');

app.innerHTML = `
  <a class="skip-link" href="#main-content">${content.labels.skipLink}</a>

  <header class="site-header">
    <a class="brand-mark" href="#top" aria-label="${content.brand} home">
      <img src="${content.logo}" alt="" width="36" height="48" />
      <span>${content.brand}<small>${content.tagline}</small></span>
    </a>
    <nav class="site-nav" aria-label="${content.labels.primaryNavigation}">
      ${navigation}
    </nav>
  </header>

  <main id="main-content">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal><span class="eyebrow-line"></span>${content.hero.kicker}</p>
          <h1 id="hero-title" data-reveal>${content.hero.headline}</h1>
          <p class="hero-intro" data-reveal>${content.hero.text}</p>
          <a class="text-link" href="#lookbook" data-reveal>
            <span>${content.hero.cta}</span><span class="link-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="hero-foot" data-reveal>
            <span>${content.hero.note}</span><span class="scroll-mark" aria-hidden="true"><i></i></span>
          </div>
        </div>

        <figure class="hero-image" data-reveal>
          <img
            src="${content.hero.image.src}"
            alt="${content.hero.image.alt}"
            width="1200"
            height="1800"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption>
            <span class="caption-rule"></span>
            <span>${content.hero.image.title}</span>
            <span class="caption-number">01 / 05</span>
          </figcaption>
          <span class="image-index" aria-hidden="true">BW — 001</span>
        </figure>
      </div>
      <a class="hero-next" href="#craft" aria-label="Continue to ${content.craft.title}">
        <span>${content.craft.label}</span><span aria-hidden="true">↓</span>
      </a>
    </section>

    <section class="section craft-section" id="craft" aria-labelledby="craft-title">
      <div class="section-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-line"></span>${content.craft.label}</p>
        <h2 id="craft-title">${content.craft.title}</h2>
        <p class="section-lede">${content.craft.intro}</p>
      </div>

      <div class="craft-layout">
        <div class="craft-visual" data-reveal>
          <figure class="craft-main-image">
            <img
              src="${content.craft.image.src}"
              alt="${content.craft.image.alt}"
              width="1200"
              height="1500"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure class="craft-detail-image">
            <img
              src="${content.craft.detailImage.src}"
              alt="${content.craft.detailImage.alt}"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <figcaption>${content.craft.note}</figcaption>
          </figure>
        </div>

        <div class="craft-copy">
          <p class="craft-body" data-reveal>${content.craft.text}</p>
          <ol class="craft-details">${craftDetails}</ol>
        </div>
      </div>
    </section>

    <section class="section lookbook-section" id="lookbook" aria-labelledby="lookbook-title">
      <div class="section-heading lookbook-heading" data-reveal>
        <p class="eyebrow"><span class="eyebrow-line"></span>${content.lookbook.label}</p>
        <h2 id="lookbook-title">${content.lookbook.title}</h2>
        <p class="section-lede">${content.lookbook.intro}</p>
      </div>
      <div class="lookbook-grid" aria-label="${content.labels.lookbook}">
        ${looks}
      </div>
    </section>

    <section class="section values-section" id="values" aria-labelledby="values-title">
      <div class="values-intro" data-reveal>
        <p class="eyebrow"><span class="eyebrow-line"></span>${content.values.label}</p>
        <h2 id="values-title">${content.values.title}</h2>
        <p class="section-lede">${content.values.intro}</p>
      </div>
      <div class="values-list" aria-label="${content.labels.values}">
        ${valueLines}
      </div>
    </section>

    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div class="contact-inner" data-reveal>
        <p class="eyebrow"><span class="eyebrow-line"></span>${content.contact.label}</p>
        <h2 id="contact-title">${content.contact.title}</h2>
        <p class="contact-copy">${content.contact.text}</p>
        <a class="contact-link" href="mailto:${content.contact.email}">
          <span>${content.contact.button}</span><span class="link-arrow" aria-hidden="true">↗</span>
        </a>
        <p class="social-placeholder">${content.contact.socialLabel}</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <a class="brand-mark footer-brand" href="#top" aria-label="${content.brand} home">
        <img src="${content.logo}" alt="" width="30" height="40" />
        <span>${content.brand}<small>${content.footer.note}</small></span>
      </a>
      <p class="footer-tagline">${content.tagline}</p>
      <a class="back-to-top" href="#top" aria-label="${content.labels.backToTop}">
        ${content.footer.backToTop}<span aria-hidden="true">↑</span>
      </a>
    </div>
    <div class="footer-bottom">
      <span>${content.footer.copyright}</span>
      <a href="mailto:${content.contact.email}">${content.contact.email}</a>
    </div>
  </footer>
`;

initScrollExperience();