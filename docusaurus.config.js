// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DAS Lab",
  tagline: "Data-driven Analysis of Software Lab",
  url: "https://das.encs.concordia.ca",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DAS-Concordia", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/DAS-Concordia/website/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/DAS-Concordia/website/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("./src/plugins/build-time-loader"),
    [
      "docusaurus-plugin-face-crop",
      {
        paths: [path.resolve(__dirname, "./src/pages/members")],
        height: 400,
        width: 400,
        minScale: 1,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "DAS Lab",
        logo: {
          alt: "DAS Lab Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/members", label: "People", position: "left" },
          { to: "/publications", label: "Publications", position: "left" },
          { to: "/sponsors", label: "Sponsors", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact Us", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About DAS",
            items: [
              {
                label: "People",
                to: "/members",
              },
              {
                label: "Publications",
                to: "/publications",
              },
              {
                label: "Sponsors",
                to: "/sponsors",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://das-concordia.slack.com/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DASLabConcordia",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/DAS-Concordia",
              },
              {
                label: "Contact Us",
                href: "/contact",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data-driven Analysis of Software Lab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
