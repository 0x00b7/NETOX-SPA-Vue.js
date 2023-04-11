<template>
  <div class="container">
    <div class="section">
      <div class="header">
        <h1>{{ stepText }}</h1>
      </div>

      <div
        class="percentage"
        :style="{ width: progressPercentage + '%' }"
      ></div>

      <div class="section-container">
        <div class="step" v-show="step === 1">
          <div
            class="select-box"
            v-for="(item, index) in items"
            :key="index"
            v-on:click="select(item.h1)"
          >
            <h1>{{ item.h1 }}</h1>
            <h3>{{ item.h3 }}</h3>
          </div>
        </div>

        <div class="step" v-show="step === 2">
          <div class="order-field">
            <label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                placeholder="Company"
              />
            </label>
          </div>
          <div class="order-field">
            <label>
              <input
                type="text"
                id="forename"
                v-model="form.forename"
                placeholder="First name *"
              />
            </label>
          </div>
          <div class="order-field">
            <label>
              <input
                type="text"
                id="surname"
                v-model="form.surname"
                placeholder="Last name *"
              />
            </label>
          </div>
          <div class="order-field">
            <label>
              <input
                type="text"
                id="email"
                v-model="form.email"
                placeholder="Email *"
              />
            </label>
          </div>
          <div class="order-field">
            <label>
              <input
                type="text"
                id="number"
                v-model="form.number"
                placeholder="Phone number"
              />
            </label>
          </div>
        </div>
        <div class="step" v-show="step === 3">
          <div :style="{ background: form.scheme }" class="select-scheme">
            <div class="color-picker">
              <ColorPicker
                style="width: 218px"
                theme="light"
                :color="form.scheme"
                :sucker-hide="true"
                @changeColor="changeColor"
              />
            </div>
          </div>
        </div>

        <div class="step" v-show="step === 4">
          <div class="order-field">
            <label>
              <textarea
                v-model="form.imagination"
                type="text"
                placeholder="Write a brief overview of the website you would like us to create for you."
              ></textarea>
            </label>
          </div>
        </div>

        <div class="step" v-show="step === 5">
          <form class="resume" name="order-now" @submit.prevent="handleSubmit">
            <label>TYPE</label>
            <input v-model="form.type" disabled type="text" placeholder="—" />
            <label>COMPANY</label>
            <input
              v-model="form.company"
              disabled
              type="text"
              placeholder="—"
            />
            <label>FORENAME</label>
            <input
              v-model="form.forename"
              disabled
              type="text"
              placeholder="—"
            />
            <label>SURNAME</label>
            <input
              v-model="form.surname"
              disabled
              type="text"
              placeholder="—"
            />
            <label>EMAIL</label>
            <input v-model="form.email" disabled type="text" placeholder="—" />
            <label>PHONE-NUMBER</label>
            <input v-model="form.number" disabled type="text" placeholder="—" />
            <label>HUE</label>
            <input v-model="form.scheme" disabled type="text" placeholder="—" />
            <label>DESCRIPTION</label>
            <textarea
              v-model="form.imagination"
              disabled
              type="text"
              placeholder="—"
            >
            </textarea>
          </form>
        </div>
      </div>
      <div
        class="button"
        v-if="step === 2 || step === 3 || step === 4 || step === 5"
      >
        <button id="prev-btn" class="prev" @click="btn">
          <i class="fa-solid fa-hand-point-left"></i>
        </button>
        <button v-if="step === 5" class="next" @click="handleSubmit">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
        <button v-else-if="step" id="next-btn" class="next" @click="btn">
          <i class="fa-solid fa-hand-point-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import axios from "axios";

import {
    ColorPicker
} from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

