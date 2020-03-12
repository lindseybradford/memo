// Import
import Vue from "vue";
import App from "./App.vue";

import inViewportDirective from "vue-in-viewport-directive";
import { aspectRatio } from "./directives/aspectRatioDirective";

// Config
Vue.config.productionTip = false;

// Directives
Vue.directive("in-viewport", inViewportDirective);
Vue.directive("get-ratio", aspectRatio);

// New
new Vue({
  render: h => h(App)
}).$mount("#app");
