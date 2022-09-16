<template lang="">
    <div id="info">
        <h3 class="mb-3">Vuex 測試</h3>
        <div class="d-flex justify-content-center">
            <div class="col-md-5">
            <p>輸入參數 : {{ store1 }}</p>
            <input type="text" class="form-control mb-3" v-model="store1" >
            <button class="btn btn-primary">送出</button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InfoView',
    created() {

    },
    data() {
        return {
            store1: ''
        }
    },
    methods: {

    },
}
</script>
<style lang="">
    
</style>