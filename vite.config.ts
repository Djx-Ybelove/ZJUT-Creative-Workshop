import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cloudflare Pages 部署通常部署在根域名下，不需要 base 配置
  // 如果你需要自定义域名，也通常是根目录
})