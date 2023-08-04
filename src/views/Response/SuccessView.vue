<script>
import anime from "animejs";

export default {
  mounted() {
    anime({
      targets: ".success",
      opacity: [0, 1],
      scale: [0, 1],
      duration: 500,
      direction: "linear",
      easing: "easeInQuad",
    });
  },
};
</script>

<template>
  <div class="success">
    <div class="notify">
      <h1>Thanks!</h1>
      <i class="fa-solid fa-solid fa-thumbs-up"></i>
      <h3>We will contact you shortly regarding further steps. :)</h3>
    </div>
  </div>
</template>

<style scoped>
.success {
  display: -ms-grid;
  display: grid;
  height: 300px;
}

.notify {
  text-align: center;
  -ms-grid-column-align: center;
  justify-self: center;
  margin: auto 0.5rem;
}

.notify h1 {
  font-weight: 700;
}

.notify svg {
  color: green;
  -webkit-filter: hue-rotate(20deg);
  filter: hue-rotate(20deg);
  padding: 2rem;
  font-size: 5rem;
}

.notify h3 {
  font-weight: 200;
}
</style>
