<template>
    <div id="AddFee">
        <div class="add-fee-container">
            <div class="line"></div>
            <div class="add-fee" v>

                <Uil-Plus class="plus-icon" />

            </div>

        </div>
    </div>
</template>
  
<script>

import { UilPlus } from '@iconscout/vue-unicons'


export default {
    name: 'AddFee',
    data() {
        return {
            precio: 500,
        }
    },

    components: {
        UilPlus,

    }
}
</script>
  
<style >
.add-fee-container {
    position: relative;
    right: -28px;

    width: 100px;
    height: 22px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: var(--border-light);

    z-index: 0;
}

.add-fee-container:hover .add-fee {

    visibility: visible;
    width: 22px;
    height: 22px;
}

.line {
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: var(--border-light);

}

.add-fee {
    visibility: hidden;
    width: 0px;
    height: 0px;
    background-color: var(--border-light);
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2;
    transition: 0.1s;
}

.plus-icon {
    color: var(--first-color);
    font-size: 1.4rem;


}
</style>
  