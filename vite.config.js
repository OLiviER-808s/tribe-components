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
                'vue-final-modal',
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
                exports: 'named'
            }
        }
    }
})