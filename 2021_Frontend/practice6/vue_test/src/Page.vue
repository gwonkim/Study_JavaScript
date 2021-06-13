<template>
  <div>
    <h3>page1</h3>
    <h4>input</h4>
    <div>
        <input type="number" v-model="size" />
        <button type="button" @click="createArray">생성</button>
    </div>
<!-- 
    <span :v-for="i in a">
      {{ i }}
    </span> -->

  </div>
</template>

<script>
export default {
  name: 'page1',
   props: {
    title: { type: String, required: true },
    description: { type: String, default: "안녕하세요" },
    color: { type: String, default: "#fff" }
  },
  data: function() {
    return { size: 0, a: [] };
  },
 /*  methods: {
        createArray() {
          this.a = [];
          for (let i = 0; i < this.size; ++i)
            this.a[i] = Math.floor(Math.random() * 10);
        },
      } */
}
</script>
