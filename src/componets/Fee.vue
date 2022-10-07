<template>
    <div id="Fee">
        <div class="fee-container">
            <div class="fee-image fee-image--border">

                <add-fee v-show="showAdd()" />


            </div>

            <p class="title-fee">{{props.name}}</p>

            <p class="price-fee"><span>{{props.price}} {{currency}}</span> ({{props.percentage}}%)</p>

            <p class="date-fee"> {{props.date}}</p>


        </div>

    </div>

</template>
  
<script>
import AddFee from './AddFee.vue'
import { UilPen } from '@iconscout/vue-unicons'


export default {
    name: 'Fee',
    data() {
        return {

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
        UilPen
    },
    methods: {
        showAdd() {

            if (this.id >= this.lengthFees - 1) {
                return false
            } else {
                return true
            }
        }
    }

}
</script>
  
<style >
.fee-container {

    display: flex;
    flex-direction: column;
    align-items: center;


}



.fee-image {

    height: 28px;
    width: 28px;


    border-radius: 100%;
    background-color: hsl(214, 0%, 90%);

    z-index: 1;
}

.fee-image--border {
    border: 2px solid var(--first-color);
    background-color: hsl(214, 0%, 90%);
    transition: .1s;
}

.title-fee {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
}

.price-fee,
.date-fee {
    font-size: var(--smaller-font-size);
}

.date-fee {
    font-weight: var(--font-medium);
}

.price-fee span {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}
</style>
  