import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // Local'de boş kalsın, deploy'da repo adı olsun
  base: mode === "development" ? "/" : "/realm-portfolio/",
}));
