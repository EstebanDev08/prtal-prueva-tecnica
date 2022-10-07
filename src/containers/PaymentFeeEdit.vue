<template>
    <div id="paymentFeeEdit">
        <div class="fees-container">
            <Fee-edit v-for="(item,i) in feeItems" :key="i" :id="i" :props="item" :currency="currency"
                :lengthFees="feeItems.length" />
        </div>

    </div>
</template>
  
<script>

import Fee from '../componets/Fee.vue'
import AddFee from '../componets/AddFee.vue'
import FeeEdit from '../componets/FeeEdit.vue';



export default {
    name: 'paymentFeeEdit',
    data() {
        return {
            showAdd: true,
        }
    },

    components: {
        Fee,
        AddFee,
        FeeEdit
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
  