import { content } from './content.js';
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="landing" id="collection">
    <div class="frame">
      <header class="site-header">
        <a class="brand-mark" href="#top" aria-label="${content.brand} home">
          <img src="${content.logo}" alt="" />
          <span>${content.brand}<small>${content.tagline}</small></span>
        </a>
        <div class="header-meta"><span class="status-dot"></span> ${content.hero.label}</div>
        <a class="header-link" href="mailto:${content.contact.email}">${content.contact.button} <span aria-hidden="true">↗</span></a>
      </header>

      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span>${content.hero.kicker}</p>
          <h1 id="hero-title">${content.hero.headline}</h1>
          <p class="intro">${content.hero.text}</p>
          <a class="collection-link" href="mailto:${content.contact.email}">
            <span>${content.contact.button}</span><span class="link-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="hero-foot">
            <span class="micro-label">${content.hero.note}</span>
            <span class="scroll-mark" aria-hidden="true"><i></i></span>
          </div>
        </div>

        <div class="image-stage">
          <figure class="hero-image">
            <img class="main-look" src="${content.lookbook.items[0].src}" alt="${content.lookbook.items[0].alt}" width="1200" height="1800" />
            <figcaption class="image-caption">
              <span class="caption-rule"></span>
              <span class="caption-label">${content.lookbook.items[0].title}</span>
              <span class="caption-number">01 / 05</span>
            </figcaption>
          </figure>
          <span class="image-index" aria-hidden="true">BW — 001</span>
        </div>
      </section>
      <div class="bottom-rule"><span>${content.tagline}</span><span>${content.contact.label} <b>●</b></span></div>
    </div>
  </main>
`;