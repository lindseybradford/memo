<template>
  <div id="app">
    <site-menu @update-component="updateComponent" />

    <transition-page :state="currentComponent">
      <Component :is="currentComponent" />
    </transition-page>
  </div>
</template>

<script>
export default {
  name: "memo",
  metaInfo: {
    link: [{ rel: "canonical", href: "https://www.courtneybradford.com" }],
    title: "Memo",
    titleTemplate: "Courtney Bradford ← %s",
    meta: [
      { name: "description", content: "Memo description." },
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Courtney Bradford ← Memo" },
      { property: "og:site_name", content: "Memo" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.courtneybradford.com"
      },
      {
        property: "og:image",
        content: "https://www.courtneybradford.com/meta-image.jpg"
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: "I have things here on Memo." },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.courtneybradford.com"
      },
      { name: "twitter:title", content: "Courtney Bradford ← Memo" },
      {
        name: "twitter:description",
        content: "I have things here on Memo."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@courtney271" },
      {
        name: "twitter:image:src",
        content: "https://www.courtneybradford.com/meta-image.jpg"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Courtney Bradford ← Memo" },
      { itemprop: "description", content: "I have things here on Memo." },
      {
        itemprop: "image",
        content: "https://www.courtneybradford.com/meta-image.jpg"
      }
    ]
  },
  data() {
    return {
      currentComponent: "home"
    };
  },
  components: {
    contact: () => import("./layouts/contact"),
    home: () => import("./layouts/home"),
    // MagicScroll,
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
      // new MagicScroll({
      //   speed: 80,
      //   smooth: 14
      // });
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
