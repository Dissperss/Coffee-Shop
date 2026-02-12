import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// Получаем __dirname в стиле ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(dirname(__filename))

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@/components': resolve(__dirname, 'src/components'),
            '@/assets': resolve(__dirname, 'src/assets'),
            '@/pages': resolve(__dirname, 'src/pages'),
            '@/provides': resolve(__dirname, 'src/provides'),
            '@/router': resolve(__dirname, 'src/router'),
            '@/data': resolve(__dirname, 'src/data'),
        },
    },
})
