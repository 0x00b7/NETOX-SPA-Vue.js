<script>
import anime from "animejs";

export default {
  mounted() {
    anime({
      targets: '.hero-text > *',
      translateX: [-50, 0]
    })
  }
}
</script>

<template>
  <div class="container">
     <div class="header">
        <h1>Know our vision</h1>
     </div>
     <div class="section">
        <div class="showcase">
           <div class="hero-showcase">
            <i class="fa-duotone fa-star-shooting"></i>
           </div>
           <div class="hero-text">
              <h1>Not just a simple website!</h1>
              <h2>We create innovative web-applications and UX designs at an affordable price. <br/><br/> Our code, primarily based on Vue.js and JavaScript, is highly professional and uses the best solutions to create a masterpiece for our clients. <br/><br/> We also use Font-Awesome, a top-notch SVG icon library, to enhance the overall look and feel of our designs.</h2>
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

.header {
  background-color: rgba(10, 10, 10, 0.2);
}

.showcase,
.workflow {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  margin: 5rem;
}

.showcase .hero-showcase {
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.4);
}
.showcase .hero-showcase svg {
  font-size: 12rem;
  color: blue;
  filter: sepia(60%) saturate(1000%) hue-rotate(90deg) drop-shadow(0px 0px 25px rgba(0, 119, 255, 0.2));
}

.showcase .hero-text {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}

.showcase .hero-text h1 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.showcase .hero-text h2 {
  font-weight: 100;
}

@media (max-width: 64em) {
  .showcase {
    margin: 0;
    display: -ms-grid;
    display: grid;
  }

  .showcase .hero-showcase {
    text-align: center;
  }
}

@media (max-width: 32em) {}
</style>
