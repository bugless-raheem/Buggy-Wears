import path from 'node:path';
import { defineConfig } from 'vite';

const basePath = process.env.BASE_PATH ?? '/';
const rawPort = Number(process.env.PORT ?? 5173);

export default defineConfig({
  base: basePath,
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port: rawPort,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: rawPort,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
