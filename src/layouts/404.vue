<template>
    <div class="memo__404 | will-change--page-transition">
        <h2>-- 404 --</h2>
        <button @click.prevent="back">Go Back</button>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>