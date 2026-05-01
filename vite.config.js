import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"4b4a92aa-e3f4-4e71-b229-2707b193b86b-en":{"outputDir":"./en/single-menu/:param","lang":"en","title":"","cacheVersion":34,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n\n::-webkit-scrollbar {\n  display: none!important;\n}\n</style>\n<style>\nbody::-webkit-scrollbar {\n  display: none;\n}\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/single-menu/:param/"},{"rel":"alternate","hreflang":"en","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/en/single-menu/:param/"},{"rel":"alternate","hreflang":"it","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/single-menu/:param/"}]},"4b4a92aa-e3f4-4e71-b229-2707b193b86b-it":{"outputDir":"./single-menu/:param","lang":"it","title":"Il nostro menu | Perfect Menu","cacheVersion":34,"meta":[{"name":"title","content":"Il nostro menu | Perfect Menu"},{"itemprop":"name","content":"Il nostro menu | Perfect Menu"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Il nostro menu | Perfect Menu"},{"property":"og:title","content":"Il nostro menu | Perfect Menu"},{"property":"og:site_name","content":"Il nostro menu | Perfect Menu"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n\n::-webkit-scrollbar {\n  display: none!important;\n}\n</style>\n<style>\nbody::-webkit-scrollbar {\n  display: none;\n}\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/single-menu/:param/"},{"rel":"alternate","hreflang":"en","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/en/single-menu/:param/"},{"rel":"alternate","hreflang":"it","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/single-menu/:param/"}]},"dea71057-c765-4a1a-a37b-adff5306c3cf-en":{"outputDir":"./en/","lang":"en","title":"","cacheVersion":34,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\n\n::-webkit-scrollbar {\n  display: none!important;\n}\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/en/"},{"rel":"alternate","hreflang":"it","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/"}]},"dea71057-c765-4a1a-a37b-adff5306c3cf-it":{"outputDir":"./","lang":"it","title":"Il nostro menu | Perfect Menu","cacheVersion":34,"meta":[{"name":"title","content":"Il nostro menu | Perfect Menu"},{"itemprop":"name","content":"Il nostro menu | Perfect Menu"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Il nostro menu | Perfect Menu"},{"property":"og:title","content":"Il nostro menu | Perfect Menu"},{"property":"og:site_name","content":"Il nostro menu | Perfect Menu"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\n\n::-webkit-scrollbar {\n  display: none!important;\n}\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/en/"},{"rel":"alternate","hreflang":"it","href":"https://26167593-e675-4845-b9ce-88b7de2ddb01.weweb-preview.io/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rolldownOptionsInput = {};
for (const pageName in pages) {
    rolldownOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

function getFrontEnvironmentValues(root, mode) {
    const filePath = path.resolve(root, `.env.${mode}`);
    if (!fs.existsSync(filePath)) {
        return {};
    }

    return Object.fromEntries(
        Object.entries(parseEnv(fs.readFileSync(filePath, 'utf8'))).filter(([key]) => !key.startsWith('VITE_'))
    );
}

export default defineConfig(({ mode }) => {
    return {
        plugins: [vue()],
        base: "/",
        define: {
            global: 'globalThis',
            __VUE_PROD_DEVTOOLS__: mode === 'development',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: mode === 'development',
            __WW_FRONT_ENV_VARIABLES__: JSON.stringify({
                staging: getFrontEnvironmentValues(__dirname, 'staging'),
                production: getFrontEnvironmentValues(__dirname, 'production'),
            }),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        server: {
            port: 8080,
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rolldownOptions: {
                input: rolldownOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    if (/Use of direct `eval`/.test(entry.message)) return;
                    return next(entry);
                },
            },
        },
    };
});
