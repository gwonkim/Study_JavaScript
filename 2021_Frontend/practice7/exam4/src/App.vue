<template>
  <div id="app">
<h1>컴포넌트</h1>
          <select v-model="c">
        <option>green</option>
        <option>red</option>
        <option>blue</option>
        <option selected>gray</option>
      </select>
    <br />
    <Child :c='c' />
  </div>
</template>

<script>
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
   data: function() {
    return { 
    c: 'gray'
  };
  },
}
</script>

<style>
div#app { padding: 30px; margin: 30px auto; max-width: 500px; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  font-size: 11pt; }
    div#app div { margin-bottom: 20px; }
    select { padding: 6px; margin-bottom: 10px;  width: 150px;}
    span { display: inline-block; margin: 5px; padding: 8px 15px;
            border: 1px solid black; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
</style>
