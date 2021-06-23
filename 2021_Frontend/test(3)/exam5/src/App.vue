<template>
  <div id="app">
    <h1>카운터</h1>
    <counter />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
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
</style>
