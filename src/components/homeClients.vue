<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">Select clients*</h3>
    </div>
    <div class="section__main | top-rule | grid-item--main">
      <article class="section__main__content | grid -edge-to-edge | grid--secondary">
        <div class="article article--pillars | grid-item--main">
          <div class="article__pillar">
            <ul>
              <li v-for="(client, index) in content.clientLists.list_1" :key="'client-list-1-' + index">{{ client.name }} <span class="location">{{ client.location }}</span></li>
            </ul>
          </div>
          <div class="article__pillar">
            <ul>
              <li v-for="(client, index) in content.clientLists.list_2" :key="'client-list-1-' + index">{{ client.name }} <span class="location">{{ client.location }}</span></li>
            </ul>
          </div>
        </div>
        <div class="article | grid-item--aside | leading-snug">
          <p>*<span class="note | ml-1">{{ content.clientLists.note }}</span></p>
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