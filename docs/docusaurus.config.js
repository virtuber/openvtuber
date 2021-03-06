module.exports = {
  title: "openvtuber",
  tagline: "Become a VTuber with just a camera",
  url: "https://virtuber.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "virtuber", // Usually your GitHub org/user name.
  projectName: "openvtuber", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "openvtuber",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/virtuber/openvtuber",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "ML",
              to: "docs/ml/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} virtuber`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/virtuber/openvtuber/edit/master/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
