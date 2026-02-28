import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"26167593-e675-4845-b9ce-88b7de2ddb01","homePageId":"dea71057-c765-4a1a-a37b-adff5306c3cf","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"it","default":true}],"background":{},"workflows":[{"id":"bebaf4bc-0044-4d7c-ad87-3c65c9b07ceb","name":"getIdTable","actions":{"01bb7546-98cf-4b11-9dc9-367f7fcbddcd":{"id":"01bb7546-98cf-4b11-9dc9-367f7fcbddcd","next":"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4","type":"execute-workflow:054fbb69-00ed-49fb-9cbc-0de2dd2820b0"},"027eb355-c57f-4f37-9bf7-c1287a00ae4b":{"id":"027eb355-c57f-4f37-9bf7-c1287a00ae4b","name":"Contiene perfect-menu.it?","next":"01bb7546-98cf-4b11-9dc9-367f7fcbddcd","type":"if","value":{"code":"wwFormulas.contains(variables['2514ace4-1c9b-49e1-a838-316ba04eb53f'],'.perfect-menu.it')","__wwtype":"f"},"branches":[{"id":"cc5e165d-1528-434b-8537-4193f9a02a6b","value":true},{"id":"e03678da-73e8-485e-8dae-4c6e1ec13d56","value":false}]},"286bf4a1-45f6-450f-90f1-3ca645d72801":{"id":"286bf4a1-45f6-450f-90f1-3ca645d72801","name":"Set tenantHost","next":"027eb355-c57f-4f37-9bf7-c1287a00ae4b","type":"variable","varId":"2514ace4-1c9b-49e1-a838-316ba04eb53f","internal":false,"varValue":{"code":"'https://'+context.workflow['a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3'].result","__wwtype":"f"}},"397e9efa-ac98-48b6-ad53-59fb29537824":{"id":"397e9efa-ac98-48b6-ad53-59fb29537824","args":{"url":{"code":"variables['f8bd8678-b121-4112-9789-0f4b2ffe4878']+\"tenants\"","__wwtype":"f"},"method":"GET","headers":[{"key":"X-API-Key","value":"ak_862a7ee1aa854935da26b859759324bffefd3c9b535e1e8e74368da7dfed6c11"}],"queries":[],"isThroughServer":true,"isWithCredentials":true},"name":"Get Tenants","next":"500d7d6e-c3a1-435d-9c58-e69efa284a43","type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"},"4b828368-32f0-42de-90d8-3985ef4f80ca":{"id":"4b828368-32f0-42de-90d8-3985ef4f80ca","next":"397e9efa-ac98-48b6-ad53-59fb29537824","type":"variable","varId":"a39bd7f2-63bf-4eac-b40e-b392387fe4f5","internal":false,"varValue":"subdomain"},"500d7d6e-c3a1-435d-9c58-e69efa284a43":{"id":"500d7d6e-c3a1-435d-9c58-e69efa284a43","name":"Matcha SLUG con ID e salva","next":"ce225bbd-6f17-4403-847e-fd6667d227ce","type":"variable","varId":"81a6da29-b6aa-447b-82bc-c29fead87b5b","internal":false,"varValue":{"code":"","__wwtype":"f"}},"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3":{"id":"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3","code":"host = window.location.hostname.toLowerCase()\nreturn host","name":"Recupera Tenant","next":"286bf4a1-45f6-450f-90f1-3ca645d72801","type":"custom-js"},"cc5e165d-1528-434b-8537-4193f9a02a6b":{"id":"cc5e165d-1528-434b-8537-4193f9a02a6b","code":"tenantSlug = variables['2514ace4-1c9b-49e1-a838-316ba04eb53f']\nreturn tenantSlug","name":"Recupero tenant slug","next":"4b828368-32f0-42de-90d8-3985ef4f80ca","type":"custom-js","disabled":false},"ce225bbd-6f17-4403-847e-fd6667d227ce":{"id":"ce225bbd-6f17-4403-847e-fd6667d227ce","name":"Tenat risolto","type":"variable","varId":"7d34bab5-6c4c-47e1-82e4-22909688dca7","internal":false,"varValue":true,"__wwdescription":"<p>Blocca l’app finché il tenant non è risolto</p>"},"e03678da-73e8-485e-8dae-4c6e1ec13d56":{"id":"e03678da-73e8-485e-8dae-4c6e1ec13d56"},"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4":{"id":"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4","type":"execute-workflow:2ac7b05e-c8c2-4e94-a65e-da89b0bc69e1"}},"trigger":"onload","firstAction":"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3","triggerConditions":null}],"pages":[{"id":"4b4a92aa-e3f4-4e71-b229-2707b193b86b","linkId":"4b4a92aa-e3f4-4e71-b229-2707b193b86b","name":"single-menu","folder":null,"paths":{"it":"single-menu/{{menuId|}}","default":"single-menu/{{menuId|}}"},"langs":["en","it"],"cmsDataSetPath":null,"sections":[{"uid":"80f97582-b93e-46f2-b4c2-af86e6be7642","sectionTitle":"Top Nav","linkId":"9fcd5519-de3f-4883-bfac-4305aebc1c27"},{"uid":"da95add9-0f8b-4b11-9f95-57ba63033bf2","sectionTitle":"Section","linkId":"0c263d43-f00f-4e1a-b712-9a850a4d4886"},{"uid":"3cf7a289-d60c-45b2-831e-0af5a819b7c9","sectionTitle":"Section","linkId":"a4c119c8-6c7e-43a2-8333-06af7573a7a2"},{"uid":"bd167335-16d0-427d-9865-b950a7f8427e","sectionTitle":"Section","linkId":"6a5d45fe-978c-4d3d-9fd1-d26f43ceabea"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dea71057-c765-4a1a-a37b-adff5306c3cf","linkId":"dea71057-c765-4a1a-a37b-adff5306c3cf","name":"Menu","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","it"],"cmsDataSetPath":null,"sections":[{"uid":"237fb806-02ef-429f-a801-56f2acf45fc9","sectionTitle":"Top Nav","linkId":"cd19bd59-06fe-4617-a997-f02e71c214b5"},{"uid":"89abf545-683e-42b4-aa73-41e290af0b13","sectionTitle":"Section","linkId":"3cd2a2f5-6db6-42c4-9f5e-02d86fa8b5d9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 18;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
