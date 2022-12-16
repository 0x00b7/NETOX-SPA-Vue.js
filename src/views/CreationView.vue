<script setup>
import anime from 'animejs';

import { ref, onMounted, onUnmounted } from "vue";

import { onIntersect } from "../assets/scripts/CA/oIntersect";

const observer = ref({});
const scrollRef = ref({});

const onEnter = () => {

  console.log("CALLBACK => onEnter");
};

const onExit = () => {

  console.log("CALLBACK => onExit");
};

onMounted(() => {
  observer.value = onIntersect(scrollRef.value, onEnter, onExit, true, {
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
       <div ref="scrollRef" class="section">
          <div>
             <h2>Lorem Ipsum</h2>
          </div>
       </div>
    </div>
 </template>
 
<style scoped>
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
.section div {
    width: 100%;
    padding: 1rem;
}

.showcase {
    display: grid;
    justify-content: center;
    height: 500px;
}
.workflow {

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

