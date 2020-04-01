<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside | top-rule">
      <figure class="ratio-box" v-get-ratio="{ h: 258, w: 258 }">
        <img :data-src="require('../assets/image/profile_01.png')" class="lazyload | ratio-box__inside" />
      </figure>
    </div>
    <div class="section__main | grid-item--main">
      <article class="section__main__content | grid -edge-to-edge grid--secondary">
        <div class="grid-item--main | article top-rule">
          <p>With backgrounds in film, photography and design, we work directly with our partners to provide a customized experience. We listen, we collaborate, we create. Each project is approached with purpose and curiosity, with the goal of providing optimal business value.</p>
          <p>As a collective, you can hire any one of us individually, or as a team. No matter the project scope, we can leverage our roster of vetted professionals to assemble the ideal team for every project. Are you looking to take your idea, product or brand to the next level? Let’s talk.</p>
          <h3 class="header-lg pt-4">
            <a :href="'mailto:' + content.primaryEmail">{{ content.primaryEmail }}</a>
          </h3>
        </div>
        <div class="grid-item--aside | top-rule">
          <ul class="list--social">
            <li
              v-for="(social, index) in content.socialList"
              :key="'social-item-' + index"
              class="list-item"
            >
              <a class="list-item__link | hover:rotate-icon--d" :href="social.url" target="_blank">
                <span class="list-item__name">{{ social.name }}</span>
                <arrowRight class="list-item__icon" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { store } from "../content/store.js";
import arrowRight from "../icons/keyboard-arrow-right";
export default {
  data() {
    return {
      content: store.content,
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    arrowRight
  }
};
</script>