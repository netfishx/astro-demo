import bun from '@nurodev/astro-bun'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  adapter: bun(),
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
})
