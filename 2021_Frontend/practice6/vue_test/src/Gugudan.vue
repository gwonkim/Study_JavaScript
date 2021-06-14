<template>
<div id="app">
    <h3>page1</h3>
   <input type="text" v-model.number="number" />
    <table>
      <tr v-for="i in 9" :key="i">
        <td>{{ number }} x {{ i }} = {{ number * i }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'gugudan',
   props: {/* 
    title: { type: String, required: true },
    description: { type: String, default: "안녕하세요" },
    color: { type: String, default: "#fff" } */
  },
  data: function() {
    return { 
    number: 2,
  };
  },
}
</script>

<style>
      body { font-size: 11pt; }
    div#app { padding: 40px; margin: 30px auto; max-width: 200px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; font-size: 11pt; }
    table { border-collapse: collapse; margin-top: 20px; }
    td { border: 1px solid black; padding: 4px; }
  </style>

