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
     <hr id="TL">
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
  margin-top: 1rem;
}

.section {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.header {
	margin-top: 0.5rem;
	margin-bottom: 1rem;
}

.section div {
  padding: 1rem;
}

.showcase {
  width: 100%;
  display: grid;
  justify-content: center;
  height: 800px;
  background-color: red;
}

.workflow {
  width: 100%;
  background-color: green;
}

.vision {
  background-color: blue;
  height: 200px;
  width: 100%;
}

@media (max-width: 64em) {
  .section {
    display: grid;
  }
}

@media (max-width: 32em) {}
</style>

