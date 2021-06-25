<template>
  <div class="a">
    <span v-for="(s, i) in size" :key="i">
      {{ s }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    size: Number,
  },
};
</script>

<style>
div.a {
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 20px;
  background: #ffa;
  border: 1px solid black;
}
span {
  display: inline-block;
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid black;
}
</style>

