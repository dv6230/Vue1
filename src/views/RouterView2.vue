<template>
    <div>
        <h3>名稱 : {{ data.name }}</h3>
        <h3>單價 : {{ data.price }}</h3>
        <h3>數量 : {{ data.amount }}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {}
        }
    },
    created() {
        let obj = this.$route.params;
        if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
            alert('空資料')
            this.$router.push({ name: 'home' })
        }
        this.data = this.$route.params;
    },
}
</script>
<style>

</style>