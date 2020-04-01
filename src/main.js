// Imports
import Vue from "vue";
import App from "./App.vue";
import inViewportDirective from "vue-in-viewport-directive";
import Meta from "vue-meta";
import "lazysizes";
import { aspectRatio } from "./directives/aspectRatioDirective";

// Config
Vue.config.productionTip = false;
Vue.use(Meta);

// Directives
Vue.directive("in-viewport", inViewportDirective);
Vue.directive("get-ratio", aspectRatio);

// New
new Vue({
  render: h => h(App)
}).$mount("#app");
