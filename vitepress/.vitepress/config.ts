import { defineConfig } from "vitepress";
import { getSidebar } from "vitepress-plugin-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stadium",
  description: "Game Framework for Education",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: getSidebar({
      contentRoot: "/vitepress",
      contentDirs: [""],
      collapsible: true,
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/rycont/stadium" },
    ],
  },
});
