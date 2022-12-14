<template>
  <div class="container">
    <h1>Learn more about our product</h1>
     <div class="section">
        <div class="showcase">
            <h2>Hallo</h2>
            
        </div>
     </div>
  </div>
</template>

<style scoped>
/* HEAD-STUB */
.container {
    background-color: rgba(15, 15, 15, 1);
    padding: 1rem 0;
}

.container h1:nth-child(1) {
    text-align: center;
    font-weight: 600;
}

/* SKELETON */
.section {
    display: flex;
}

.showcase {
    padding: 1rem;
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