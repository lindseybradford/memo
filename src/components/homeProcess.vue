<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">My Process</h3>
    </div>
    <div class="section__main | grid-item--main">
      <div class="section__main__content | grid -edge-to-edge grid--secondary">
        <article class="article | grid-item --main">
          <p>With backgrounds in film, photography and design, we work directly with our partners to provide a customized experience. We listen, we collaborate, we create. Each project is approached with purpose and curiosity, with the goal of providing optimal business value.</p>
          <p>As a collective, you can hire any one of us individually, or as a team. No matter the project scope, we can leverage our roster of vetted professionals to assemble the ideal team for every project. Are you looking to take your idea, product or brand to the next level? Let’s talk.</p>
        </article>
        <div class="grid-item--aside">
          <div class="illustration">
            <figure class="ratio-box" v-get-ratio="{ h: 156, w: 171 }">
              <img
                :data-src="require('../assets/image/illustration_01.png')"
                class="lazyload | ratio-box__inside"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>