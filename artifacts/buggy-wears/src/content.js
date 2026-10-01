// DRAFT BRAND COPY: confirm and replace with the client's final copy before launch.
import logo from './assets/logo.svg';
import look01 from './assets/images/look-01.jpg';
import look02 from './assets/images/look-02.jpg';
import look03 from './assets/images/look-03.jpg';
import look04 from './assets/images/look-04.jpg';
import look05 from './assets/images/look-05.jpg';
import fabric01 from './assets/images/fabric-01.jpg';
import fabric02 from './assets/images/fabric-02.jpg';

const content = {
  brand: 'Buggy Wears',
  tagline: 'Quiet confidence, cut to last.',
  logo,
  labels: {
    skipLink: 'Skip to main content',
    primaryNavigation: 'Primary navigation',
    lookbook: 'Collection lookbook',
    values: 'Buggy Wears values',
    contact: 'Contact Buggy Wears',
    backToTop: 'Back to top',
  },
  navigation: [
    { label: 'Craft', href: '#craft' },
    { label: 'Looks', href: '#lookbook' },
    { label: 'Values', href: '#values' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    label: 'Independent by nature',
    kicker: 'New season / 01',
    headline: 'Buggy<br /><em>Wears</em>',
    text: 'For getting dressed without a second thought—and showing up exactly as yourself.',
    cta: 'Explore the looks',
    note: 'Scroll to explore',
    image: {
      src: look01,
      alt: 'Monochrome look in a leather jacket and relaxed denim',
      title: 'Look 01',
    },
  },
  craft: {
    label: '01 / Craft',
    title: 'Made with intent',
    intro: 'Considered in every line. Easy in every moment.',
    text: 'A little structure. A lot of room to move. The pieces are made to feel like you from the first wear—and keep up with wherever the day goes.',
    note: 'A detail study — temporary fashion-photo crop',
    image: {
      src: fabric02,
      alt: 'Model seated in a white sweatshirt and denim; temporary detail image, not a textile close-up',
    },
    detailImage: {
      src: fabric01,
      alt: 'Two models outdoors; temporary visual reference for the future fabric scene',
    },
    details: [
      { number: '01', title: 'Easy by design', text: 'Pieces with space to move and room to make them your own.' },
      { number: '02', title: 'Made to repeat', text: 'The kind of thing you reach for again tomorrow.' },
      { number: '03', title: 'Never overdone', text: 'Just enough detail to make the everyday feel different.' },
    ],
  },
  lookbook: {
    label: '02 / Lookbook',
    title: 'The collection',
    intro: 'Five ways to make the day your own.',
    items: [
      {
        src: look01,
        title: 'Look 01',
        caption: 'A little off script.',
        alt: 'Monochrome look in a leather jacket and relaxed denim',
        layout: 'portrait',
      },
      {
        src: look02,
        title: 'Look 02',
        caption: 'Ease, with an edge.',
        alt: 'Model wearing a brown varsity jacket with relaxed trousers',
        layout: 'portrait',
      },
      {
        src: look03,
        title: 'Look 03',
        caption: 'A softer kind of statement.',
        alt: 'Model in a bold, patterned knit',
        layout: 'portrait',
      },
      {
        src: look04,
        title: 'Look 04',
        caption: 'Made for moving through it.',
        alt: 'Model in a dark outfit, captured in motion',
        layout: 'portrait',
      },
      {
        src: look05,
        title: 'Look 05',
        caption: 'Quietly unmistakable.',
        alt: 'Portrait of a model in a considered everyday look',
        layout: 'portrait',
      },
    ],
  },
  values: {
    label: '03 / Values',
    title: 'A way of wearing it.',
    intro: 'Not a uniform. A point of view.',
    lines: [
      { word: 'Crafted.', note: 'Thoughtful details, without the fuss.' },
      { word: 'Considered.', note: 'Less noise. More of what feels right.' },
      { word: 'Confident.', note: 'Wear it your way. That is the whole point.' },
    ],
  },
  contact: {
    label: '04 / Contact',
    title: 'Keep in touch.',
    text: 'Questions, collaborations, or just a good story? We would like to hear it.',
    button: 'Say hello',
    email: 'hello@example.com',
    socialLabel: 'Instagram handle to be added',
  },
  footer: {
    note: 'Independent by nature.',
    copyright: '© 2026 Buggy Wears',
    backToTop: 'Back to top',
  },
  fabricTexture: {
    src: fabric01,
    alt: 'Temporary lifestyle-photo placeholder; replace with a real fabric close-up before launch',
  },
};

export { content };
export default content;