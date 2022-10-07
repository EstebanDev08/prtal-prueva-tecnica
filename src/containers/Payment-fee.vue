<template>
    <div id="payment-fees">
        <div class="fees-container">
            <Fee v-for="(item,i) in feeItems" :key="i" :id="i" :props="item" :currency="currency"
                :lengthFees="feeItems.length" />
        </div>

    </div>
</template>
  
<script>

import Fee from '../componets/Fee.vue'
import AddFee from '../componets/AddFee.vue'



export default {
    name: 'payment-fees',
    data() {
        return {
            showAdd: true,
        }
    },

    components: {
        Fee,
        AddFee,

    },
    props: [
        "feeItems",
        "currency"
    ]


}
</script>
  
<style >
.fees-container {
    margin-top: 12px;
    padding: 16px;

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;


    height: 140px;

    display: flex;

    gap: 58px;
}
</style>
  