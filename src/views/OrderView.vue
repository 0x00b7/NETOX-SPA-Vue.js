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
            targets: '.order-opt',
            opacity: [0, 1],
            duration: 150,
            direction: 'linear',
            easing: 'easeInQuad',
            delay: anime.stagger(150),

        });
        setTimeout(() => {
            anime({
              targets: '.order-opt',
              'background': 'linear-gradient(80deg, rgba(60,90,250,0.7) 0%, rgba(250,70,150,0.7) 100%)',
              duration: 1000,
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
           <div class="order-opt">
              <h1>Onepager</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-browser fa-stack-2x "></i>
                <i class="fa-sharp fa-1 fa-stack-1x"></i>
              </span>
              <div>
                <h3>A beautiful One-Page Website for information of all kinds, whether for business or private purposes.</h3>
              </div>
           </div>
           <div class="order-opt">
              <h1>Multipager</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-browsers fa-stack-2x"></i>
                <i class="fa-solid fa-arrow-up-9-1 fa-stack-1x "></i>
              </span>
              <div>
                <h3>Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service & it's benefits.</h3>
              </div>
           </div>
           <div class="order-opt">
              <h1>Shop</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-sidebar-flip fa-stack-2x"></i>
                <i class="fa-solid fa-cart-shopping fa-stack-1x "></i>
              </span>
              <div>
                <h3>Your sales will be a breeze, whether using Shopify, Etsy or a payment system of your choice, your customers will LOVE the design!</h3>
              </div>
           </div>
           <div class="order-opt">
              <h1>Renew</h1>
              <span class="fa-stack fa-4x">
                <i class="fa-solid fa-sidebar-flip fa-stack-2x"></i>
                <i class="fa-solid fa-arrow-rotate-right fa-stack-1x"></i>
              </span>
              <div>
                <h3>Your old site needs a new polish, but you don't know how? then this selection is the right one for you!</h3>
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

.order-opt {
  padding: 1rem;
  height: 550px;
  margin-right: 1rem;
  width: 100%;
  text-align: center;
}

.order-opt span {
  margin-top: 3.5rem;
  margin-bottom: 4rem;
}

.order-opt h1 {
  text-align: left;
  font-weight: 300;
}

.order-opt h3 {
  min-width: 100%;
  word-wrap: break-word;
  text-align: center;
  font-weight: 200;
  font-size: 24px;
}

.order-opt:last-child {
  margin: 0;
}

.order-opt .fa-stack-2x {
  color: rgb(255, 255, 255);
  filter: drop-shadow(0px 0px 25px rgb(0, 160, 255));
}

.fa-1.fa-stack-1x {
  color: rgb(0, 120, 255);
  transform: scale(0.8) translateY(20px);
}

.fa-arrow-up-9-1.fa-stack-1x {
  color: rgb(0, 120, 255);
  left: -24.5px;
  transform: scale(0.8) translateY(5px);
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
    grid-column-gap: 1rem;
  }

  .order-opt {
    margin-bottom: 1rem;
  }

  .order-opt h3 {
    font-size: 24px;
  }
}

@media (max-width: 32em) {
  .container {
    margin-bottom: 108rem;
  }

  .order-panel {
    display: grid;
    grid-template-columns: inherit;
  }

  .order-opt span {
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }

  .order-opt h3 {
    font-size: 28px;
  }
}
</style>

