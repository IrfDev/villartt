export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/irving/Library/Mobile Documents/com~apple~CloudDocs/Desktop/paralanube/onedrive/kode-mia/Portafolio/vue/villartt/villartt/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/irving/Library/Mobile Documents/com~apple~CloudDocs/Desktop/paralanube/onedrive/kode-mia/Portafolio/vue/villartt/villartt/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/irving/Library/Mobile Documents/com~apple~CloudDocs/Desktop/paralanube/onedrive/kode-mia/Portafolio/vue/villartt/villartt/node_modules/gridsome/app/pages/404.vue")
  }
]

