import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'TribeComponents',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
        },
        rollupOptions: {
            external: [
                'vue',
                '@vueuse/core',
                '@vueuse/gesture',
                '@vueuse/motion',
                '@vuepic/vue-datepicker',
                '@vueup/vue-quill',
                'cropperjs',
                'dompurify',
                'swiper',
                'uuid',
                'v-dropdown-menu',
                'vuedraggable',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/free-solid-svg-icons',
                '@fortawesome/free-regular-svg-icons',
                '@fortawesome/free-brands-svg-icons',
                '@fortawesome/vue-fontawesome'
            ],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'named',
                assetFileNames: (assetInfo) => {
                    // Rename the CSS file to style.css
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'style.css'
                    }
                    return assetInfo.name
                }
            }
        }
    }
})