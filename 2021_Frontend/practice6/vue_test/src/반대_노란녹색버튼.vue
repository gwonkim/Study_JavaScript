<template>
<div id="app">
    <div :style="{ background : yellow }">
    <h1>페이지3 반대_노란녹색버튼</h1>

      <Child1 @color="colorP" />
  </div>
  </div>
</template>

<script>
import Child1 from './Child2_2.vue';

export default {
  components: { Child1 },
  name: 'Page1',
  data: function() {
    return { 
    yellow: '',
  };
  },
    methods: {
       colorP(c) {
          this.yellow = c;
       }
}
}
</script>

<style>
    div#app { padding: 30px; margin: 30px auto; max-width: 500px; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  font-size: 11pt; }
    div#app div { margin-bottom: 20px; }
    input { padding: 6px; margin: 10px; }
    span { display: inline-block; margin: 5px; padding: 8px 15px;
            border: 1px solid black; }
    button { padding: 0.5em 2em; margin-right: 10px; margin-bottom: 20px; }
  </style>