export default {
    components: {
        ColorPicker,
    },
    data() {
        return {
            sliding: false,
            step: 1,

            items: [{
                    h1: "Onepager",
                    h3: "A beautiful one-page website for providing information of all types, whether for business or personal use.",
                },
                {
                    h1: "Multipager",
                    h3: "Whenever you need a little extra space, this Website offers up to 9 pages with extensive info about your product, service and it's benefits.",
                },
                {
                    h1: "Shop",
                    h3: "Your sales will be effortless with your choice of Shopify, or any other payment system. Your customers will love the design!",
                },
                {
                    h1: "Renew",
                    h3: "If you need to give your old website a fresh look but don't know how, this option is perfect for you.",
                },
            ],

            form: {
                type: "",
                forename: "",
                surname: "",
                email: "",
                number: "",
                scheme: "rgba(160, 255, 0, 1)",
                imagination: "",
            }
        };
    },

    computed: {
        progressPercentage() {
            return Math.round((this.step / 5) * 100);
        },
        stepText() {
            switch (this.step) {
                case 1:
                    return "Choose a Service";
                case 2:
                    return "Add Your Info";
                case 3:
                    return "Select a Hue";
                case 4:
                    return "Share Your Vision";
                case 5:
                    return "Send Order";
            }
            return 0;
        },
    },

    methods: {
        btn(event) {
            document.getElementById("app").scrollIntoView();
            anime({
                targets: ".section-container",
                opacity: [1, 0],
                easing: "linear",
                duration: 125,
                complete: () => {
                    if (event.target.id === "next-btn") {
                        this.step++;
                    } else if (event.target.id === "prev-btn") {
                        this.step--;
                    }
                    anime({
                        targets: ".section-container",
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
            } = color.rgba;
            this.form.scheme = `rgba(${r}, ${g}, ${b}, ${a})`;
        },

        encode(data) {
            return Object.keys(data)
                .map(
                    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },

        async handleSubmit() {
            const data = [JSON.stringify(this.form)];
            const headers = {
                "Authorization": "N3T0X",
                "Content-Type": "application/json",
                "access-control-allow-origin": "https://netox.ws",
            };
            const options = {
                headers
            };
            await axios.post('https://armbush.lehle-gernot2441.workers.dev/', data, options)
                .then(() => {
                    this.$router.push("thanks");
                })
                .catch(() => {
                  console.log(data);
                    this.$router.push("thanks");
                });
        },
    },

    mounted() {
        anime({
            targets: ".select-box",
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

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}
.section .header h1 {
  font-weight: 600;
  text-align: left;
}

.percentage {
  background: hsla(347, 100%, 50%, 1);
  background: -o-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  padding: 0.1rem;
  -webkit-transition: width 500ms;
  -o-transition: width 500ms;
  -moz-transition: width 500ms;
  transition: width 500ms;
  -webkit-animation: placeholder 2s linear infinite;
  -moz-animation: placeholder 2s linear infinite;
  -o-animation: placeholder 2s linear infinite;
  animation: placeholder 2s linear infinite;
  -webkit-mask-image: -webkit-linear-gradient(
    320deg,
    rgba(55, 0, 255, 0.8) 70%,
    rgba(255, 0, 25, 1) 75%,
    rgba(55, 0, 255, 0.8) 95%
  );
  mask-image: linear-gradient(
    320deg,
    rgba(55, 0, 255, 0.8) 70%,
    rgba(255, 0, 25, 1) 75%,
    rgba(55, 0, 255, 0.8) 80%
  );
  -webkit-mask-size: 200% 100%;
  mask-size: 200% 100%;
}

@-webkit-keyframes placeholder {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}

@-moz-keyframes placeholder {
  100% {
    mask-position: -200% 0%;
  }
}

@-o-keyframes placeholder {
  100% {
    mask-position: -200% 0%;
  }
}

@keyframes placeholder {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}

.step:first-child {
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: auto;
  padding: 1rem;
  min-height: inherit;
}
.select-box {
  background: linear-gradient(
    20deg,
    rgba(60, 90, 250, 0.8) 0%,
    rgba(250, 70, 150, 0.8) 100%
  );
  -ms-grid-column-align: center;
  justify-self: center;
  margin: 0.5rem;
  padding: 1rem;
  width: 100%;
  border-radius: 1rem;
  -webkit-transition: 0.3s background-color;
  -o-transition: 0.3s background-color;
  -moz-transition: 0.3s background-color;
  transition: 0.3s background-color;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.select-box:hover {
  background-color: rgba(255, 0, 0, 1);
}
.select-box h1 {
  font-weight: 500;
  text-align: left;
}
.select-box h3 {
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  min-width: 100%;
  text-align: center;
  word-wrap: break-word;
}
.select-scheme {
  display: -ms-grid;
  display: grid;
  height: 500px;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  border-radius: 1rem;
  margin: 1rem;
}
.color-picker {
  -ms-grid-column-align: center;
  justify-self: center;
  margin: auto 0;
}
.order-field {
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  border-radius: 1rem;
  background: hsla(347, 100%, 50%, 1);
  background: -o-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    hsla(347, 100%, 50%, 1) 0%,
    hsla(221, 45%, 73%, 1) 100%,
    hsla(220, 78%, 29%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF0037", endColorstr="#9BAFD9", GradientType=1 );
  -ms-grid-column-align: center;
  justify-self: center;
  display: -ms-grid;
  display: grid;
  margin: 1rem;
  padding: 0.5rem;
}

.resume {
  text-align: left;
  margin: 0.5rem;
}

.resume input {
  color: rgba(255, 255, 255, 0.7);
  margin: 0rem 0 0.5rem 0;
}

@media (max-width: 64em) {
  .section .header h1 {
    text-align: center;
  }
  .step:first-child {
    -ms-grid-columns: auto 1rem auto;
    display: -ms-grid;
    display: grid;
    grid-column-gap: 1rem;
    -ms-grid-columns: auto 1rem auto;
    grid-template-columns: auto auto;
  }
}
@media (max-width: 32em) {
  .step:first-child {
    -ms-grid-columns: inherit;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: inherit;
    grid-template-columns: inherit;
  }
}

*::placeholder {
  font-weight: bold;
  opacity: 0.7;
  font-size: 18px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
}

label {
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  display: -ms-grid;
  display: grid;
}

label span {
  bottom: 3.5px;
}

textarea,
input {
  font-family: Titillium Web;
  background: rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0;
  color: white;
  outline: none;
  font-size: 24px;
  resize: vertical;
  width: 100%;
  font-weight: 300;
  transition: all 150ms;
}

textarea:focus,
input:focus {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
}

form {
  display: -ms-grid;
  display: grid;
  padding: 0.5rem 0.5rem;
  text-align: center;
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1rem;
}
button > * {
  pointer-events: none;
}

button {
  width: 100%;
  font-size: 28px;
  border: 0;
  color: white;
}

button.next {
  background-color: rgb(100, 0, 255);
  -webkit-border-top-right-radius: 0.5rem;
  -moz-border-radius-topright: 0.5rem;
  border-top-right-radius: 0.5rem;
  -webkit-border-bottom-right-radius: 0.5rem;
  -moz-border-radius-bottomright: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

button.next:disabled {
  background-color: rgba(100, 0, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
}

button.prev {
  -webkit-border-top-left-radius: 0.5rem;
  -moz-border-radius-topleft: 0.5rem;
  border-top-left-radius: 0.5rem;
  -webkit-border-bottom-left-radius: 0.5rem;
  -moz-border-radius-bottomleft: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: rgba(255, 185, 0, 1);
}
</style>
