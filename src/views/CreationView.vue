<template>
  <div class="container">
     <div class="section">
        <div class="">

        </div>
     </div>

     <div class="section">
        <div class="">

        </div>
     </div>
  </div>
</template>

<style scoped>
/* HEAD-STUB */
.container {
    border: 1px solid rgb(10, 10, 10);
    background-color: rgba(15, 15, 15, 1);
}

/* SKELETON */
.section {
    display: flex;
    padding: 2vh 5vh;
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