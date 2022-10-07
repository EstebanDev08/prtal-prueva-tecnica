<template>
    <div id="FeeEdit">
        <div class="fee-edit-container">
            <div class="fee-image fee-image--border">

                <add-fee v-show="showAdd()" />


            </div>

            <input type="text" class="title-fee-input" :value="props.name" />

            <input type="text" class="price-fee-input" :value="props.price" />

            <input type="date" class="date-fee-input" :value="props.date" />


        </div>

    </div>

</template>
  
<script>
import AddFee from './AddFee.vue'
import { UilPen } from '@iconscout/vue-unicons'


export default {
    name: 'FeeEdit',
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
.fee-edit-container {
    width: 74px;
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

.title-fee-input {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);

}

.title-fee-input,
.price-fee-input,
.date-fee-input {
    font-size: var(--smaller-font-size);
    outline: none;
    width: 100%;
    margin: 2px 0;
}

.date-fee-input {

    border: none;
}

.price-fee-input span {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}
</style>
  