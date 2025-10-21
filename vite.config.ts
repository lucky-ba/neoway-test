import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["search-input", "virtualized-table", "accessible-modal"].includes(
              tag
            ),
        },
      },
    }),
  ],
  base: "/neoway-test/",
});
