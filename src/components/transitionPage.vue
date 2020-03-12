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
  props: {
    state: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      prevHeight: 0,
      transitionName: default_transition,
      transitionMode: default_transition_mode
    };
  },
  methods: {
    afterEnter(element) {
      element.style.height = "auto";

      // Default Transition
      let transitionName = default_transition;

      // Modal Transition
      if (this.state == "home") {
        transitionName = "enter-modal-exit-fade";
      }
      if (this.state == "contact") {
        transitionName = "exit-modal-enter-fade";
      }

      // Set
      this.transitionName = transitionName;
      
      // Log
      // console.log(
      //   "state: ",
      //   this.state,
      //   " | transition:",
      //   this.transitionName,
      //   " | mode:",
      //   this.transitionMode
      // );
    }
  }
};
</script>