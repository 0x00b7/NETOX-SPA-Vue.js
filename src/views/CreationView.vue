<script setup>
import anime from 'animejs';

import { ref, onMounted, onUnmounted } from "vue";

import { onIntersect } from "../assets/scripts/CA/oIntersect";

const observer = ref({});
const scrollRef = ref({});

const onEnter = (el) => {
  anime({
  targets: el,
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
}

const onExit = () => {

    console.log("CALLBACK => onExit");
};

onMounted(() => {
    observer.value = onIntersect(scrollRef.value, onEnter, onExit, false, {
        threshold: 0.8,
    });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
    observer.value.disconnect();
});
</script>

<template>
    <div class="container">
       <h1>Learn more about our product</h1>

       <div class="section">
          <div class="showcase">
             <h2>_CENTER (SHOWCASE)</h2>
          </div>
          <div class="workflow">
             <h2>_LEFT (WORKFLOW)</h2>
          </div>
       </div>

       <hr id="TL">
       <h1>Our Vision</h1>
       <div class="section">
          <div class="vision">
             <div ref="scrollRef" class="box"></div>
          </div>
       </div>
    </div>
 </template>
 
<style scoped>
.box {
  background-color: lime;
  width: 20px;
  height: 20px;
}


.container {
  background-color: rgba(15, 15, 15, 1);
  padding: 0rem;
}

.container h1:nth-child(1) {
  text-align: center;
  font-weight: 600;
}

.container h1:nth-child(4) {
  text-align: center;
  font-weight: 600;
}

.section {
  display: flex;
  margin-top: 1rem;
}

.section:nth-child(5) {
  background-color: red;
}

.section div {
  padding: 1rem;
}

.showcase {
  width: 100%;
  display: grid;
  justify-content: center;
  height: 800px;
}

.workflow {
  width: 100%;
}

.vision {
  background-color: blue;
  height: 200px;
  width: 100%;
}


/* W1024x ~ iPad */
@media (max-width: 64em) {
  .section {
    display: grid;
  }
}

/* W512x ~ iPhone */
@media (max-width: 32em) {}
</style>

