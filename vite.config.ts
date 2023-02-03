import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components','src/views'],
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
        })
      ]
    }),
    AutoImport({
      include: [],
      imports: [
        'vue',
        'vue-router',
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    viteCompression({
      deleteOriginFile: true,
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
