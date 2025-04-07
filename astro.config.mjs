import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  output: 'server',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    svg: true,
    clientPrerender: true,
  },

  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },

  adapter: vercel(),
})
