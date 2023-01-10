<script>
import anime from 'animejs';
import OrderOpt from '../components/OrderOpt.vue';

export default {
    components: {
        OrderOpt: OrderOpt,
    },
    data() {
        return {
            step: 1,
            selection: ''
        }
    },
    methods: {
        incrementStep(name) {
            anime({
                targets: '.order-opt',
                opacity: [1, 0],
                duration: 100,
                direction: 'linear',
                easing: 'easeInQuad',
            });
            setTimeout(() => {
                this.step++;
            }, 100);
            this.selection = name;
            console.log(this.selection);
        }
    },
    mounted() {
        anime({
            targets: '.order-opt',
            opacity: [0, 1],
            duration: 150,
            direction: 'linear',
            'background': 'linear-gradient(20deg, rgba(60,90,250,0.7) 0%, rgba(250,70,150,0.7) 100%)',
            easing: 'easeInQuad',
            delay: anime.stagger(150),
        });
    }
}
</script>

<template>
  <div class="container">
    <form
      name="contact"
      action="/pages/success"
      method="POST"
      data-netlify="true"> <input type="text" name="informations" :placeholder="selection"> </form>
     <div class="section">
        <div class="header">
           <h1>{{ step }}/3</h1>
        </div>
        <div class="order-now">
           <div class="pSelect" v-show="step === 1">
              <div class="order-opt" @click="incrementStep('Onepager')">
                 <h1>Onepager</h1>
                 <h3>A beautiful One-Page Website for information of all kinds, whether for business or private purposes.</h3>
              </div>
              <div class="order-opt" @click="incrementStep('Multipager')">
                 <h1>Multipager</h1>
                 <h3>Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service & it's benefits.</h3>
              </div>
              <div class="order-opt" @click="incrementStep('Shop')">
                 <h1>Shop</h1>
                 <h3>Your sales will be a breeze, whether using Shopify, Etsy or a payment system of your choice, your customers will LOVE the design!</h3>
              </div>
              <div class="order-opt" @click="incrementStep('Renew')">
                 <h1>Renew</h1>
                 <h3>Your old site needs a new polish, but you don't know how? then this selection is the right one for you!</h3>
              </div>
           </div>
           <div class="uInput" v-show="step === 2">
              <div class="uInterface">
                 <div class="order-inf">
                    <label>Forename
                      <input @input="updateTextBox" type="text" name="forename" placeholder=" ...">
                    </label>
                 </div>
                 <div class="order-inf">
                    <label>Surname
                      <input @input="updateTextBox" type="text" name="surname" placeholder=" ...">
                    </label>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
</template>

<style scoped>
form {

}
.container {
  display: -ms-grid;
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

/* Container */
.order-now {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.order-now .pSelect {
  margin: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  height: auto;
}

.order-now .uInput {
  width: 90%;
  padding-top: 1rem;
}

.order-now .uInterface, .uInput {
  margin: 0 auto;
}

.uInterface label {
  position: static;
  display: block;
  border-radius: 15px;
  font-size: 18px;
  height: 65px;
  padding: 0.5rem 1rem;
  width: auto;
  text-decoration: underline;
  background: linear-gradient(10deg, rgba(255, 147, 147, 1) 10%, rgba(15, 129, 255, 1) 100%);
  text-decoration-color: crimson;
  text-decoration-thickness: 2px;
}

.uInterface input {
  display: grid;
  margin-left: 0;
  font-size: 24px;
  height: 0;
  background: transparent;
  outline: none;
  color: rgb(255, 255, 255);
  border: 0;
  padding: 1rem 0rem 1rem 0.5rem;
}

.order-inf {
  margin-bottom: 1rem;
}

.order-opt {
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.order-opt h1 {
  text-align: left;
  font-weight: 300;
}

.order-now .pSelect svg {
  margin: 5rem;
}

.order-opt h3 {
  min-width: 100%;
  word-wrap: break-word;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.order-opt .pSelect:last-child {
  margin: 0;
}

@media (max-width: 64em) {
  .container {
    margin-bottom: 35rem;
  }

  .section .header h1 {
    text-align: center;
  }

  .order-now .pSelect {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1rem auto;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
  }

  .order-now .uInterface {
    width: auto
  }

  .uInterface label {
    width: auto;
  }

  .uInterface input {
    width: auto;
  }

}

@media (max-width: 32em) {
  .container {
    margin-bottom: 108rem;
  }

  .order-now .pSelect {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: inherit;
    grid-template-columns: inherit;
  }

  .uInterface input {
    width: auto;
  }

}
</style>

