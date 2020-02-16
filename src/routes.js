// routes.js

import home from "./layouts/home.vue";
const hire = () => import(/* webpackChunkName: "secondary" */ './layouts/hire.vue')
const error = () => import(/* webpackChunkName: "secondary" */ './layouts/404.vue')

const routes = [
    { path: "/", component: home },
    { path: "/hire", component: hire },
    { path: "/404", component: error }
];

export default routes;
