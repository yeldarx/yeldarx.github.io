import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Елдар Құдайбергенов',
  tagline: 'Подкастер және бағдарламашы',
  favicon: 'img/favicon.ico',
  url: 'https://yeldar.org',
  baseUrl: '/',
  organizationName: 'yeldarx',
  projectName: 'yeldarx.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'kk',
    locales: ['kk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/yeldarx/yeldarx.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/yeldarx/yeldarx.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Елдар Құдайбергенов',
        logo: {
          alt: 'My Site Logo',
          src: 'img/yeldar-50px.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Блог', position: 'left'},
          {to: '/projects', label: 'Жобалар', position: 'left'},
          {to: '/contacts', label: 'Байланыс', position: 'left'},
          {to: '/now', label: 'Қазір ⚡️', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Yeldar Kudaiberegnov.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
