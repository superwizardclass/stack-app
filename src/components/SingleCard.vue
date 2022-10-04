<template>
    <div class="card">
        <div class="position-wrapper">
            <h1>{{position}}</h1>
        </div>
        <h2>{{computedValue}} of {{suit}}</h2>
    </div>
</template>

<script>
    export default {
        props: ['position', 'value', 'suit'],
        computed: {
            computedValue() {
                switch(this.value) {
                    case 1:
                        return 'Ace';
                    case 11:
                        return 'Jack';
                    case 12:
                        return 'Queen';
                    case 13:
                        return 'King'
                    default:
                        return this.value;
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        width: 70%;
        height: 75px;
        background: rgb(255, 179, 223);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .card .position-wrapper {
        background-color: white;
        width: 60px;
    }
</style>