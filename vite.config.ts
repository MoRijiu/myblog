/*
 * @Author: zhengduo
 * @Date: 2023-01-18 09:54:08
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 09:57:23
 * @Descripttion: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  base: './', // 打包路径
  server: {
    port: 3008, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://localhost:1234/',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})
