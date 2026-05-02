import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  logLevel: "error",
  plugins: [react()]
});