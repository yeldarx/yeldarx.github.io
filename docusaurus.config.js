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
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Барлық жазбалар',
          blogTitle: 'Жеке блог',
          blogDescription: 'Елдар Құдайбергеновның жеке блогы',
          postsPerPage: 'ALL',
          editLocalizedFiles: true,
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://yeldar.org/">Yeldar Kudaibergenov</a>.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
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
      image: 'img/homepage-social-card.jpg',
      navbar: {
        title: 'Елдар Құдайбергенов',
        logo: {
          alt: 'Елдар Құдайбергенов',
          src: 'img/yeldar-50px.png',
        },
        items: [
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
