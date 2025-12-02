import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：GitHub Pages 的仓库名称
  // 如果你的仓库名不是 ZJUT-Creative-Workshop，请修改这里
  base: '/ZJUT-Creative-Workshop/',
})