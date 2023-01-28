<script>
import anime from "animejs";
import axios from "axios";

import {
    ColorPicker
} from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

export default {
    components: {
        ColorPicker,
    },
    data() {
        return {
            step: 1,

            items: [{
                    h1: "Onepager",
                    h3: "A beautiful One-Page Website for information of all kinds, whether for business or private purposes.",
                },
                {
                    h1: "Multipager",
                    h3: "Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service & its benefits.",
                },
                {
                    h1: "Shop",
                    h3: "Your sales will be a breeze, whether using Shopify, Etsy or a payment system of your choice, your customers will LOVE the design!",
                },
                {
                    h1: "Renew",
                    h3: "Your old site needs a new polish, but you dont know how? then this selection is the right one for you!",
                },
            ],

            form: {
                type: "",
                forename: "",
                surname: "",
                email: "",
                number: "",
                color: "#007FFF",
                imagination: "",
            },
        };
    },

    computed: {
        stepText() {
            switch (this.step) {
                case 1:
                    return "Choose your product";
                case 2:
                    return "Add your contact info";
                case 3:
                    return "Select a preferred color";
                case 4:
                    return "Describe your website in a few words";
                case 5:
                    return "Submit your request";
            }
        },
    },

    methods: {
        btn(event) {
            anime({
                targets: ".order-now",
                opacity: [1, 0],
                easing: "linear",
                duration: 125,
                complete: () => {
                    if (event.target.id === "next-btn") {
                        this.step++
                    } else if (event.target.id === "prev-btn") {
                        this.step--
                    }
                    anime({
                        targets: ".order-now",
                        opacity: [0, 1],
                        easing: "linear",
                        duration: 125,
                    });
                },
            });
        },

        select(x) {
            this.form.type = x;
            this.btn({
                target: {
                    id: "next-btn",
                },
            });
        },

        changeColor(color) {
            const {
                r,
                g,
                b,
                a
            } = color.rgba
            this.form.color = `rgba(${r}, ${g}, ${b}, ${a})`
        },

        encode(data) {
            return Object.keys(data)
                .map(
                    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },

        handleSubmit() {
            const axiosConfig = {
                header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            };
            axios
                .post(
                    "/",
                    this.encode({
                        "form-name": "order-now",
                        ...this.form,
                    }),
                    axiosConfig
                )
                .then(() => {
                    this.$router.push("thanks");
                })
                .catch(() => {
                    this.$router.push("sorry");
                });
        }
    },

    mounted() {
        anime({
            targets: ".order-opt",
            opacity: [0, 1],
            duration: 100,
            translateX: [-50, 0],
            direction: "linear",
            easing: "easeInQuad",
            delay: anime.stagger(100),
        });
    },
};
</script>

<template>
    <div class="container">
        <div class="section">
            <div class="header">
                <h1>{{ stepText }}</h1>
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
                            <label>
                                Forename<span>*</span>
                                <input type="text" id="forename" v-model="form.forename" placeholder="..." />
                            </label>
                        </div>
                        <div class="order-input">
                            <label>
                                Surname<span>*</span>
                                <input type="text" id="surname" v-model="form.surname" placeholder="..." />
                            </label>
                        </div>
                        <div class="order-input">
                            <label>
                                E-Mail<span>*</span>
                                <input type="text" id="email" v-model="form.email" placeholder="..." />
                            </label>
                        </div>
                        <div class="order-input">
                            <label>
                                Phone number
                                <input type="text" id="number" v-model="form.number" placeholder="..." />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="input" v-show="step === 3">
                    <div :style="{background: form.color}" class="color-scheme">
                        <div class="color-picker">
                            <ColorPicker style="width: 218px;" theme="light" :color="form.color" :sucker-hide="true" @changeColor="changeColor" />
                        </div>
                    </div>
                </div>
                <div class="input" v-show="step === 4">
                    <div class="interface">
                        <div class="order-input">
                            <label class="textarea">
                                Description <span>*</span>
                                <textarea id="description" v-model="form.imagination" type="text" placeholder="..."></textarea>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="submit" v-show="step === 5">
                    <form name="order-now" @submit.prevent="handleSubmit">
                        <label>Type</label>
                        <input v-model="form.type" disabled type="text" placeholder="..." />
                        <label>Forename</label>
                        <input v-model="form.forename" disabled type="text" placeholder="..." />
                        <label>Surname</label>
                        <input v-model="form.surname" disabled type="text" placeholder="..." />
                        <label>E-Mail</label>
                        <input v-model="form.email" disabled type="text" placeholder="..." />
                        <label>Phone number</label>
                        <input v-model="form.number" disabled type="text" placeholder="—" />
                        <label>Color-Scheme</label>
                        <input v-model="form.color" disabled type="text" placeholder="..." />
                        <label>Description</label>
                        <textarea v-model="form.imagination" disabled type="text" placeholder="..."></textarea>
                    </form>
                </div>
            </div>
            <div class="button" v-if="step === 2 || step === 3 || step === 4 || step === 5">
                <button id="prev-btn" class="prev" @click="btn">
                    <i class="fa-duotone fa-hand-point-left"></i>
                </button>
                <button v-if="step === 5" class="next" @click="handleSubmit">
                    <i class="fa-duotone fa-paper-plane"></i>
                </button>
                <button v-else-if="step" id="next-btn" class="next" @click="btn">
                    <i class="fa-duotone fa-hand-point-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
}

