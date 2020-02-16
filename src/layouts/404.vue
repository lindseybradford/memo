<template>
    <div>
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