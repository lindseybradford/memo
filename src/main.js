// main.js
// Import
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import inViewportDirective from "vue-in-viewport-directive";
import { aspectRatio } from "./directives/aspectRatioDirective";

// Config
Vue.config.productionTip = false;

// Router
Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

// Router -- Meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

// Directives
Vue.directive("in-viewport", inViewportDirective);
Vue.directive("get-ratio", aspectRatio);

// New
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
