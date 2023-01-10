<template>
  <div class="container">
     <div class="header">
        <h1>Learn more about our product</h1>
     </div>
     <div class="section">
        <div class="showcase">
          <h2>_CENTER (SHOWCASE)</h2>
        </div>
        <div class="workflow">
           <h2>_LEFT (WORKFLOW)</h2>
        </div>
     </div>
     <hr id="T_LINE">
     <div class="header">
        <h1>Learn more about our product</h1>
     </div>
     <div class="section">
        <div class="vision">
           <p>Lorem Ipsum</p>
        </div>
     </div>
  </div>
</template>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.header {
  background-color: red;
}

.section div {
  padding: 1rem;
}

.showcase {
  height: 800px;
}

.workflow {
  height: 800px;
}

.vision {
  height: 200px;
  background-color: black;
}

@media (max-width: 64em) {}

@media (max-width: 32em) {}
</style>

