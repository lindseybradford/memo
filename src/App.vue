<template>
  <div id="app">
    <siteMenu />

    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import siteMenu from "./components/site-menu.vue";

export default {
  name: "App",
  components: {
    siteMenu
  }, 
  methods: {
    afterEnter(){
      // after route enters
    }
    
  }
};
</script>
<style src="./assets/style/site.css" />

