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
window.wwg_designInfo = {"id":"26167593-e675-4845-b9ce-88b7de2ddb01","homePageId":"dea71057-c765-4a1a-a37b-adff5306c3cf","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"it","default":true}],"background":{},"workflows":[{"id":"bebaf4bc-0044-4d7c-ad87-3c65c9b07ceb","name":"Pageload Home","actions":{"01bb7546-98cf-4b11-9dc9-367f7fcbddcd":{"id":"01bb7546-98cf-4b11-9dc9-367f7fcbddcd","next":"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4","type":"execute-workflow:054fbb69-00ed-49fb-9cbc-0de2dd2820b0"},"286bf4a1-45f6-450f-90f1-3ca645d72801":{"id":"286bf4a1-45f6-450f-90f1-3ca645d72801","name":"Set tenantHost","next":"cc5e165d-1528-434b-8537-4193f9a02a6b","type":"variable","varId":"2514ace4-1c9b-49e1-a838-316ba04eb53f","internal":false,"varValue":{"code":"'https://'+context.workflow['a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3'].result","__wwtype":"f"}},"397e9efa-ac98-48b6-ad53-59fb29537824":{"id":"397e9efa-ac98-48b6-ad53-59fb29537824","args":{"url":{"code":"variables['f8bd8678-b121-4112-9789-0f4b2ffe4878']+\"tenants\"","__wwtype":"f"},"method":"GET","headers":[{"key":"X-API-Key","value":{"code":"variables['d0ca9d64-f045-433c-bced-e9c39a8767e5']","__wwtype":"f"}}],"queries":[{"key":"domain","value":{"code":"context.workflow['a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3'].result","__wwtype":"f"}}],"isThroughServer":true,"isWithCredentials":true},"name":"Get Tenants","next":"500d7d6e-c3a1-435d-9c58-e69efa284a43","type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"},"4b828368-32f0-42de-90d8-3985ef4f80ca":{"id":"4b828368-32f0-42de-90d8-3985ef4f80ca","next":"397e9efa-ac98-48b6-ad53-59fb29537824","type":"variable","varId":"a39bd7f2-63bf-4eac-b40e-b392387fe4f5","internal":false,"varValue":"subdomain"},"500d7d6e-c3a1-435d-9c58-e69efa284a43":{"id":"500d7d6e-c3a1-435d-9c58-e69efa284a43","name":"Matcha SLUG con ID e salva","next":"d0411b77-c203-4dea-bef4-32db3f28dc09","type":"variable","varId":"81a6da29-b6aa-447b-82bc-c29fead87b5b","internal":false,"varValue":{"code":"context.workflow['397e9efa-ac98-48b6-ad53-59fb29537824'].result?.['data']?.['data']?.['tenants']?.[0]?.['id']","__wwtype":"f"}},"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3":{"id":"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3","code":"host = window.location.hostname.toLowerCase()\nreturn host","name":"Recupera Tenant","next":"286bf4a1-45f6-450f-90f1-3ca645d72801","type":"custom-js"},"b7bf14f9-5ec4-4b1f-8a24-96d9750ffa98":{"id":"b7bf14f9-5ec4-4b1f-8a24-96d9750ffa98","name":"Salva i Menu","next":"ce225bbd-6f17-4403-847e-fd6667d227ce","type":"variable","varId":"7bddbf44-d266-47dd-a1eb-48652bd0de67","internal":false,"varValue":{"code":"context.workflow['dfbc6182-65de-4605-ad93-1d8bfe5bbd52'].result?.['data']?.['data']?.['menus']","__wwtype":"f"}},"c0580405-d93b-4541-ba9c-89e20e86bcaa":{"id":"c0580405-d93b-4541-ba9c-89e20e86bcaa","name":"Set restaurant ID","next":"f9b75526-7456-4b8d-b63c-fe9dcbc1180c","type":"variable","varId":"0462cecc-c15b-46c0-8cfd-cb68275d8948","internal":false,"varValue":{"code":"context.workflow['d0411b77-c203-4dea-bef4-32db3f28dc09'].result?.['data']?.['data']?.['restaurants']?.[0]?.['id']","__wwtype":"f"}},"cc5e165d-1528-434b-8537-4193f9a02a6b":{"id":"cc5e165d-1528-434b-8537-4193f9a02a6b","code":"tenantSlug = variables['2514ace4-1c9b-49e1-a838-316ba04eb53f']\nreturn tenantSlug","name":"Recupero tenant slug","next":"4b828368-32f0-42de-90d8-3985ef4f80ca","type":"custom-js","disabled":false},"ce225bbd-6f17-4403-847e-fd6667d227ce":{"id":"ce225bbd-6f17-4403-847e-fd6667d227ce","name":"Tenat risolto","next":"01bb7546-98cf-4b11-9dc9-367f7fcbddcd","type":"variable","varId":"7d34bab5-6c4c-47e1-82e4-22909688dca7","internal":false,"varValue":true,"__wwdescription":"<p>Blocca l’app finché il tenant non è risolto</p>"},"d0411b77-c203-4dea-bef4-32db3f28dc09":{"id":"d0411b77-c203-4dea-bef4-32db3f28dc09","args":{"url":{"code":"variables['f8bd8678-b121-4112-9789-0f4b2ffe4878']+'restaurants'","__wwtype":"f"},"method":"GET","headers":[{"key":"X-API-Key","value":{"code":"variables['d0ca9d64-f045-433c-bced-e9c39a8767e5']","__wwtype":"f"}}],"queries":[{"key":"tenantId","value":{"code":"variables['81a6da29-b6aa-447b-82bc-c29fead87b5b']","__wwtype":"f"}}],"isThroughServer":true},"name":"Get Restaurant ID","next":"c0580405-d93b-4541-ba9c-89e20e86bcaa","type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"},"dfbc6182-65de-4605-ad93-1d8bfe5bbd52":{"id":"dfbc6182-65de-4605-ad93-1d8bfe5bbd52","args":{"url":{"code":"variables['f8bd8678-b121-4112-9789-0f4b2ffe4878']+'menus/restaurant/'+variables['0462cecc-c15b-46c0-8cfd-cb68275d8948']+'/available'","__wwtype":"f"},"method":"GET","headers":[{"key":"X-API-Key","value":{"code":"variables['d0ca9d64-f045-433c-bced-e9c39a8767e5']","__wwtype":"f"}}],"isThroughServer":true,"isWithCredentials":true},"name":"GET MENU","next":"b7bf14f9-5ec4-4b1f-8a24-96d9750ffa98","type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"},"e80d81b4-d9c6-4f45-9072-a45e42cfc3f1":{"id":"e80d81b4-d9c6-4f45-9072-a45e42cfc3f1","name":"Set Restaurant name","next":"dfbc6182-65de-4605-ad93-1d8bfe5bbd52","type":"variable","varId":"2ba9c147-a708-45b5-b619-04c9de9b01e5","internal":false,"varValue":{"code":"context.workflow['d0411b77-c203-4dea-bef4-32db3f28dc09'].result?.['data']?.['data']?.['restaurants']?.[0]?.['name']","__wwtype":"f"}},"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4":{"id":"e9ed1bfb-faf4-4af4-9c25-25e30f82cfa4","type":"execute-workflow:2ac7b05e-c8c2-4e94-a65e-da89b0bc69e1","disabled":true},"f9b75526-7456-4b8d-b63c-fe9dcbc1180c":{"id":"f9b75526-7456-4b8d-b63c-fe9dcbc1180c","name":"Set URL  logo ","next":"e80d81b4-d9c6-4f45-9072-a45e42cfc3f1","type":"variable","varId":"55de5f64-3f1a-4bf8-ba8a-58c4a04ee132","internal":false,"varValue":{"code":"'https://api.perfect-menu.it/'+context.workflow['d0411b77-c203-4dea-bef4-32db3f28dc09'].result?.['data']?.['data']?.['restaurants']?.[0]?.['img']","__wwtype":"f"}}},"trigger":"onload","firstAction":"a75d8ec1-9fcc-45e8-b22f-557edfb5f6d3","triggerConditions":null},{"id":"6fcea8b0-cb56-4e0d-abe4-98932493b4ac","actions":{},"trigger":"onload","triggerConditions":null}],"pages":[{"id":"dea71057-c765-4a1a-a37b-adff5306c3cf","linkId":"dea71057-c765-4a1a-a37b-adff5306c3cf","name":"Menu","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","it"],"cmsDataSetPath":null,"sections":[{"uid":"2e5716b0-34dd-4126-bb3b-d64db0b71dbf","sectionTitle":"Header","linkId":"babf1cf7-e223-41b6-a450-9cb988ebe184"},{"uid":"1d2b1564-ec04-48d7-a565-194ebef845ec","sectionTitle":"Sezione - pre-menu","linkId":"e93f9ccb-cda5-4ca0-9555-93eb13031895"},{"uid":"5d963e84-01af-49c3-80c0-c82976aa380f","sectionTitle":"Loader-Alert tenant NON RISOLTO","linkId":"bafff32d-6f10-4a1c-b47f-73a3eb88ca3d"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4b4a92aa-e3f4-4e71-b229-2707b193b86b","linkId":"4b4a92aa-e3f4-4e71-b229-2707b193b86b","name":"single-menu","folder":null,"paths":{"it":"single-menu/{{menuId|}}/{{menuName|}}","default":"single-menu/{{menuId|}}/{{menuName|}}"},"langs":["en","it"],"cmsDataSetPath":null,"sections":[{"uid":"80f97582-b93e-46f2-b4c2-af86e6be7642","sectionTitle":"Top Nav","linkId":"9fcd5519-de3f-4883-bfac-4305aebc1c27"},{"uid":"3cf7a289-d60c-45b2-831e-0af5a819b7c9","sectionTitle":"Section","linkId":"a4c119c8-6c7e-43a2-8333-06af7573a7a2"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 25;
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
