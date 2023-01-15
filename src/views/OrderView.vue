<script>
import anime from 'animejs';
import axios from "axios";

export default {

    data() {
        return {
            step: 1,

            items: [{
                h1: 'Onepager',
                h3: 'A beautiful One-Page Website for information of all kinds, whether for business or private purposes.',
            }, {
                h1: 'Multipager',
                h3: 'Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service & its benefits.',
            }, {
                h1: 'Shop',
                h3: 'Your sales will be a breeze, whether using Shopify, Etsy or a payment system of your choice, your customers will LOVE the design!',
            }, {
                h1: 'Renew',
                h3: 'Your old site needs a new polish, but you dont know how? then this selection is the right one for you!',
            }, ],

            form: {
                product: '',
                forename: '',
                description: '',
            },
        }
    },

    methods: {
        select(value) {
            this.form.product = value;
            anime({
                targets: '.order-now',
                opacity: [1, 0],
                duration: 100,
                direction: 'linear',
                easing: 'easeInQuad',
                complete: () => {
                    this.step++;
                    anime({
                        targets: '.order-now',
                        opacity: [0, 1],
                        duration: 100,
                        direction: 'linear',
                        easing: 'easeInQuad',
                    });
                }
            });
        },

        next() {
            anime({
                targets: '.order-now',
                opacity: [1, 0],
                duration: 100,
                direction: 'linear',
                easing: 'easeInQuad',
                complete: () => {
                    this.step++;
                    anime({
                        targets: '.order-now',
                        opacity: [0, 1],
                        duration: 100,
                        direction: 'linear',
                        easing: 'easeInQuad',
                    });
                }
            });
        },

        back() {
            anime({
                targets: '.order-now',
                opacity: [1, 0],
                duration: 100,
                direction: 'linear',
                easing: 'easeInQuad',
                complete: () => {
                    this.step--;
                    anime({
                        targets: '.order-now',
                        opacity: [0, 1],
                        duration: 100,
                        direction: 'linear',
                        easing: 'easeInQuad',
                    })
                }
            })
        },

        encode(data) {
            return Object.keys(data)
                .map(
                    key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },

        handleSubmit() {
            const axiosConfig = {
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            axios.post(
                    "/",
                    this.encode({
                        "form-name": "order-now",
                        ...this.form
                    }),
                    axiosConfig
                )
                .then(() => {
                    this.$router.push('thanks')
                })
                .catch(() => {
                    this.$router.push('sorry')
                });
        }
    },

    mounted() {
        anime({
            targets: '.order-btn',
            opacity: [0, 1],
            duration: 100,
            translateX: [-50, 0],
            direction: 'linear',
            easing: 'easeInQuad',
            delay: anime.stagger(100),
        });
    },
}
</script>

<template>
  <div class="container">
     <div class="section">

        <div class="header">
           <h1>{{ step }}/4</h1>
        </div>

        <div class="order-now">
           <div class="select" v-show="step === 1">
              <div class="order-btn" v-for="(item, index) in items" :key="index" v-on:click="select(item.h1)">
                 <h1>{{ item.h1 }}</h1>
                 <h3>{{ item.h3 }}</h3>
              </div>
           </div>

           <div class="input" v-show="step === 2">
              <div class="interface">
                 <div class="user-input">
                    <label>Name
                    <input type="text" v-model="form.forename" placeholder=" ...">
                    </label>
                 </div>
              </div>
              <button class="next" @click="next">Procede</button>
              <button class="correction" @click="back">Back</button>
           </div>

           <div class="input" v-show="step === 3">
              <div class="interface">
                 <label class="area">Describe your Website in a few Words
                 <textarea v-model="form.description"></textarea>
                 </label>
              </div>
              <button class="next" @click="next">Procede</button>
              <button class="correction" @click="back">Back</button>
           </div>

           <div class="submit" v-show="step === 4">
              <form name="order-now" @submit.prevent="handleSubmit">
                 <textarea name="message" disabled></textarea>
                 <button class="next">Send</button>
                 <button type="button" class="correction" @click="back">Back</button>
              </form>
           </div>

        </div>
     </div>
  </div>
</template>

<style scoped>
button {
  margin-bottom: 0.5rem;
}

button.next {
  background-color: rgb(98, 0, 255);
  font-family: inherit;
  color: white;
  font-size: 28px;
  border: 0;
}

button.correction {
  background-color: rgba(255, 187, 0, 1);
  font-family: inherit;
  color: white;
  font-size: 28px;
  border: 0;
}


.container {
  display: -ms-grid;
  display: grid;
}

.section .header {
  padding: 1rem;
  padding-bottom: 0;
}

.section .header h1 {
  font-weight: 600;
  text-align: left;
}

.order-now {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.select {
  padding: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  height: auto;
}

.input {
  display: grid;
  padding: 1rem;
  height: 100%;
}

.submit,
form {
  display: grid;
  text-align: center;
  padding: 0.5rem 0.5rem;
}

.submit textarea {
  background-color: rgba(30, 30, 30, 0.5);
  font-family: inherit;
  color: white;
  resize: none;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 24px;
  padding: 0.5rem 1rem;
  height: 500px;
  outline: 0;
  border: 0;
}

.interface {
  display: grid;
}

.interface label {
  position: static;
  display: block;
  border-radius: 5px;
  font-size: 14px;
  height: 70px;
  padding: 0.5rem 1rem;
  width: auto;
  background: linear-gradient(10deg, rgb(27, 27, 27) 10%, rgba(15, 129, 255, 1) 100%);
}

.interface input {
  background: rgba(20, 20, 20, 0.3);
  color: rgb(255, 255, 255);
  padding: 1rem 0rem 1rem 0.5rem;
  display: grid;
  border-radius: 5px;
  font-size: 24px;
  top: 5px;
  width: 100%;
  outline: none;
  height: 0;
  border: 0;
}

.interface label.area {
  position: static;
  display: block;
  border-radius: 5px;
  font-size: 14px;
  height: 500px;
  padding: 0.5rem 1rem;
  width: auto;
  background: linear-gradient(10deg, rgb(27, 27, 27) 10%, rgb(255, 0, 100) 100%);
  margin-bottom: 0.5rem;
}

.interface textarea {
  background: rgba(20, 20, 20, 0.3);
  color: rgb(255, 255, 255);
  padding: 0rem 0rem 1rem 0.5rem;
  display: grid;
  border-radius: 5px;
  font-size: 24px;
  height: 460px;
  top: 5px;
  width: 100%;
  outline: none;
  border: 0;
  resize: none;
}


.user-input {
  margin-bottom: 1rem;
}

.select svg {
  margin: 5rem;
}

.order-btn {
  background: linear-gradient(20deg, rgba(60, 90, 250, 0.7) 0%, rgba(250, 70, 150, 0.7) 100%);
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.order-btn h1 {
  text-align: left;
  font-weight: 300;
}

.order-btn h3 {
  min-width: 100%;
  word-wrap: break-word;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.order-btn .select:last-child {
  margin: 0;
}

@media (max-width: 64em) {

  .section .header h1 {
    text-align: center;
  }

  .select {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1rem auto;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
  }

}

@media (max-width: 32em) {
  .select {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: inherit;
    grid-template-columns: inherit;
  }
}
</style>

