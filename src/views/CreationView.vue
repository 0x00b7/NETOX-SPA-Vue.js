<template>
  <div class="container">
    <div class="creation">
      <p>Lets create a masterpiece together!</p>
    </div>
  </div>
</template>
<style scoped>
  .container {
    padding: 1vh 1vh;
    font-size: 4vh;
  }

  .creation {
    text-align: center;
  }

  div {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .container {
      display: grid;
    }
  }

</style>

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

