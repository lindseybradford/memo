<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">Available for freelance</h3>
    </div>
    <div class="section__main | grid-item--main">
      <header class="section__main__header">
        <h2
          class="header-xl"
        >Hi, I’m Courntey a people-first product designer with over 8 years experience</h2>
      </header>
      <article class="section__main__content | grid -edge-to-edge | grid--secondary">
        <div class="article article--pillars | grid-item--main">
          <div class="article__pillar">
            <p>Nulla vehicula volutpat augue, gravida finibus odio sollicitudin at. Fusce lobortis, nunc at accumsan vulputate, nunc magna pellentesque ante, eget iaculis quam diam sit amet diam. Pellentesque ut luctus mi. Sed eget magna lorem.</p>
            <p>Mauris neque metus, maximus quis faucibus at, sollicitudin a quam. Suspendisse dictum blandit mauris, nec sollicitudin sapien.</p>
          </div>
          <div class="article__pillar">
            <p>
              Suspendisse sapien metus, hendrerit vel rutrum sed, fringilla at lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id quam ut magna feugiat hendrerit in sed arcu. Morbi sit amet viverra nibh.
              <strong>Maecenas leo magna,</strong> porta in magna sed, lacinia sollicitudin lacus.
            </p>
            <p>
              <a class="text-lg" :href="'mailto:' + content.primaryEmail">{{ content.primaryEmail }}</a>
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { store } from "../content/store.js"
export default {
  data() {
    return {
      content: store.content
    }
  }
}
</script>