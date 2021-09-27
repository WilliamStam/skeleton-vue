import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import filesize from 'rollup-plugin-filesize';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [{find: '@/', replacement: '/src/'}],
    },
    css: {
        preprocessorOptions: {
            scss: {
                // example : additionalData: `@import "./src/design/styles/variables";`
                // dont need include file extend .scss
                additionalData: `@import "/src/assets/css/variables";`
            },
        },
    },
    build: {
        rollupOptions: {
            external: [
                /\/media\/.*/,
            ],
        },
    },
    server: {
        proxy: {
            // string shorthand
            '/media': {
                target: 'http://skeleton.localhost',
                changeOrigin: true,
                secure: false,
                // ws: true,
            },
            '/api': {
                target: 'http://skeleton.localhost',
                changeOrigin: true,
                secure: false,
                // ws: true,
            },
        }
    }
})
