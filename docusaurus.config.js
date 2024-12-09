// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patrones de diseño de comportamiento',
  tagline: 'Proyecto de Gitub',
  favicon: 'img/patrones-comportamiento.jpg',

  // Set the production url of your site here
  url: 'https://dazer-m-l.github.io', // Tu sitio en GitHub Pages
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docosaurus-arq/', // Nombre del repositorio

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dazer-m-l', // Tu usuario en GitHub
  projectName: 'docosaurus-arq', // Nombre del repositorio

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dazer-m-l/docosaurus-arq/tree/main/docs/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Patrones de Diseño de Comportamiento',
        logo: {
          alt: 'Logo de Patrones de Diseño',
          src: 'img/patrones-comportamiento.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Patrones de Diseño',
          },

          {
            href: 'https://github.com/dazer-m-l/docosaurus-arq',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    trailingSlash: false,
};

export default config;
