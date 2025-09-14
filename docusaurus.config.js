// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '智宇云擎文档中心',
  tagline: '提供产品文档、API 参考和代码示例，助您快速开发',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://no-f.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docx/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'no-f', // Usually your GitHub org/user name.
  projectName: 'docx', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'ZYYQ',
        logo: {
          alt: 'ZYYQ Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '产品概述',
          },
          {
            type: 'doc',
            docId: 'product/index',
            position: 'left',
            label: '产品介绍',
          },
          {
            type: 'doc',
            docId: 'console/index',
            position: 'left',
            label: '控制台',
          },
          {
            type: 'doc',
            docId: 'device/device-sdk',
            position: 'left',
            label: '设备开发',
          },
          {
            type: 'doc',
            docId: 'app/android-app-sdk',
            position: 'left',
            label: 'App开发',
          },
          {
            type: 'doc',
            docId: 'pc/windows-pc-sdk',
            position: 'left',
            label: 'PC开发',
          },
          {
            type: 'doc',
            docId: 'web/web-sdk',
            position: 'left',
            label: 'Web开发',
          },
          {
            type: 'doc',
            docId: 'api/api-overview',
            position: 'left',
            label: '云端API',
          },
          {
            type: 'doc',
            docId: 'development/index',
            position: 'left',
            label: '开发参考',
          },
          {
            type: 'doc',
            docId: 'help/account-development-issues',
            position: 'left',
            label: '帮助中心',
          },
          {
            href: 'https://www.ziyyun.com/',
            label: '官网',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} 杭州智宇云擎科技有限公司. 浙ICP备2025158076号-1`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
