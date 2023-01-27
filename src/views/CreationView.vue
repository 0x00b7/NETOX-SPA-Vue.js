<script>
import anime from "animejs";

export default {
  mounted() {
    anime({
      targets: ".fa-fire-flame-simple",
    });
  },
};
</script>

<template>
  <div class="container">
     <div class="header">
        <h1>Learn more about our product</h1>
     </div>
     <div class="section">
        <div class="showcase">
           <div class="hero-showcase">
              <i class="fa-solid fa-space-awesome"></i>
           </div>
           <div class="hero-text">
              <h1>hdshgda</h1>
           </div>
        </div>
     </div>
  </div>
</template>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.showcase,
.workflow {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  height: 400px;
  margin: 5rem;
}

.showcase .hero-showcase {
  padding: 5rem;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 10rem;
}

.showcase .hero-text {
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}

.workflow {
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}

@media (max-width: 64em) {
  .showcase,
  .workflow {
    margin: 0;
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media (max-width: 32em) {}
</style>
