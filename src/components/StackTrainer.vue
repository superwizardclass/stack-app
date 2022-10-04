<template>
    <div>
        <p>{{copiedMnemonicaStack}}</p>
    <button @click="selectBatch">SELECT BATCH</button>
    </div>
    
</template>

<script>
    export default {
        inject: [
            'mnemonicaStack'
        ],
        data(){
            return {
                copiedMnemonicaStack: this.mnemonicaStack
            }
        },
        methods: {
            selectBatch() {
            const selection = Math.floor(Math.random() * (this.copiedMnemonicaStack.length - 1));
            const stackWithoutSelection = this.copiedMnemonicaStack.map(item => item);
            stackWithoutSelection[selection] = 'selected';
            const flag = Math.random() < 0.5;
            const batch = [];
      
            let selectRandomIndexForBatch = () => {
                return Math.floor(Math.random() * (stackWithoutSelection.length - 1));
            }

            for (let i = 0; i <= 3; i++) {
                let randomSelection = 0;
                do {
                    randomSelection = selectRandomIndexForBatch();
                } while(randomSelection === selection)
                
                batch.push(randomSelection);
                }

            if (flag === true) {
            batch[0] = selection;
            }
      
            const payload = {selection: selection, batch: batch};
            console.log(payload);
            return payload
            }   
  }
    }
</script>

<style scoped>
    div {
        width: 90%;
        margin: auto;
    }
</style>