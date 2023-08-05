<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import "./assets/scripts/FA/fontawesome.min.js";
import "./assets/scripts/FA/solid.min.js";
import "./assets/scripts/FA/brands.min.js";
import anime from "animejs";

function useFadeIn(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    duration: 150,
    easing: "easeInOutSine",
    complete: done,
  });
}

function useFadeOut(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    duration: 150,
    easing: "easeInOutSine",
    complete: done,
  });
}
</script>

<template>
  <div className="warning">
    <p>This Project is Deprecated!</p>
  </div>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition
      @enter="useFadeIn"
      @leave="useFadeOut"
      :css="false"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>
