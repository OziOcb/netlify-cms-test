import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/cms.html',
          dest: 'cms/',
          rename: 'index.html',
          // transform: content => content.toString().replace('#{BRANCH}', env.VUE_APP_BUILD_BRANCH.replace('refs/heads/', ''))
        }
      ]
    }),
    vue()
  ],
})
