<template>
  <div class="site-menu | grid grid--primary">
    <div class="site-menu__name | grid-item--aside">
      <a
        href="/"
        @click.prevent="linkTo('home')"
        class="site-menu__name__link"
      >{{ content.fullName }}</a>
    </div>
    <nav class="site-menu__nav | grid-item--main">
      <a href="/" class="site-menu__nav__link">Journal</a>
      <a href="/contact" @click.prevent="linkTo('contact')" class="site-menu__nav__link">Contact</a>
    </nav>
  </div>
</template>

<script>
import { store } from "../content/store.js";
export default {
  data() {
    return {
      content: store.content
    };
  },
  methods: {
    linkTo(state) {
      this.$emit("update-component", state);
    }
  }
};
</script>