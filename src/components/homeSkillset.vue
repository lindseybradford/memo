<template>
  <section class="section | grid grid--primary">
    <div class="section__aside | grid-item--aside">
      <h3 class="header-sm">My skillset</h3>
    </div>
    <div class="section__main | grid-item--main">
      <div class="section__main__content | standard-table">
        <div aria-hidden="true" class="standard-table__pinned">
          <tbody>
            <tr v-for="(skill, index) in content.skillset" :key="'pinned-skill' + index">
              <td>{{ skill.name }}</td>
            </tr>
          </tbody>
        </div>
        <table class="standard-table__main table">
          <!-- overflow-fade overflow-fade--x-axis -->
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
                <span
                  v-if="rating == 'empty' || rating == 'filled'"
                  class="ballot-marker"
                  :class="{'ballot-marker--filled' : rating.filled == 'filled'}"
                ></span>
                <span v-else>{{ rating }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
import { store } from "../content/store.js";
export default {
  data() {
    return {
      content: store.content
    };
  }
};
</script>