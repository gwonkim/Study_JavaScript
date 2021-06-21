<template>
<div id="app">
  <div v-for="r, v in matrix" :key= "v">
  <span v-for="c, v2 in r" :key= "v2"
        @click="onclick(v, v2)"
         :class= "{ yellow : checked[v][v2] }">
      {{ c }}
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: function() {
    return { 
      click: 0,
       checked: [],
    size: 5,
    matrix: [],
  };
  },
 created() {
        for (let r = 0; r < this.size; ++r) {
          this.matrix[r] = [];
          this.checked[r] = [];
          for (let c = 0; c < this.size; ++c) {
            this.matrix[r][c] = r * this.size + c + 1;
            this.checked[r][c] = false;
          }
        }
      },
      methods: {
        onclick : function(r, c) {
          this.matrix[r][c] += 1;
          this.checked[r][c] = true;
            this.$forceUpdate();
        }
      }
}
</script>

<style>
  table { border-collapse: collapse; margin: 40px auto; background-color: yellowgreen; }
    td { width: 50px; height: 50px; border: 1px solid gray; font-size: 20pt;
      text-align: center; cursor: pointer; }
    .yellow { background-color: #ffa; }
     span { display: inline-block; margin: 5px; padding: 10px;
            border: 1px solid black; height: 20px; width: 20px; }
    span:hover {
      cursor: pointer;
    }
 
  </style>

