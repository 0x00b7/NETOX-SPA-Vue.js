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
             <div ref="mBox" class="box"></div>
          </div>
       </div>
    </div>
 </template>
 
<style scoped>
.box {
  background-color: lime;
  width: 20px;
  top: 25%;
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

