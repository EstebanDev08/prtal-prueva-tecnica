<template>
    <div id="payments">
        <Payment-header :total="total" :currency="currency" />
        <Payment-fees :feeItems="payments" :currency="currency" />
    </div>
</template>
  
<script>
import PaymentHeader from '../containers/Payment-header.vue';
import PaymentFees from '../containers/Payment-fee.vue';

const total = 182;
let currency = 'UF';



let payments = [{
    name: "Anticipo",
    price: 0,
    date: "22 ene, 2022",
    percentage: 0,

},
{
    name: "Anticipo",
    price: 0,
    date: "22 ene, 2022",
    percentage: 0,
},
{
    name: "Anticipo",
    price: 0,
    date: "22 ene, 2022",
    percentage: 0,
}]


payments.map(item => {
    item.price = (total / payments.length).toFixed(1);

})

payments.map(item => {
    item.percentage = (item.price / total * 100).toFixed(0)

})




export default {
    name: 'payments',
    data() {
        return {
            payments: payments,
            total: total,
            currency: currency,

        }
    },
    components: {
        PaymentHeader,
        PaymentFees
    }
}
</script>
  
<style>

</style>
  