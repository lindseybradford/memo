<template>
  <div class="home">
    <h2>Home</h2>

    <div class="spacer" v-in-viewport></div>
    <div class="spacer" v-in-viewport></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>


<style>
.spacer {
  height: 1000px;
  background: #131313;
}
</style>