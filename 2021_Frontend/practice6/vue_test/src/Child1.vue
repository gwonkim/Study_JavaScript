<template>
    <div class="str">
      <h2>Child :  {{ str }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Child',
   props: {
       str: String,
   },
  data: function() {
    return { 
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
    div.str { padding: 20px; background: #ffa; }
    span { display: inline-block; margin: 5px; padding: 8px 15px;
            border: 1px solid black; }
    button { padding: 0.5em 2em; margin-right: 10px;  }
  </style>

