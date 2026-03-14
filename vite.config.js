import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ['src/**/*.ts', 'src/**/*.vue'],
            exclude: ['src/**/*.test.ts'],
            staticImport: true,
            insertTypesEntry: true,
            rollupTypes: false,
            copyDtsFiles: true,
            compilerOptions: {
                skipLibCheck: true,
                noUnusedLocals: false,
                noUnusedParameters: false
            }
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    build: {
        emptyOutDir: false,
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
                    // Keep component library CSS separate
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'components.css'
                    }
                    return assetInfo.name
                }
            }
        }
    }
})