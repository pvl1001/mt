import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
    process.env = { ...process.env, ...loadEnv(mode ?? '', process.cwd()) }

    return defineConfig({
        base: process.env.VITE_BASEPATH,
        plugins: [react(), svgr()],
        server: {
            port: 3000,
            open: true,
        },
        css: {
            transformer: 'postcss',
            modules: {
                generateScopedName: (classname, filename, css) => {
                    const cleanName: string = filename
                        .split('/')
                        .pop()
                        .replace(/\.module\.s?css/, '')
                    const hash: string = Buffer.from(css).toString('base64').slice(0, 3)
                    return `${cleanName}__${classname}_${hash}`
                },
            },
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "/src/app/styles/mixins" as *;',
                },
            },
        },
        resolve: {
            alias: {
                app: resolve('src/app'),
                pages: resolve('src/pages'),
                widgets: resolve('src/widgets'),
                features: resolve('src/features'),
                entities: resolve('src/entities'),
                shared: resolve('src/shared'),
            },
        },
        build: {
            // outDir: 'dist',
            // assetsDir: 'static',
            rollupOptions: {
                output: {
                    manualChunks: {
                        // 'formik': ['formik'],
                        // 'swiper': ['swiper'],
                        // 'tippyjs': ['@tippyjs/react'],
                        // 'react-dropzone': ['react-dropzone'],
                        // 'modals': ['src/widgets/modals/index.ts']
                    },
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: ({ name }) => {
                        if (/\.woff2?$/.test(name ?? '')) {
                            return 'assets/fonts/[name]-[hash][extname]'
                        }

                        if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
                            return 'assets/img/[name]-[hash][extname]'
                        }

                        if (/\.webm$/.test(name ?? '')) {
                            return 'assets/video/[name]-[hash][extname]'
                        }

                        if (/\.css$/.test(name ?? '')) {
                            return 'assets/css/[name]-[hash][extname]'
                        }

                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                        return 'assets/[name]-[hash][extname]'
                    },
                },
            },
        },
    })
}
