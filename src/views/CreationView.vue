<template>
  <div class="container">
    <h1 id="CT">Learn more about our product</h1>
     <div class="section">
        <div class="">
            <p>TEST</p>
        </div>
     </div>
  </div>
</template>

<style scoped>
/* HEAD-STUB */
.container {
    border: 1px solid rgb(10, 10, 10);
    background-color: rgba(15, 15, 15, 1);
    padding: 2vh 5vh;
}

/* SKELETON */
.section {
    display: flex;
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