<template>
  <div id="app">
    <site-menu />

    <transition-page>
      <router-view />
    </transition-page>
  </div>
</template>

<script>
// import MagicScroll from "magic-scroll.js";
import siteMenu from "./components/siteMenu.vue";
import transitionPage from "./components/transitionPage.vue";

export default {
  name: "Memo",

  components: {
    transitionPage,
    siteMenu
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      // new MagicScroll({
      //   speed: 80,
      //   smooth: 14
      // });
    }
  }
};
</script>
<style src="./assets/style/site.css" />
