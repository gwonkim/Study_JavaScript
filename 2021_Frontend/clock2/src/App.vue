<template>
  <div id="app">
    <h1>시계</h1>
    <Clock />
  </div>
</template>

<script>
import Clock from './Clock.vue'

export default {
  name: "App",
  components: { Clock }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

