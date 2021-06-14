<template>
<div id="app">
    <h3>page1</h3>
    <div class="s" :style="{ background : yellow}">
        {{ size }}
    </div>
      <button type="button" v-on:click="color('#ffa')" :disabled="yellow == '#ffa'" >노란색</button>
      <button type="button" v-on:click="color('yellowgreen')" :disabled="!(yellow == '#ffa')">연두색</button>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data: function() {
    return { 
    size: 0,
    yellow : '#ffa',
};
},
  methods: {
       color(c) {
         this.size += 1;
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
   div.s { padding: 10px; height: 50px; border: #000 1px solid; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

