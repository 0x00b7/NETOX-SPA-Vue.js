<script>
import anime from 'animejs';


export default {
  props: {
      deg: {
        type: String,
        default: "60deg",
      },
    },
    mounted() {
        anime({
            targets: '.feature-box',
            opacity: [0, 1],
            duration: 150,
            direction: 'linear',
            easing: 'easeInQuad',
            delay: anime.stagger(150),

        });
        setTimeout(() => {
            anime({
              targets: '.feature-box',
              'background': 'linear-gradient(20deg, rgba(60,90,250,0.7) 0%, rgba(250,70,150,0.7) 100%)',
              delay: anime.stagger(150),
            });
        }, 150);
    }
}
</script>

<template>
  <div class="container">
     <div class="section">
        <div class="header">
           <h1>Our Product's</h1>
        </div>
        <div class="order-panel">
           <div class="feature-box">
              <h1>OnePager</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-sharp fa-square-1 fa-stack-1x"></i>
                <i class="fa-solid fa-browser fa-stack-2x "></i>
              </span>
              <div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</h3>
              </div>
           </div>
           <div class="feature-box">
              <h1>Multisite</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-browsers fa-stack-2x"></i>
                <i class="fa-solid fa-arrow-up-9-1 fa-stack-1x "></i>
              </span>
              <div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</h3>
              </div>
           </div>
           <div class="feature-box">
              <h1>Shop</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-sidebar-flip fa-stack-2x"></i>
                <i class="fa-solid fa-cart-shopping fa-stack-1x "></i>
              </span>
              <div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</h3>
              </div>
           </div>
           <div class="feature-box">
              <h1>Renew</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-sidebar-flip fa-stack-2x"></i>
                <i class="fa-solid fa-arrow-rotate-right fa-stack-1x"></i>
              </span>
              <div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</h3>
              </div>
           </div>
        </div>
     </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
}

.section {
  height: 650px;
}

.section .header {
  padding: 1rem;
  padding-bottom: 0;
}

.section .header h1 {
  font-weight: 600;
  text-align: left;
}

.order-panel {
  margin: 1rem;
  display: flex;
  height: auto;
}

.feature-box h1 {
  text-align: left;
}

.feature-box h3 {
  top: 130px;
  width: 0px;
  min-width: 100%;
  word-wrap: break-word;
  text-align: left;
}

.feature-box {
  padding: 1rem;
  height: 550px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  background-color: rgb(10, 10, 10);
  width: 100%;
  text-align: center;
}

.feature-box svg {
  top: 120px;
}

.feature-box .fa-stack-2x {
  color: rgb(255, 255, 255);
}

.feature-box .fa-stack-1x {
  color: rgb(100, 255, 0);
}

.fa-square-1.fa-stack-1x {
  left: 65px;
  transform: scale(0.7) translateY(-112px);
}

.fa-arrow-up-9-1.fa-stack-1x {
  color: rgb(0, 120, 255);
  left: -24.5px;
  transform: scale(0.8);
}

.fa-cart-shopping.fa-stack-1x {
  color: rgb(255, 0, 72);
  left: -50px;
  transform: scale(0.5);
}

.fa-arrow-rotate-right.fa-stack-1x {
  color: rgb(255, 130, 0);
  transform: scale(0.7);
  left: -47px;
}

@media (max-width: 64em) {
  .container {
    margin-bottom: 35rem;
  }

  .section .header h1 {
    text-align: center;
  }

  .order-panel {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 0.5rem;
  }
}

@media (max-width: 32em) {
  .container {
    margin-bottom: 108rem;
  }

  .section .header h1 {

  }

  .order-panel {
    display: grid;
    grid-template-columns: inherit;
  }
}
</style>

