import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'ComponentLibrary',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'named'
            }
        }
    }
})