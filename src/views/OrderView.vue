<script>
import anime from 'animejs';
import axios from "axios";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default {
  components: { ColorPicker },
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
                type: '',
                forename: '',
                surname: '',
                email: '',
                number: '',
                scheme: 'black',
                imagination: '',
            },
        }
    },

    computed: {
      allFormValues: function() {
        return `Type: ${this.form.type}\nForename: ${this.form.forename}\nSurname: ${this.form.surname}\nE-Mail: ${this.form.email}\nPhone number: ${this.form.number}\nColor Scheme: ${this.form.scheme}\nDescription*\n${this.form.imagination}`
      }
    },

    methods: {
        select(value) {
            this.form.type = value;
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
                    this.message;
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
            targets: '.order-opt',
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
           <h1>{{ step }}/5</h1>
        </div>

        <div class="order-now">
           <div class="select" v-show="step === 1">
              <div class="order-opt" v-for="(item, index) in items" :key="index" v-on:click="select(item.h1)">
                 <h1>{{ item.h1 }}</h1>
                 <h3>{{ item.h3 }}</h3>
              </div>
           </div>

           <div class="input" v-show="step === 2">
              <div class="interface">
                 <div class="order-input">
                    <label>Forename
                    <input type="text" :name="form.forename" v-model="form.forename" placeholder="...">
                    </label>
                 </div>
                 <div class="order-input">
                    <label>Surname
                    <input type="text" :name="form.surname" v-model="form.surname" placeholder="...">
                    </label>
                 </div>
                 <div class="order-input">
                    <label>E-Mail
                    <input type="text" :name="form.email" v-model="form.email" placeholder="...">
                    </label>
                 </div>
                 <div class="order-input">
                    <label>Phone number
                    <input type="text" :name="form.number" v-model="form.number" placeholder="...">
                    </label>
                 </div>
              </div>
              <button class="next" @click="next">Procede</button>
              <button class="correction" @click="back">back</button>
           </div>

           <div class="input" v-show="step === 3">
              <div :style="{ 'background-color': form.scheme }" class="color-scheme">
                <div class="color-picker">
                  <color-picker isWidget="true" v-model:pureColor="form.scheme"/>
                </div>
              </div>
              <button class="next" @click="next">Procede</button>
              <button class="correction" @click="back">back</button>
           </div>

           <div class="input" v-show="step === 4">
              <div class="interface">
                 <div class="order-input">
                    <label class="area">Describe your Website in a few words!
                    <textarea :name="form.imagination" v-model="form.imagination" type="text" placeholder="..."></textarea>
                    </label>
                 </div>
              </div>
              <button class="next" @click="next">Procede</button>
              <button class="correction" @click="back">back</button>
           </div>

           <div class="submit" v-show="step === 5">
              <form name="order-now" @submit.prevent="handleSubmit">
                 <textarea v-model="allFormValues" disabled></textarea>
                 <button class="next">Send</button>
                 <button type="button" class="correction" @click="back">back</button>
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
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 28px;
}

button.correction {
  background-color: rgba(255, 187, 0, 1);
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 28px;
}

.container {
  display: -ms-grid;
  display: grid;
}

.section .header {
  padding-bottom: 0;
}

.section .header h1 {
  font-weight: 600;
  text-align: left;
}

.order-now {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.select {
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: auto;
  padding: 1rem;
}

.input {
  display: grid;
  height: 100%;
  padding: 1rem;
}

.submit,
form {
  display: grid;
  padding: 0.5rem 0.5rem;
  text-align: center;
}

.submit textarea {
  background-color: rgba(30, 30, 30, 0.5);
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 24px;
  height: 500px;
  line-height: 1.5;
  margin-bottom: 1rem;
  outline: 0;
  padding: 0.5rem 1rem;
  resize: none;
}

.interface {
  display: grid;
}

.interface label {
  background: linear-gradient(20deg, rgba(60, 90, 250, 0.7) 0%, rgba(250, 70, 150, 0.7) 100%);
  border-radius: 5px;
  display: block;
  font-size: 14px;
  height: 70px;
  padding: 0.5rem 1rem;
  position: static;
  width: auto;
}

.interface input {
  background: rgba(20, 20, 20, 0.3);
  border-radius: 5px;
  border: 0;
  color: rgb(255, 255, 255);
  display: grid;
  font-size: 24px;
  height: 0;
  outline: none;
  padding: 1rem 0rem 1rem 0.5rem;
  top: 5px;
  width: 100%;
}

.interface label.area {
  background: linear-gradient(20deg, rgba(60, 90, 250, 0.7) 0%, rgba(250, 70, 150, 0.7) 100%);
  border-radius: 5px;
  display: block;
  font-size: 14px;
  height: 500px;
  position: static;
  width: auto;
}

.interface textarea {
  background: rgba(20, 20, 20, 0.3);
  border-radius: 5px;
  border: 0;
  color: rgb(255, 255, 255);
  display: grid;
  font-size: 24px;
  height: 460px;
  outline: none;
  padding: 0rem 0rem 1rem 0.5rem;
  resize: none;
  top: 5px;
  width: 100%;
}

.order-input {
  margin-bottom: 1rem
}

.select svg {
  margin: 5rem;
}

.color-scheme {
  display: grid;
  height: 500px;
  margin-bottom: 1rem;
}

.color-scheme .color-picker {
  justify-self: center;
  margin: auto 0;
  z-index: 0;
}

.order-opt {
  background: linear-gradient(20deg, rgba(60, 90, 250, 0.7) 0%, rgba(250, 70, 150, 0.7) 100%);
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  width: 100%;
}

.order-opt h1 {
  font-weight: 300;
  text-align: left;
}

.order-opt h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  min-width: 100%;
  text-align: center;
  word-wrap: break-word;
}

.order-opt .select:last-child {
  margin: 0;
}

@media (max-width: 64em) {
  .section .header h1 {
    text-align: center;
  }

  .select {
    -ms-grid-columns: auto 1rem auto;
    display: -ms-grid;
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: auto auto;
  }
}

@media (max-width: 32em) {
  .select {
    -ms-grid-columns: inherit;
    display: -ms-grid;
    display: grid;
    grid-template-columns: inherit;
  }
}
</style>

