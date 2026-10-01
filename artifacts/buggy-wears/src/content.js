// PLACEHOLDER CONTENT: replace with the client's final copy and photos before launch.
import logo from './assets/logo.svg';
import look01 from './assets/images/look-01.jpg';

// The remaining originals are loaded in later stages and will be converted to WebP.
const localImage = (filename) =>
  `${import.meta.env.BASE_URL}src/assets/images/${filename}`;

const content = {
  brand: 'Buggy Wears',
  tagline: 'Quiet confidence, cut to last.',
  logo,
  hero: {
    label: 'Independent by nature',
    kicker: 'New season / 01',
    headline: 'Buggy<br /><em>Wears</em>',
    text: 'Quiet confidence, cut to last.',
    note: 'Scroll',
  },
  craft: {
    label: '01 / Craft',
    title: 'Made with intent',
    text: 'Placeholder: a short line about fabrics, cut and craft.',
    image: {
      src: localImage('fabric-02.jpg'),
      alt: 'Placeholder fashion photograph with a close crop of garment fabric',
    },
  },
  lookbook: {
    label: '02 / Lookbook',
    title: 'The collection',
    items: [
      {
        src: look01,
        title: 'Look 01',
        caption: 'Placeholder caption.',
        alt: 'Monochrome look in a leather jacket and relaxed denim',
      },
      {
        src: localImage('look-02.jpg'),
        title: 'Look 02',
        caption: 'Placeholder caption.',
        alt: 'A brown varsity jacket, styled with a considered streetwear edge',
      },
      {
        src: localImage('look-03.jpg'),
        title: 'Look 03',
        caption: 'Placeholder caption.',
        alt: 'An everyday look in a statement knit',
      },
      {
        src: localImage('look-04.jpg'),
        title: 'Look 04',
        caption: 'Placeholder caption.',
        alt: 'A model in motion wearing a dark, fluid outer layer',
      },
      {
        src: localImage('look-05.jpg'),
        title: 'Look 05',
        caption: 'Placeholder caption.',
        alt: 'Portrait in a considered, close-fit everyday look',
      },
    ],
  },
  values: {
    label: '03 / Values',
    lines: ['Crafted.', 'Considered.', 'Confident.'],
  },
  contact: {
    label: '04 / Contact',
    title: 'Join the colony',
    button: 'Get in touch',
    email: 'hello@example.com',
    instagram: 'https://instagram.com/placeholder',
  },
  fabricTexture: {
    src: localImage('fabric-01.jpg'),
    alt: 'Placeholder crop from a fashion photograph for the cloth shader texture',
  },
};

export { content };
export default content;