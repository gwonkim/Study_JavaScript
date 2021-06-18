<template>
<div id="app">
    <h3>페이지4</h3>
      <table>
        <tr v-for="i in array" :key="i">
          <td>{{i.name}}</td><td>{{i.age}}</td>
        </tr>
      </table>
      <h3>이름 :<input type="text" v-model="n" /></h3>
      <h3>나이 :<input type="text" v-model.number="a" /></h3>
      <button type="button" v-on:click="add()">저장</button>
</div>
</template>

<script>
export default {
  name: 'page4',
  data: function() {
    return { 
    n : '',
    a : '',
    array: [ {name: '홍길동', age: '16'}, {name: '임꺽정', age: '17'}, ],
  };
  },
  methods: {
        add() {
          this.array.push({ name: this.n, age: this.a });
          this.n = '';
          this.a = '';
        },
      }
}
</script>

<style scoped>
    div#app { padding: 30px; margin: 30px auto; max-width: 500px; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  font-size: 11pt; }
    div#app div { margin-bottom: 20px; }
    input { padding: 6px; margin: 10px; }
    table { border-collapse: collapse; width: 200px; }
    td { padding: 5px; border: 1px solid #aaa;  text-align: center; background: #fff; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

