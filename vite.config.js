// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 ESTE É O AJUSTE CRUCIAL:
  base: "/react-cpf-validator/",
});
