// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import gsap from "gsap";

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(gsap)
    Vue.component('Layout', DefaultLayout)
}