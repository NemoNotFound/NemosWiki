import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/NemoNotFound/NemoNotFound/blob/master/resources/svg/logo.svg?raw=true",
      },
    ],
  ],
  cleanUrls: true,
  lastUpdated: true,
  title: "Nemo's Wiki",
  description: "All of Nemo's Wiki in one place",
  themeConfig: {
    logo: "https://github.com/NemoNotFound/NemoNotFound/blob/master/resources/svg/logo.svg?raw=true",
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Third-Party APIs", link: "/third-party-apis" },
    ],
    editLink: {
      pattern:
        "https://github.com/NemoNotFound/NemosWiki/tree/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/projects/": [
        {
          text: "Minecraft Mods",
          base: "/projects/minecraft-mods/",
          collapsed: true,
          items: [
            {
              text: "Nemo's Inventory Sorting",
              base: "/projects/minecraft-mods/nemos-inventory-sorting/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "How to Use",
                  link: "how-to-use",
                },
                {
                  text: "Configs",
                  link: "configs",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/NemoNotFound/NemosWiki" },
      { icon: "modrinth", link: "https://modrinth.com/user/DevNemo" },
      {
        icon: "curseforge",
        link: "https://www.curseforge.com/members/devnemo/projects",
      },
    ],
  },
});
