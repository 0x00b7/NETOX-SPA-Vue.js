<template>
  <div class="container">
    <button @click="go">Fancy</button>
    <div class="el" ref="square"></div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  methods: {
    go() {
      anime({
        targets: this.$refs.square,
        translateX: 100
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin: 5em;
  padding: 0;
  text-align: center;
}

button {
  padding: 2%;
  border: 1px solid red;
  background: 0;
  color: white;
}
</style>