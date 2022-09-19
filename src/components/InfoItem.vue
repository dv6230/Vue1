<template>
    <div class="row p-2 border-bottom border-dark d-flex align-items-center">
        <div class="col-3">{{ name }}</div>
        <div class="col-3">{{ price }}</div>
        <div class="col-3">{{ producAmount }}</div>
        <div class="col-3">
            <button class="btn btn-primary mx-2" v-on:click="CountClick(1)">增加</button>
            <button class="btn btn-primary " v-on:click="CountClick(-1)">減少</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'infoItem',
    props: {
        name: String,
        price: Number,
        amount: Number
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
        }
    }
}
</script>
<style lang="">
    
</style>