<script setup>
import { onMounted } from "@vue/runtime-core";

import intersectionEntry from "../assets/scripts/CA/intersectionEntry";

const {
    observedElement,
    elementClass,
    interOptions,
    interCallback,
    observer
} = intersectionEntry();

onMounted(() => {
    observedElement.value = document.querySelector(".intersection");
    elementClass.value = "ML";
    interOptions(null, 0);
    interCallback();
    observer.observe(observedElement.value);

});
</script>

<template>
    <div class="container">
      <h1>Learn more about our product</h1>

       <div class="section">

          <div class="showcase">
              <h2>_showcase</h2>
          </div>

          <div class="workflow">
              <h2>_workflow</h2>
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

div {
    width: 100%;
}

.ML {
    animation: ML 1s ease-in forwards;
    animation-delay: 500ms;
    opacity: 0;
}

@keyframes ML {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

.section {
    display: flex;
    margin-top: 1rem;
}

.showcase {
    background-color: blue;
}

.workflow {
    background-color: red;
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

