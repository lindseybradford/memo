<template>
  <div id="app">
    <site-menu />

    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import siteMenu from "./components/siteMenu.vue";

export default {
  name: "Memo",
  components: {
    siteMenu
  },
  methods: {
    afterEnter() {
      // after route enters
    }
  }
};
</script>
<style src="./assets/style/site.css" />

