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
      <a v-if="currentlyViewing !== 'contact'" href="/" class="site-menu__nav__link">Journal</a>
      <a v-if="currentlyViewing !== 'contact'" href="/contact" @click.prevent="linkTo('contact')" class="site-menu__nav__link">Contact</a>
      <a v-if="currentlyViewing == 'contact'" href="/" @click.prevent="linkTo('home')" class="site-menu__nav__link">Close</a>
    </nav>
  </div>
</template>

<script>
import { store } from "../content/store.js";
export default {
  props: {
    currentlyViewing: {
      required: true,
      type: String
    }
  },
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