<script>
import anime from 'animejs';

export default {
    mounted() {
        anime({
            targets: '.fa-fire-flame-simple',
        })
    }
}
</script>

<template>
  <div class="container">
     <div class="header">
        <h1>Learn more about our product</h1>
     </div>
     <div class="section">
        <div class="showcase">
           <div class="anim">
              <i class="fa-brands fa-space-awesome"></i>
           </div>
        </div>
        <div class="workflow">
           <h3>_LEFT (WORKFLOW)</h3>
        </div>
     </div>
     <div class="header">
        <h1>Learn more about our product</h1>
     </div>
     <div class="section">
        <div class="vision">
           <h3>_CENTER (VISION)</h3>
        </div>
     </div>
  </div>
</template>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.showcase, .workflow {
  display: -ms-grid;
  display: grid;
  height: 500px;
  padding: 20vw;
}

.showcase .anim {
  display: -ms-grid;
  display: grid;
  font-size: 12rem;
}

.workflow {
  -webkit-box-pack: end;
  -webkit-justify-content: end;
     -moz-box-pack: end;
      -ms-flex-pack: end;
          justify-content: end;
}

.vision {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media (max-width: 64em) {
  .showcase, .workflow  {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

@media (max-width: 32em) {}
</style>

