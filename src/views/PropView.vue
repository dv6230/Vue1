<template>
    <div class="container">
        <div class="row">
            <div class="col-3 p-2">名稱</div>
            <div class="col-3 p-2">單價</div>
            <div class="col-3 p-2">數量</div>
            <div class="col-3 p-2">選項</div>
        </div>
        <div class="w-100 h-0 border-dark border-bottom"></div>
        <Info-Item v-for="(item,index) in lists" :key="index" v-bind:name="item.name" v-bind:price="item.price"
            v-bind:amount="item.amount" @updated-value="update($event,index)">
        </Info-Item>
        <div class="row d-flex justify-content-start">
            <h2>價格總和 {{ CountTotal() }}</h2>
        </div>
    </div>
</template>
<script>

import InfoItem from '../components/InfoItem.vue'

export default {
    name: 'PropView',
    components: {
        InfoItem
    },
    data() {
        return {
            lists: [
                { name: "水梨", price: 60, amount: 0 },
                { name: "蘋果", price: 35, amount: 0 },
                { name: "芭樂", price: 20, amount: 0 }
            ]
        }
    },
    methods: {
        update(emt, index) {
            let result = this.lists[index].amount + emt
            if (result < 0) {
                return;
            }
            this.lists[index].amount = result
        },
        CountTotal() {
            let sum = 0;
            this.lists.forEach(function (val) { sum += (val.amount * val.price) })
            return sum;
        }
    }
}
</script>
