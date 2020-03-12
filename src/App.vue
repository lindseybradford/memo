<template>
  <div id="app">
    <site-menu @update-component="updateComponent" />

    <transition-page :state="currentComponent">
      <Component :is="currentComponent" />
    </transition-page>
  </div>
</template>

<script>
// import contact from "./layouts/contact.vue";
// import home from "./layouts/home.vue";
import MagicScroll from "magic-scroll.js";
// import siteMenu from "./components/siteMenu.vue";
// import transitionPage from "./components/transitionPage.vue";

export default {
  name: "memo",
  data() {
    return {
      currentComponent: "home"
    };
  },
  components: {
    contact: () => import("./layouts/contact"),
    home: () => import("./layouts/home"),
    MagicScroll,
    transitionPage: () => import("./components/transitionPage"),
    siteMenu: () => import("./components/siteMenu")
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    updateComponent(state) {
      history.pushState(null, null, state);
      if (state == "home" || state == "contact") this.currentComponent = state;
    },
    onLoad() {
      if (window.location.pathname == "/contact")
        this.currentComponent = "contact";
      else this.currentComponent = "home";
      new MagicScroll({
        speed: 80,
        smooth: 14
      });
    }
  }
};
</script>
<style src="./assets/style/site.css" />
<style>
.will-change--page-transition {
  will-change: opacity;
}
</style>
