<template>
  <TheHeader id="TheHeader"></TheHeader>
  <TheMain id="TheMain"></TheMain>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  },
  data() {
    return {
      mnemonicaStack: [
        {position: 1, value: 4, suit: 'club'}, 
        {position: 2, value: 2, suit: 'heart'}, 
        {position: 3, value: 7, suit: 'diamond'}, 
        {position: 4, value: 3, suit: 'club'}, 
        {position: 5, value: 4, suit: 'heart'},
        {position: 6, value: 6, suit: 'diamond'},
        {position: 7, value: 1, suit: 'spade'},
        {position: 8, value: 5, suit: 'heart'},
        {position: 9, value: 9, suit: 'spade'},
        {position: 10, value: 2, suit: 'spade'},
        {position: 11, value: 12, suit: 'heart'},
        {position: 12, value: 3, suit: 'diamond'},
        {position: 13, value: 12, suit: 'club'},
        {position: 14, value: 8, suit: 'heart'},
        {position: 15, value: 6, suit: 'spade'},
        {position: 16, value: 5, suit: 'spade'},
        {position: 17, value: 9, suit: 'heart'},
        {position: 18, value: 13, suit: 'club'},
        {position: 19, value: 2, suit: 'diamond'},
        {position: 20, value: 11, suit: 'heart'},
        {position: 21, value: 3, suit: 'spade'},
        {position: 22, value: 8, suit: 'spade'},
        {position: 23, value: 6, suit: 'heart'},
        {position: 24, value: 10, suit: 'club'},
        {position: 25, value: 5, suit: 'diamond'},
        {position: 26, value: 13, suit: 'diamond'},
        {position: 27, value: 2, suit: 'club'},
        {position: 28, value: 3, suit: 'heart'},
        {position: 29, value: 8, suit: 'diamond'},
        {position: 30, value: 5, suit: 'club'},
        {position: 31, value: 13, suit: 'spade'},
        {position: 32, value: 11, suit: 'diamond'},
        {position: 33, value: 8, suit: 'club'},
        {position: 34, value: 10, suit: 'spade'},
        {position: 35, value: 13, suit: 'heart'},
        {position: 36, value: 11, suit: 'club'},
        {position: 37, value: 7, suit: 'spade'},        
        {position: 38, value: 10, suit: 'heart'},
        {position: 39, value: 1, suit: 'diamond'},
        {position: 40, value: 4, suit: 'spade'},
        {position: 41, value: 7, suit: 'heart'},
        {position: 42, value: 4, suit: 'diamond'},
        {position: 43, value: 1, suit: 'club'},
        {position: 44, value: 9, suit: 'club'},
        {position: 45, value: 11, suit: 'spade'},
        {position: 46, value: 12, suit: 'diamond'},
        {position: 47, value: 7, suit: 'club'},
        {position: 48, value: 12, suit: 'spade'},
        {position: 49, value: 10, suit: 'diamond'},
        {position: 50, value: 6, suit: 'club'},
        {position: 51, value: 1, suit: 'heart'},
        {position: 52, value: 9, suit: 'diamond'},

      ]
    }
  },
  provide() {
    return {
      mnemonicaStack: this.mnemonicaStack
    }
  }
}
</script>

<style>
/** Universal Rules */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Roboto', 'sans-serif';
  
}

body {
  margin: 0;
}

#app {
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "header"
    "main";
}

#TheHeader {
  grid-area: header;
}

#TheMain {
  grid-area: main;
}
</style>
