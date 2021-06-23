<template>
  <div class="count">
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      count: 0,
    };
  },
  mounted() {
    let callback = () => {
      this.count++;
    };
    this.timerId = setInterval(callback, 1000);
  },
};
</script>

<style>
.count {
  text-align: center;
  width: 100px;
  background: #ffa;
  border: 1px solid #000;
}
</style>

