<template>
<div id="app">
    <h1>page5</h1>
    <table>
      <tr v-for="(row, index1) in matrix" v-bind:key="index1">
        <td v-for="(value, index2) in row" v-bind:key="index2" 
        @click="onclick(index1, index2)"
         :class= "{ yellow : checked[index1][index2] }">
          {{ value }}
        </td>
      </tr>
    </table>
    <h2>클릭 수 : {{ click}}</h2>
  </div>
</template>

<script>
export default {
  name: 'page5',
  data: function() {
    return { 
      click: 0,
       checked: [],
    size: 4,
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
            this.click++;
            this.checked[r][c] = true;
            this.$forceUpdate();
        }
      }
}
</script>

<style scoped>
    div#app {  margin: 30px auto; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
    table { border-collapse: collapse; margin: 40px auto; background-color: yellowgreen; }
    td { width: 50px; height: 50px; border: 1px solid gray; font-size: 20pt;
      text-align: center; cursor: pointer; }
    .yellow { background-color: #ffa; }
  
  </style>

