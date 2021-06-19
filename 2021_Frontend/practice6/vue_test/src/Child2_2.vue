<template>
  <div>
    Child :
    <button
      type="button"
      v-on:click="$emit('color', color('#ffa'))"
      :disabled="yellow == '#ffa'"
    >
      노란색
    </button>
    <button
      type="button"
      v-on:click="$emit('color', color('green'))"
      :disabled="yellow == 'green'"
    >
      녹색
    </button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    /*  yellow: true, */
  },
  data: function () {
    return {
      yellow: "",
    };
  },
  methods: {
    color(c) {
      this.yellow = c;
      return this.yellow;
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
  border: 1px solid #000;
  padding: 20px;
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
button {
  padding: 0.5em 2em;
  margin-right: 10px;
}
</style>
