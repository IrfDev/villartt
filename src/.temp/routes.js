export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/irff/Desktop/paralanube/OneDrive/kode-mia/Portafolio/vue/villartt/villartt-frontend/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/irff/Desktop/paralanube/OneDrive/kode-mia/Portafolio/vue/villartt/villartt-frontend/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/irff/Desktop/paralanube/OneDrive/kode-mia/Portafolio/vue/villartt/villartt-frontend/node_modules/gridsome/app/pages/404.vue")
  }
]

