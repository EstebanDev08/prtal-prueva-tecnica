<template>
    <div id="payment-header">
        <div class="header-content">
            <div class="title-header">
                <p>Pago</p>
                <Uil-AngleDown />
            </div>
            <div class="info-container">
                <div class="edit-header">
                    <p>Editar</p>
                    <Uil-Pen />
                </div>
                <div class="info-header">
                    <p>Por cobrar</p>
                    <p class="total-info">{{total}} {{currency}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { UilAngleDown } from '@iconscout/vue-unicons'
import { UilPen } from '@iconscout/vue-unicons'

const total = 182;
let currency = "UF"

export default {
    name: 'payment-header',
    data() {
        return {


        }
    },
    components: {
        UilAngleDown,
        UilPen
    },
    props: [
        "total",
        "currency"
    ]
}
</script>
  
<style scoped>
.header-content {
    height: 40px;
    padding: 0 8px;

    border-bottom: 1px solid var(--border-light);
}

.header-content,
.info-container,
.title-header,
.edit-header,
.info-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.title-header,
.edit-header {
    color: var(--first-color);
}

.title-header p {
    margin-right: 2px;
    font-weight: bold;
}

.edit-header {
    margin-right: 16px;
}

.edit-header p {
    margin-right: 2px;
    font-weight: bold;
    font-size: var(--smaller-font-size);
}

.info-header p:nth-child(1) {
    margin-right: 8px;

    color: var(--text-color-light);
    font-size: var(--small-font-size);
}

.total-info {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}
</style>
  