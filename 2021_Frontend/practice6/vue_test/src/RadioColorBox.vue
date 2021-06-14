<template>
<div id="app">
  <h3>page1</h3>
 <div id="app"  v-bind:style="{ backgroundColor: getColor() }">
    <label><input type="radio" value="남자" v-model="sex" />남자</label>
    <label><input type="radio" value="여자" v-model="sex" />여자</label>
    <h1>{{ sex }}</h1>
  </div>

  </div>
</template>

<script>
export default {
  name: 'clickBox',
  data: function() {
    return { 
    sex: '',
  };
  },
      methods: {
        getColor() {
          if (this.sex == '남자') return '#eef';
          else if (this.sex == '여자') return '#fee';
          return '#fff';
        }
      }

}
</script>

<style scoped>
     body { font-size: 11pt; }
    div#app { padding: 50px; margin: 30px auto; max-width: 200px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; font-size: 11pt; }
    label { margin-right: 20px; }

</style>
