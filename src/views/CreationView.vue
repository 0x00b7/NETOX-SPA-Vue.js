<script>
import anime from 'animejs'

export default {
    mounted() {
        anime({
            targets: '.function-based .el',
            translateX: function(el) {
                return el.getAttribute('data-x');
            },
            translateY: function(el, i) {
              return el.getAttribute('data-y');
            },
            scale: function(el, i, l) {
                return (l - i);
            },
            rotate: function() {
                return anime.random(-360, 360);
            },
            borderRadius: function() {
                return ['50%', anime.random(10, 50) + '%'];
            },
            duration: function() {
                return anime.random(1200, 5000);
            },
            delay: function() {
                return anime.random(0, 200);
            },
            easing: 'easeOutElastic(1, .8)',
        });
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
           <div class="function-based">

              <div data-x="0" data-y="100" class="circle el"></div>
              <div data-x="0" data-y="250" class="circle el"></div>
              <div data-x="0" data-y="370" class="circle el"></div>
              <div data-x="0" data-y="450" class="circle el"></div>
              <div data-x="0" data-y="500" class="circle el"></div>

           </div>
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
.circle {
  background-color: red;
}

/*_______*/

.container {
  margin-top: 1rem;
}

.section {
  display: grid;
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
  display: grid;
  justify-content: center;
  height: 800px;

}

.workflow {

}

.vision {
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

