import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Windows/WSL 환경에서 파일 변경 감지
    },
    hmr: {
      overlay: true, // 에러 오버레이 표시
    },
  },
});
