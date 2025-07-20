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
      { text: "Third-Party", link: "/third-party" },
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
          collapsed: false,
          items: [
            {
              text: "Nemo's Copper",
              base: "/projects/minecraft-mods/nemos-copper/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Blocks",
                  link: "blocks",
                },
                {
                  text: "Items",
                  link: "items",
                },
                {
                  text: "Entities",
                  link: "entities",
                },
                {
                  text: "Gallery",
                  link: "gallery",
                },
              ],
            },
            {
              text: "Nemo's Enchantments",
              base: "/projects/minecraft-mods/nemos-enchantments/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Enchantments",
                  link: "enchantments",
                },
              ],
            },
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
            {
              text: "Nemo's Mending",
              base: "/projects/minecraft-mods/nemos-mending/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
              ],
            },
            {
              text: "Nemo's Paintings",
              base: "/projects/minecraft-mods/nemos-paintings/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Gallery",
                  link: "gallery",
                },
                {
                  text: "Submit Images",
                  link: "submit-images",
                },
              ],
            },
            {
              text: "Nemo's Woodcutter",
              base: "/projects/minecraft-mods/nemos-woodcutter/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Create Custom Woodcutting Recipes",
                  link: "create-custom-woodcutting-recipes",
                },
                {
                  text: "Mod Compatibilities",
                  link: "mod-compatibilities",
                },
              ],
            },
          ],
        },
        {
          text: "Community & Support",
          link: "community-and-support",
        },
      ],
      "/third-party": [
        {
          text: "Community & Support",
          link: "community-and-support",
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
      {
        icon: "kofi",
        link: "https://ko-fi.com/devnemo",
      },
    ],
  },
});
