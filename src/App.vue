<template>
  <div id="app">
    <site-menu />

    <transition :name="transitionName" :mode="transitionMode" v-on:after-enter="afterEnter" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
// import MagicScroll from "magic-scroll.js";
import siteMenu from "./components/siteMenu.vue";

const default_transition = "fade";
const default_transition_mode = "out-in";

export default {
  name: "Memo",
  data() {
    return {
      prevHeight: 0,
      transitionName: default_transition,
      transitionMode: default_transition_mode
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let fromName = from.meta.transitionName;
      let toName = to.meta.transitionName;

      // Default transition
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        default_transition;

      // Modal Transition
      if (toName == "modal") {
        transitionName = "enter-modal-exit-fade";
        // this.transitionMode = "out-in";
      }
      if (fromName == "modal") {
        transitionName = "exit-modal-enter-fade";
        // this.transitionMode = "out-in";
      }

      this.transitionName = transitionName;

      console.log(1, "from:", fromName, "| transition:", this.transitionName, "| mode:", this.transitionMode, from);
      // console.log(2, "to:", toName, to);
    

      next();
    });
  },
  components: {
    // transitionPage,
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
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>
<style src="./assets/style/site.css" />
