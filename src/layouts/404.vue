<template>
  <section class="section section--hero | grid grid--primary">
    <div class="section__main | grid-item--main">
      <article class="section__main__content">
        <div class="article">
          <p>You've found an exception to the rules.</p>
          <p>
            <a href="/home" @click.prevent="linkTo('home')">Go back</a>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    linkTo(state) {
      this.$emit("update-component", state);
    }
  }
};
</script>