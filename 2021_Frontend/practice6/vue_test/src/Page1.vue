<template>
<div id="app">
    <h1>페이지1</h1>
      <input type="text" v-model="str" />
      <Child1 :str="str" />
      <Child1 :str="str" />
  </div>
</template>

<script>
import Child1 from './Child1.vue';

export default {
  components: { Child1 },
  name: 'Page1',
  data: function() {
    return { 
    str: '',
  };
  },
}
</script>

<style>
    div#app { padding: 30px; margin: 30px auto; max-width: 500px; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  font-size: 11pt; }
    div#app div { margin-bottom: 20px; }
    input { padding: 6px; margin: 10px; }
    span { display: inline-block; margin: 5px; padding: 8px 15px;
            border: 1px solid black; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

