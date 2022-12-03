<template>
  <div class="container">


  </div>
</template>




<style scoped>
/* HEAD-STUB */
.add {
  padding: 2vh 0;
}
.container {
  border: 1px solid rgb(10, 10, 10);
  background-color: rgba(15, 15, 15, 1);
}

/* SKELETON */
.section {
  display: flex;
  padding: 2vh 5vh;
}
.section:nth-child(2) {
  padding: 2vh 2vh;
  justify-content: center;
  align-items: center;
}

/* THE WWW.. */
.home {
  font-size: 42px;
  width: 100%;
}

/* WE ARE RESPONSIBLE FOR.. */
.define {
  width: 100%;
}
.define h2 {
  margin-top: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}
ul {
  padding: 10px 0;
}
li {
  line-height: 1.5;
}

/* THE DIFFERENCE */
.add h1 {
  font-size: 42px;
}
.feature-box {
  width: 100%;
  height: 270px;
  background-color: rgba(10, 10, 10, 1);
  text-align: center;
  border: 1px solid rgb(5, 5, 5);
  margin: 0 10px 0 0;
  padding: 20px 50px;
}
.feature-box p:nth-child(1) {
  font-size: 30px;
}
.feature-box p:nth-child(3) {
  max-width: 200px;
  word-wrap: break-word;
}
.feature-box svg {
  margin: 1.5rem 0;
  font-size: 72px;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
  .section {
      display: grid;
  }
  .section:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 20px;
  }
  .define {
      font-size: 16px;
  }
  .home {
      font-size: 42px;
  }
  .feature-box {
      margin: auto 0 20px;
      height: 280px;
  }
}

/* W512x ~ iPhone */
@media (max-width: 32em) {
  .section:nth-child(2) {
      display: grid;
      grid-template-columns: inherit;
  }
  .home {
      white-space: nowrap;
      font-size: 4vh;
  }
  .define {
      font-size: 2vh;
  }
  .feature-box {
      height: 265px;
  }
}
</style>