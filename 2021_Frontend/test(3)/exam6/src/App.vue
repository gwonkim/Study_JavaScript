<template>
  <div id="app">
    <h1>컴포넌트</h1>
    <input type="text" v-model.number="size" />
    <Child :size="size" />
  </div>
</template>

<script>
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: {
    Child,
  },
  data: function () {
    return {
      size: 3,
    };
  },
};
</script>

<style>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
input {
  padding: 5px;
  font-size: 20px;
  width: 150px;
  margin-bottom: 10px;
}
</style>
