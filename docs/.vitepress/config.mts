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
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/NemoNotFound/NemosWiki/tree/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/projects/": [
        {
          text: "Minecraft Mods",
          collapsed: true,
          items: [
            {
              text: "Nemo's Backpacks",
              base: "/projects/minecraft-mods/nemos-backpacks/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Loot Tables",
                  link: "loot-tables",
                },
                {
                  text: "Gallery",
                  link: "gallery",
                },
                {
                  text: "Creating Resource Packs",
                  link: "creating-resource-packs",
                },
              ],
            },
            {
              text: "Nemo's Campfires",
              base: "/projects/minecraft-mods/nemos-campfires/",
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
              ],
            },
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
              text: "Nemo's Creatures",
              base: "/projects/minecraft-mods/nemos-creatures/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Mobs",
                  link: "mobs",
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
              text: "Nemo's Firework Keybinding",
              base: "/projects/minecraft-mods/nemos-firework-keybinding/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
              ],
            },
            {
              text: "Nemo's Sorting",
              base: "/projects/minecraft-mods/nemos-sorting/",
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
              text: "Nemo's Mossy Blocks",
              base: "/projects/minecraft-mods/nemos-mossy-blocks/",
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
                  text: "Biome Changes",
                  link: "biome-changes",
                },
                {
                  text: "Gallery",
                  link: "gallery",
                },
              ],
            },
            {
              text: "Nemo's Night Progression",
              base: "/projects/minecraft-mods/nemos-night-progression/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "How It Works",
                  link: "how-it-works",
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
                  text: "Submit Images",
                  link: "submit-images",
                },
                {
                  text: "Gallery",
                  link: "gallery",
                },
              ],
            },
            {
              text: "Nemo's Tags",
              base: "/projects/minecraft-mods/nemos-tags/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Custom Bars, Panes & Walls",
                  link: "custom-bars-panes-and-walls",
                },
                {
                  text: "Custom Buckets",
                  link: "custom-buckets",
                },
                {
                  text: "Custom Rails",
                  link: "custom-rails",
                },
                {
                  text: "Custom Shears",
                  link: "custom-shears",
                },
              ],
            },
            {
              text: "Nemo's Vertical Slabs",
              base: "/projects/minecraft-mods/nemos-vertical-slabs/",
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
                  text: "Supported Mods",
                  link: "supported-mods",
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
                  text: "Create Custom Recipes",
                  link: "create-custom-recipes",
                },
                {
                  text: "Supported Mods",
                  link: "supported-mods",
                },
              ],
            },
            {
              text: "Nemo's Quartz",
              base: "/projects/minecraft-mods/nemos-quartz/",
              collapsed: true,
              items: [
                {
                  text: "General",
                  link: "general",
                },
                {
                  text: "Recipes",
                  link: "recipes",
                },
                {
                  text: "Gallery",
                  link: "gallery",
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
      "/third-party/minecraft-modding": [
        {
          text: "Minecraft Modding",
          collapsed: false,
          base: "/third-party/minecraft-modding/",
          items: [
            {
              text: "General",
              link: "general",
            },
            {
              text: "Troubleshooting Guide",
              link: "troubleshooting-guide",
            },
          ],
        },
        {
          text: "Community & Support",
          link: "community-and-support",
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/NemoNotFound/NemosWiki" },
      { icon: "modrinth", link: "https://modrinth.com/user/nemonotfound" },
      {
        icon: "curseforge",
        link: "https://www.curseforge.com/members/nemonotfound/projects",
      },
      {
        icon: "kofi",
        link: "https://ko-fi.com/nemonotfound",
      },
    ],
  },
});
