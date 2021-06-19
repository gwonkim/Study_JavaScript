<template>
  <div id="app">
    <h1>페이지4 현재시각 추가</h1>
    <table>
      <tr v-for="(a, i) in t" :key="i">
        <td @click="buttonClick(i)" :class="{ yellow: check[i] }">{{ a }}</td>
      </tr>
    </table>
    <br />
    <button type="button" v-on:click="time">현재시각 추가</button>
    <p>클릭 수 : {{ click }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Page1",
  data: function () {
    return {
      t: [],
      check: [],
      ti: null,
      click: 0,
    };
  },
  methods: {
    time() {
      this.ti = moment().format("HH:mm:ss");
      this.check[this.check.length] = false;
      this.t.push(this.ti);
    },
    buttonClick(i) {
      this.check[i] = true;
      this.click++;
      this.$forceUpdate();
    },
  },
};
</script>

<style>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 500px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
  font-size: 11pt;
}
div#app div {
  margin-bottom: 20px;
}
input {
  padding: 6px;
  margin: 10px;
}
span {
  display: inline-block;
  margin: 5px;
  padding: 8px 15px;
  border: 1px solid black;
}
.yellow {
  background: #ffa;
}
button {
  padding: 0.5em 2em;
  margin-right: 10px;
  margin-bottom: 20px;
}
</style>

