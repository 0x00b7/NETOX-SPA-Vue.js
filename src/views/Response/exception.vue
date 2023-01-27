<script>
import anime from "animejs";

export default {
  mounted() {
    anime({
      targets: ".sorry",
      opacity: [0, 1, 0, 1],
      duration: 700,
      direction: "linear",
      easing: "easeInQuad",
    });
  },
};
</script>

<template>
  <div class="sorry">
    <div class="notify">
      <h1>Argh!</h1>
      <i class="fa-solid fa-solid fa-hexagon-xmark"></i>
      <h3>
        Something got wrong..<br />Please consider contacting us via E-Mail or
        WhatsApp!
      </h3>
    </div>
  </div>
</template>

<style scoped>
.sorry {
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
  color: red;
  -webkit-filter: hue-rotate(20deg);
  filter: hue-rotate(20deg);
  padding: 2rem;
  font-size: 5rem;
}

.notify h3 {
  font-weight: 200;
}
</style>
