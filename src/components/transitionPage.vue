<template>
  <transition :name="transitionName" :mode="transitionMode" v-on:after-enter="afterEnter" appear>
    <slot></slot>
  </transition>
</template>

<script>
const default_transition = "fade";
const default_transition_mode = "out-in";

export default {
  name: "transition-page",
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

      //   console.log(
      //     1,
      //     "from:",
      //     fromName,
      //     "| transition:",
      //     this.transitionName,
      //     "| mode:",
      //     this.transitionMode,
      //     from
      //   );

      next();
    });
  },
  methods: {
    // beforeLeave(element) {
    //   this.prevHeight = getComputedStyle(element).height;
    // },
    // enter(element) {
    //   const { height } = getComputedStyle(element);

    //   element.style.height = this.prevHeight;

    //   setTimeout(() => {
    //     element.style.height = height;
    //   });
    // },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>