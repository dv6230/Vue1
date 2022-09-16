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
            @updated-value="updateValue()">
        </Info-Item>
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
                { name: "水梨", price: 60 },
                { name: "蘋果", price: 35 },
                { name: "芭樂", price: 20 }
            ]
        }
    },
    function: {
        updateValue(val) {
            this.$set(this.lists, index, val)
        }
    }
}
</script>
