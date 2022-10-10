import { ref } from 'vue'




const feesData = () => {
    const total = 182;
    //obtiene los datos api rest
    let fees = [{
        name: "Anticipo",
        price: 0,
        date: "2022-06-15",
        percentage: 0,
        isPending: false,

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
    },]

    fees.map(item => {
        item.price = Number((total / fees.length).toFixed(1));

    })

    const calculatePorcentge = () => {
        fees.map(item => {
            item.percentage = Number((item.price / total * 100).toFixed(0))

        })

    }
    calculatePorcentge();



    const createFee = (i) => {

        const index = ref(i)
        const newFee = {
            name: "Nuevo pago",
            price: 0,
            date: null,
            percentage: 0,
            isPending: true,
        }

        fees.splice(index.value, 0, newFee)

        if (index.value - 1 < fees.length) {

            if (fees[index.value - 1].isPending) {
                fees[index.value].price = fees[index.value - 1].price / 2
                fees[index.value - 1].price = fees[index.value - 1].price / 2
            } else {
                fees[index.value].price = fees[index.value + 1].price / 2
                fees[index.value + 1].price = fees[index.value + 1].price / 2

            }

            console.log(index.value)
        }


        calculatePorcentge();


    }


    return {
        fees,
        total,
        createFee,

    }
}



export default feesData;