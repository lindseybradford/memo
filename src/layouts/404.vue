<template>
  <section class="section section--hero | grid grid--primary">
    <div class="section__main | grid-item--main">
      <article class="section__main__content">
        <div class="article">
            <p>You've found an exception to the rules.</p>
            <p><button @click.prevent="back">Go back</button></p>
        </div>
      </article>
    </div>
  </section>
</template>
<script>    
export default {
  methods: {
    back() {
        console.log("state from error: ", history.state)
    }
  }
};
</script>