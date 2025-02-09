import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor"; // React-related code
            if (id.includes("lodash")) return "lodash-vendor"; // Lodash-related code
            return "vendor"; // Other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // Prevents warnings
  },
});