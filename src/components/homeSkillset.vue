<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">My skillset</h3>
    </div>
    <div class="section__main | grid-item--main | lg:overflow-content-r">
      <div class="section__main__content | standard-table" :class="{'-hide-scroll-prompt': hideScrollPrompt}">
        <div aria-hidden="true" class="standard-table__pinned">
          <table>
            <thead>
              <tr v-for="(skill, index) in content.skillset" :key="'pinned-skill' + index">
                <td>{{ skill.name }}</td>
              </tr>
            </thead>
          </table>
        </div>
        <div class="standard-table__main">
          <table class="table" @click="onTableScroll">
            <thead>
              <tr>
                <td></td>
                <th scope="col" colspan>Nope</th>
                <th scope="col" colspan>So-So</th>
                <th scope="col" colspan>Decent</th>
                <th scope="col" colspan>Good</th>
                <th scope="col" colspan>Hell Yeah</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(skill, index) in content.skillset" :key="'skill-' + index">
                <th scope="row">{{ skill.name }}</th>
                <td v-for="(rating, index) in skill.ratings" :key="'rating-' + index">
                  <span v-if="rating == 'empty' || rating == 'filled'" class="ballot-marker">
                    <span v-if="rating == 'filled'" class="ballot-marker__scratch"></span>
                  </span>
                  <span v-else class="table-meta">{{ rating }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { store } from "../content/store.js";
export default {
  data() {
    return {
      content: store.content,
      hideScrollPrompt: false
    };
  },
  methods: {
    onTableScroll() {
      // Change this to an actual scroll/drag motion event !important! 
      this.hideScrollPrompt = true
    }
  }
};
</script>