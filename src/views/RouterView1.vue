<template>
    <div>
        Param : {{ index }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            index: 0,
        }
    },
    created() {
        this.index = this.$route.params.productId
    },
}
</script>
<style>

</style>