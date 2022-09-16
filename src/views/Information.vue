<template>
    <div id="info" class="container">
        <h3 class="mb-3">Vuex 測試</h3>
        <div class="">
            <p>Vuex1 儲存參數 : {{ vuex1 }}</p>
        </div>
        <div class="d-flex flex-row">
            <div class="col-4 p-3 d-flex align-items-center justify-content-end">
                <label class="form-label m-0">Vuex1 參數</label>
            </div>
            <div class="col-4 p-3">
                <input type="text" class="form-control" v-model="data1">
            </div>
            <div class="col-4 p-3 d-flex justify-content-start">
                <button class="btn btn-primary" @click="click()">送出</button>
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
            vuex1: this.$store.state.value1,
            vuex2: this.$store.state.value2,
            data1: '',
            data2: ''
        }
    },
    methods: {
        click() {
            if (this.data1.length <= 0) {
                return;
            }
            this.$store.dispatch("updateValue1", parseInt(this.data1))
            this.vuex1 = this.$store.state.value1
            this.data1 = ''
        },
        updateValue() {

        }
    },
    watch: {
        data1: function () {
            this.data1 = this.data1.replace(/[^\d]/g, '');
        }
    }
}
</script>
<style lang="">
    
</style>