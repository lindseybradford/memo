<template>
  <div id="app">
    <site-menu @update-component="updateComponent" :currently-viewing="currentComponent" />

    <transition-page :state="currentComponent">
      <Component :is="currentComponent" />
    </transition-page>
  </div>
</template>

<script>
const meta = {
  fullName: "Courtney Bradford",
  primaryDomain: "https://www.courtneybradford.com",
  siteName: "Memo",
  siteDescription: "Descriptive, brief.",
  twitterHandle: "courtney271"
};
export default {
  name: "memo",
  data() {
    return {
      currentComponent: "home"
    };
  },

  metaInfo: {
    link: [{ rel: "canonical", href: meta.primaryDomain }],
    title: meta.siteName,
    titleTemplate: meta.fullName + " ← %s",
    meta: [
      { name: "description", content: meta.siteDescription },
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // OpenGraph data (Most widely used)
      { property: "og:title", content: meta.fullName + " ← " + meta.siteName },
      { property: "og:site_name", content: meta.siteName },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: meta.primaryDomain
      },
      {
        property: "og:image",
        content: "https://www.courtneybradford.com/og-meta-image.jpg"
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: meta.siteDescription },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: meta.primaryDomain
      },
      { name: "twitter:title", content: meta.fullName + " ← " + meta.siteName },
      {
        name: "twitter:description",
        content: meta.siteDescription
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@" + meta.twitterHandle },
      {
        name: "twitter:image:src",
        content: "https://www.courtneybradford.com/twitter-meta-image.jpg"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: meta.fullName + " ← " + meta.siteName },
      { itemprop: "description", content: meta.siteDescription },
      {
        itemprop: "image",
        content: "https://www.courtneybradford.com/seo-meta-image.jpg"
      }
    ]
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
