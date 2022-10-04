<template>
    <div class="stack-review-container">
        <SingleCard v-for="(card, index) in mnemonicaStack" v-bind:key="index" :position="card.position" :value="card.value" :suit="card.suit">
        </SingleCard>
    </div>
</template>

<script>
    import SingleCard from './SingleCard.vue';
    export default {
        components: {SingleCard},
        inject: ['mnemonicaStack'],
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .stack-review-container {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        row-gap: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>