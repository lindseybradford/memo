<template>
  <div class="site-menu | grid grid--primary">
    <div class="site-menu__name | grid-item--aside">
      <router-link to="home" class="site-menu__name__link">First Last</router-link>
    </div>
    <nav class="site-menu__nav | grid-item--main">
      <a href="#" class="site-menu__nav__link">Journal</a>
      <router-link to="contact" class="site-menu__nav__link">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>