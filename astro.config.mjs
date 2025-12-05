// @ts-check
import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  site: 'https://da-a2.vercel.app'
});
