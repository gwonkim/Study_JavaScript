<template>
  <div id="app">
    <table>
      <tr v-for="(i, index ) in a" :key="index">
        <td>{{ i }}</td>
      </tr>
    </table>
    <br >
      <Child  v-on:send="createArray" />
  </div>
  
</template>

<script>
import Child from './components/Child.vue';

export default {
  name: 'App',
  components: {
    Child
  },
   data: function() {
    return { 
    a: [],
  };
   },
   methods: {
        createArray(v) {
          this.a.push(v);
          this.$forceUpdate();
        },
      }
}
</script>

<style>
#app div {
            margin-bottom: 20px;
        }

        label {
            display: block;
        }

        input[type=text] {
            padding: 4px;
        }

        table {
            border-collapse: collapse;
            width: 50px;
        }

        td {
            padding: 5px;
            border: 1px solid #aaa;
            text-align: center;
        }
</style>
