<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">Portfolio</h3>
    </div>
    <div class="section__main | grid-item--main">
      <div class="section__main__content">
        <div class="grid -edge-to-edge grid--card">
          <div class="portfolio-card | grid-item">
            <figure class="ratio-box lazy--standard-effect" v-get-ratio="{ h: 580, w: 870 }">
              <img src="../assets/image/figure_01.jpg" class="ratio-box__inside" />
            </figure>
            <figcaption>Chapter, Design System & UI/UX</figcaption>
          </div>
          <div class="portfolio-card | grid-item">
            <figure class="ratio-box lazy--standard-effect" v-get-ratio="{ h: 580, w: 870 }">
              <img src="../assets/image/figure_02.jpg" class="ratio-box__inside" />
            </figure>
            <figcaption>Chapter, Design System & UI/UX</figcaption>
          </div>
          <div class="portfolio-card | grid-item">
            <figure class="ratio-box lazy--standard-effect" v-get-ratio="{ h: 580, w: 870 }">
              <img src="../assets/image/figure_03.jpg" class="ratio-box__inside" />
            </figure>
            <figcaption>Chapter, Design System & UI/UX</figcaption>
          </div>
          <div class="portfolio-card | grid-item">
            <figure class="ratio-box lazy--standard-effect" v-get-ratio="{ h: 580, w: 870 }"></figure>
            <figcaption>Last, Design System & UI/UX</figcaption>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
