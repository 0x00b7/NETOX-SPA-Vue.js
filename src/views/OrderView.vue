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
            items: [{
                h1: 'Onepager',
                h3: 'A beautiful One-Page Website for information of all kinds, whether for business or private purposes.',
                value: 1
            }, {
                h1: 'Multipager',
                h3: 'Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service & its benefits.',
                value: 2
            }, {
                h1: 'Shop',
                h3: 'Your sales will be a breeze, whether using Shopify, Etsy or a payment system of your choice, your customers will LOVE the design!',
                value: 3
            }, {
                h1: 'Renew',
                h3: 'Your old site needs a new polish, but you dont know how? then this selection is the right one for you!',
                value: 4
            }, ],
            inputs: [{
                label: 'Forename',
                value: '',
            }, {
                label: 'Surname',
                value: '',
            }],
            inputValue: null,
        }
    },
    methods: {
        saveValue(value) {
            this.inputValue = value;
            this.step++;
        },
    },
    computed: {
        combinedValues() {
            return `Forename: ${this.inputs[0].value}, Surname: ${this.inputs[1].value}, Selection: ${this.inputValue}`;
        },
        submitForm() {
            this.$refs.form.submit();
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
    <form name="contact" method="POST" netlify>
      <textarea v-model="combinedValues"></textarea>
      <input type="text" name="data" v-model="combinedValues">
    </form>
     <div class="section">
        <div class="header">
           <h1>{{ step }}/3</h1>
        </div>
        <div class="order-now">
           <div class="pSelect" v-show="step === 1">
              <div class="order-opt" v-for="(item, index) in items" :key="index" v-on:click="saveValue(item.value)">
                 <h1>{{ item.h1 }}</h1>
                 <h3>{{ item.h3 }}</h3>
              </div>
           </div>
           <div class="uInput" v-show="step === 2">
              <div class="uInterface">
                 <div class="order-inf" v-for="(input, index) in inputs" :key="index">
                    <label>{{ input.label }}
                      <input type="text" :name="input.label" v-model="input.value" placeholder=" ...">
                    </label>
                 </div>
              </div>
           </div>
           <div class="uInput" v-show="step === 3">

           </div>
        </div>
     </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  position: absolute;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

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

