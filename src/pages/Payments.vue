<template>
    <div id="payments">
        <Payment-header :total="total" :currency="currency" />
        <Payment-fees :feeItems="payments" :currency="currency" v-if="!isEditing" />
        <PaymentFeeEdit :feeItems="payments" :currency="currency" v-if="!isEditing" />

    </div>
</template>
  
<script>
import PaymentHeader from '../containers/Payment-header.vue';
import PaymentFees from '../containers/Payment-fee.vue';
import PaymentFeeEdit from '../containers/PaymentFeeEdit.vue';


let currency = 'UF';


// aqui se consultaria el api, para obtener la informacion  de los pagos

const total = 182;
let payments = [{
    name: "Anticipo",
    price: 0,
    date: "2022-06-15",
    percentage: 0,
    isPending: true,

},
{
    name: "Pago 1",
    price: 0,
    date: "2022-07-15",
    percentage: 0,
    isPending: true,
},
{
    name: "Pago 2",
    price: 0,
    date: "2022-08-15",
    percentage: 0,
    isPending: true,
}]


payments.map(item => {
    item.price = (total / payments.length).toFixed(1);

})

payments.map(item => {
    item.percentage = (item.price / total * 100).toFixed(0)

})

const a = new Date(2022, 10, 2).toDateString();
console.log(a)
const isEditing = false


export default {
    name: 'payments',
    data() {
        return {
            payments: payments,
            total: total,
            currency: currency,
            isEditing: isEditing


        }
    },
    components: {
        PaymentHeader,
        PaymentFees,
        PaymentFeeEdit
    }
}
</script>
  
<style>

</style>
  