<template>
<div id="app">
    <h3>page1</h3>
    <div>
      <input type="text" v-model.number="size" />
          <button type="button" @click="size++"> ++ </button>
    <button type="button" @click="size--"> -- </button>
      <button type="button" v-on:click="createArray()">생성</button>
    </div>
    <hr />
   <span v-for="i, index in a" :key="index">
      {{ i }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'page1',
   props: {/* 
    title: { type: String, required: true },
    description: { type: String, default: "안녕하세요" },
    color: { type: String, default: "#fff" } */
  },
  data: function() {
    return { 
    size: 0,
    a: [],
  };
  },
  methods: {
        createArray() {
          this.a = [];
          console.log('a', this.a);
          for (let i = 0; i < this.size; ++i) {
            this.a[i] = Math.floor(Math.random() * 10);
          }
        },
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
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

