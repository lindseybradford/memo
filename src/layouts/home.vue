<template>
  <div class="memo__home | will-change--page-transition">
    <home-intro v-in-viewport class="section--hero" />
    <home-skillset v-in-viewport />
    <home-process v-in-viewport />
    <home-clients v-in-viewport />
    <home-portfolio v-in-viewport />
  </div>
</template>

<script>
import homeIntro from "../components/homeIntro.vue";
import homeSkillset from "../components/homeSkillset.vue";
import homeProcess from "../components/homeProcess.vue";
import homeClients from "../components/homeClients.vue";
import homePortfolio from "../components/homePortfolio.vue";
export default {
  name: "Home",
  components: {
    homeIntro,
    homeSkillset,
    homeProcess,
    homeClients, 
    homePortfolio
  }
};
</script>

