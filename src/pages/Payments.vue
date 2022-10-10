<template>
    <div id="payments">
        <Payment-header @changeIsEditing="changeStateEditing" :total="total" :currency="currency"
            :isEditing="isEditing" />
        <Payment-fees :feeItems="payments" v-if="!isEditing" />
        <PaymentFeeEdit :feeItems=" payments" :currency="currency" v-if="isEditing" />

    </div>
</template>
  
<script>
import PaymentHeader from '../containers/Payment-header.vue';
import PaymentFees from '../containers/Payment-fee.vue';
import PaymentFeeEdit from '../containers/PaymentFeeEdit.vue';


let currency = 'UF';


// aqui se consultaria el api, para obtener la informacion  de los pagos
import feesData from "../utility/feesData"

const { fees, total, createFee } = feesData();



const edit = false


export default {
    name: 'payments',
    data() {
        return {
            payments: fees,
            total: total,
            currency: currency,
            isEditing: edit,



        }
    },
    components: {
        PaymentHeader,
        PaymentFees,
        PaymentFeeEdit
    },
    provide() {
        return {
            currency: this.currency,
            createFee: createFee,
        }
    },
    methods: {
        changeStateEditing(value) {
            this.isEditing = value
        }
    }
}
</script>
  
<style>

</style>
  