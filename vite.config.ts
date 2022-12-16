import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [AntDesignVueResolver()]
    })
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "./src/styles/index.scss" as *;`
  //     },
  //   }
  // },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: '../neo-frame-dist',
    emptyOutDir: true,
  }
})
