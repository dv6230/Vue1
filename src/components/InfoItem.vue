<template>
    <div class="row p-2 border-bottom border-dark d-flex align-items-center">
        <div class="col-3">{{ name }}</div>
        <div class="col-3">{{ price }}</div>
        <div class="col-3">{{ producAmount }}</div>
        <div class="col-3">
            <button class="btn btn-primary mx-2" v-on:click="CountClick(1)">增加</button>
            <button class="btn btn-primary " v-on:click="CountClick(-1)">減少</button>
            <button class="m-1 btn btn-info" @click="$router.push({ path: `/router1/${index}` })">Query</button>
            <button class="m-1 btn btn-info" @click="ParamLink()">Param</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'infoItem',
    props: {
        name: String,
        price: Number,
        amount: Number,
        index: Number,
        product: Object
    },
    data() {
        return {
            producAmount: 0,
        }
    },
    created() {
        if (this.amount) {
            this.producAmount = this.amount
        }
    },
    watch: {
        amount: function () {
            this.producAmount = this.amount
        }
    },
    methods: {
        CountClick(val) {
            this.$emit('updated-value', val)
        },
        ParamLink() {
            this.$router.push({
                name: 'router2',
                params: this.product
            })
        }
    }
}
</script>
<style lang="">
    
</style>