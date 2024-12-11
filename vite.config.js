import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        // '@mui/material',
        // '@mui/icons-material'
      ],
      dts: 'src/auto-imports.d.ts', // (Optional) Generates TypeScript declaration file
    }),

  ],
})
