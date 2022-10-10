<template>
    <div id="FeeEdit">
        <div class="fee-container" v-show="isPending">
            <div class="fee-image fee-image--border">
                <add-fee v-show="showAdd()" :index="id" />
            </div>
            <input ref="inpTitle" type="text" class="title-fee-input" :value="props.name" />
            <input type="text" class="price-fee-input" v-model="precio" />
            <div class="edit-porcentage-container">

                <a @click="less">
                    <uil-minus class="icon" />
                </a>
                <p ref="percentageText">{{calculatedPercentage}}%</p>
                <a @click="plus">
                    <uil-plus class="icon" />
                </a>

            </div>

            <div class="date-container">
                <p>Vence</p>
                <input type="date" class="date-fee-input" :value="props.date" />
            </div>
        </div>



        <div class="fee-container" v-show="!isPending">
            <div class="fee-image fee-image--border fee-image--pagado ">

                <UilAward class="fee-image-icon" />
                <add-fee v-show="showAdd()" :index="id" />


            </div>

            <p class="title-fee">{{props.name}}</p>

            <p class="price-fee"><span>{{props.price}} {{currency}}</span> ({{props.percentage}}%)</p>

            <p class="date-fee date-fee--pagado">Pagado {{props.date}}</p>


        </div>

    </div>

</template>
  
<script>
import AddFee from './AddFee.vue'
import { UilPlus, UilMinus, UilAward } from '@iconscout/vue-unicons'

import feesData from "../utility/feesData"

let { calculatePrice, total } = feesData();




export default {
    name: 'FeeEdit',
    data() {
        return {
            calculatePrice: calculatePrice,
            percentage: this.props.percentage,
            precio: this.props.price,
            total: total,
            isPending: this.props.isPending

        }
    },
    props: [

        "props",
        "currency",
        "id",
        "lengthFees"

    ],
    components: {
        AddFee,
        UilPlus,
        UilMinus,
        UilAward,

    },
    methods: {
        showAdd() {

            if (this.id >= this.lengthFees - 1) {
                return false
            } else {
                return true
            }
        },

        //aumenta el procentaje
        plus() {

            if ((Number(this.precio) < this.total)) {
                const cantPercentagePlus = 0.01;

                this.precio = Number((Number(this.precio) + (this.total * cantPercentagePlus)).toFixed(1));
            }

        },

        less() {
            const cantPercentagePlus = 0.01;

            this.precio = Number((Number(this.precio) - (this.total * cantPercentagePlus)).toFixed(1));

        }




    },
    computed: {
        calculatedPercentage: function () {
            return ((this.precio / this.total) * 100).toFixed(0)
        }
    }

}
</script>
  
<style >
.fee-container {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;


}



.fee-image {

    height: 28px;
    width: 28px;

    display: flex;


    border-radius: 100%;
    background-color: hsl(214, 0%, 90%);
    margin-bottom: 4px;

    z-index: 2;
}

.fee-image-icon {
    color: #53b697;
    font-size: 2rem;
    margin: 2px;
}

.fee-image--border {
    border: 2px solid var(--first-color);
    background-color: hsl(214, 0%, 90%);

}

.fee-image--pagado {
    border: 2px solid #53b697;
    background-color: hsl(214, 0%, 90%);

}

.edit-porcentage-container {
    width: 100%;
    height: 17px;

    margin: 4px 0;

    display: flex;
    align-items: center;
    gap: 8px;
}



.edit-porcentage-container .icon {

    margin: auto;

    background-color: hsl(214, 41%, 93%);
    border-radius: 100%;
    border: 1px solid var(--first-color);
    color: var(--first-color);
    font-size: var(--small-font-size);
}

.edit-porcentage-container p {
    font-size: var(--smaller-font-size);
}

.date-container {
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 4px;
}

.date-container p {
    font-size: 1rem;
    height: 12px;
    color: var();
}

.title-fee-input {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);

}

.title-fee-input,
.price-fee-input {
    font-size: var(--smaller-font-size);
    outline: none;
    width: 100%;
    margin: 2px 0;
}

.date-fee-input {
    font-size: var(--smaller-font-size);
    outline: none;
    width: 100%;
}

.date-fee-input {

    border: none;
}

.date-fee--pagado {
    color: #53b697;
}

.price-fee-input span {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}
</style>
  