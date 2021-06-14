<template>
<div id="app">
  <h3>page1</h3>
  <hr />
  <br />
  <div class="count">
      {{ count }}
  </div>
  </div>
</template>

<script>
export default {
  name: 'clickBox',
  data: function() {
    return { 
    count: 0,
  };
  },
  created() {
        setInterval(() => this.count++, 1000);
      }

}
</script>

<style scoped>
    body { font-size: 11pt; }
    div#app { margin: 30px auto; max-width: 200px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; font-size: 11pt; }
    div.count { height: 100px; width: 100px; background-color: #ff8; border: 1px solid black;
      margin: auto; text-align: center; font-size: 40px; line-height: 100px;
    }

</style>