button > * {
  pointer-events: none;
}

button {
  width: 100%;
}

button.next {
  background-color: rgb(98, 0, 255);
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 28px;
}

button.next:disabled {
  background-color: rgba(98, 0, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
}

button.prev {
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
  display: -ms-grid;
  display: grid;
  height: 100%;
  padding: 1rem 1rem 0 1rem;
}

.submit,
form {
  display: -ms-grid;
  display: grid;
  padding: 0.5rem 0.5rem;
  text-align: center;
}

.submit label {
  text-align: left;
  font-size: 24px;
  bottom: 5px;
}

.submit input {
  background-color: rgba(15, 15, 15, 1);
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 18px;
  height: 35px;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  outline: 0;
  padding: 0 1rem;
  resize: none;
}

.submit textarea {
  background-color: rgba(15, 15, 15, 1);
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 24px;
  height: auto;
  line-height: 1.5;
  margin-bottom: 1rem;
  outline: 0;
  padding: 0.5rem 1rem;
  resize: none;
}

.interface {
  display: -ms-grid;
  display: grid;
}

.order-input label {
  background: -webkit-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -moz-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -o-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: linear-gradient(
    20deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  font-size: 14px;
  height: 70px;
  padding: 0.5rem 1rem;
  position: static;
  width: auto;
}

.order-input label span {
  color: rgba(255, 20, 20, 0.7);
  font-size: 1.5rem;
  position: absolute;
  margin: -3px 0 0 1px;
}

.order-input label.textarea {
  background: -webkit-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -moz-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -o-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: linear-gradient(
    20deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  font-size: 14px;
  height: 500px;
  position: static;
  width: auto;
}

.order-input input {
  background: rgba(20, 20, 20, 0.3);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
  color: rgb(255, 255, 255);
  display: -ms-grid;
  display: grid;
  font-size: 24px;
  height: 0;
  outline: none;
  padding: 1rem 0rem 1rem 0.5rem;
  top: 5px;
  width: 100%;
}

.order-input textarea {
  background: rgba(20, 20, 20, 0.3);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
  color: rgb(255, 255, 255);
  display: -ms-grid;
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
  margin-bottom: 1rem;
}

.select svg {
  margin: 5rem;
}

.color-scheme {
  display: -ms-grid;
  display: grid;
  height: 500px;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.color-scheme .color-picker {
  -ms-grid-column-align: center;
  justify-self: center;
  margin: auto 0;
  z-index: 0;
}

.order-opt {
  background: -webkit-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -moz-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: -o-linear-gradient(
    70deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  background: linear-gradient(
    20deg,
    rgba(60, 90, 250, 0.7) 0%,
    rgba(250, 70, 150, 0.7) 100%
  );
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  width: 100%;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: 0.3s background-color;
  -o-transition: 0.3s background-color;
  -moz-transition: 0.3s background-color;
  transition: 0.3s background-color;
}

.order-opt:hover {
  background-color: red;
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
    -ms-grid-columns: auto 1rem auto;
    grid-template-columns: auto auto;
  }
}

@media (max-width: 32em) {
  .select {
    -ms-grid-columns: inherit;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: inherit;
    grid-template-columns: inherit;
  }
}
</style>
