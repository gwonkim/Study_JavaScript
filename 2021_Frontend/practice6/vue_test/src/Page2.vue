<template>
<div id="app">
    <h1>페이지2</h1>
    <br />
    <h1>App : {{ a }}</h1>
    <Child2  v-on:send="value" />

  </div>
</template>

<script>
import Child2 from './Child2.vue';
export default {
  components: { Child2 },
  name: 'page1',
   props: {/* 
    title: { type: String, required: true },
    description: { type: String, default: "안녕하세요" },
    color: { type: String, default: "#fff" } */
  },
  data: function() {
    return { 
      a : '',
  };
  },
    methods: {
    value(value) {
      this.a = value;
    }
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

