<template>
  <div class="memo__contact | will-change--page-transition">
    <contactIntro />
  </div>
</template>
<script>
import contactIntro from "../components/contactIntro";
export default {
  name: "Contact",
  metaInfo: {
    title: "Contact"
  },
  components: {
    contactIntro
  }
};
</script>