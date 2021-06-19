<template>
    <div :style="{ background : yellow }">
      <h2>Child</h2>
    </div>
</template>

<script>
export default {
  name: 'Child',
   props: {
       yellow: String,
   },
  data: function() {
    return { 
    a: [],
  };
  },
}
</script>

<style>
    div#app { padding: 30px; margin: 30px auto; max-width: 500px; 
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  font-size: 11pt; }
    div#app div { margin-bottom: 20px; border: 1px solid #000; padding: 20px; }
    input { padding: 6px; margin: 10px; }
    span { display: inline-block; margin: 5px; padding: 8px 15px;
            border: 1px solid black; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

