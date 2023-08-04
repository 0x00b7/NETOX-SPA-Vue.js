<template>
  <div class="container">
    <div class="header">
      <h1>Discover our services</h1>
    </div>
    <div class="section">
      <div class="showcase">
        <div class="carousel">
          <div class="steps">
            <div class="percentage" :style="{
              width: (100 * (sliderCount + 1)) / slider.length + '%',
            }"></div>
          </div>
          <button id="prev-btn" v-if="!sliding" @click="sliderBtn">
            <i class="fa-solid fa-left"></i>
          </button>
          <div class="content" v-show="sliderCount === index" v-for="(img, index) in slider" :key="index">
            <img :src="img.path" />
            <div class="text-wrapper">
              <h2>{{ img.name }}</h2>
            </div>
          </div>
          <button id="next-btn" v-if="!sliding" @click="sliderBtn">
            <i class="fa-solid fa-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

import image from "../assets/logo.svg"

export default {
  data() {
    return {
      sliding: false,
      sliderCount: 0,
      slider: [
        {
          name: "Web Development",
          path: image
        }
      ],
    };
  },
  methods: {
    sliderBtn(event) {
      this.sliding = true;
      if (event.target.id === "next-btn") {
        anime({
          targets: ".content > *",
          easing: "linear",
          opacity: [1, 0],
          translateX: [0, 50],
          duration: 100,
          delay: anime.stagger(100),
          complete: () => {
            this.sliderCount = (this.sliderCount + 1) % this.slider.length;
            anime({
              targets: ".content > *",
              easing: "linear",
              opacity: [0, 1],
              translateX: [-50, 0],
              duration: 100,
              complete: () => {
                this.sliding = false;
              },
            });
          },
        });
      } else if (event.target.id === "prev-btn") {
        anime({
          targets: ".content > *",
          easing: "linear",
          opacity: [1, 0],
          translateX: [0, -50],
          duration: 100,
          delay: anime.stagger(100),
          complete: () => {
            this.sliderCount =
              (this.sliderCount + this.slider.length - 1) % this.slider.length;
            anime({
              targets: ".content > *",
              easing: "linear",
              opacity: [0, 1],
              translateX: [50, 0],
              duration: 100,
              complete: () => {
                this.sliding = false;
              },
            });
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.showcase {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  margin: 5rem;
}

.showcase .carousel {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
}

.showcase .carousel .steps {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.showcase .carousel .steps .percentage {
  background-color: rgb(170, 255, 0);
  padding: 0.1rem;
  -webkit-transition: width 500ms;
  -o-transition: width 500ms;
  -moz-transition: width 500ms;
  transition: width 500ms;
}

.showcase .carousel .content {
  display: -ms-grid;
  display: grid;
}

.showcase .carousel .content img {
  -ms-grid-column-align: center;
  justify-self: center;
  max-width: 100%;
  max-height: 100%;
}

.showcase .carousel .content .text-wrapper h2 {
  font-size: larger;
  text-align: center;
  font-weight: 100;
}

button {
  background: transparent;
  color: white;
  border: 0;
  width: 64px;
  height: 64px;
  text-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 100%;
}

#prev-btn {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

#next-btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

button>* {
  pointer-events: none;
}

@media (max-width: 64em) {
  .showcase {
    margin: 0;
    display: -ms-grid;
    display: grid;
  }

  .showcase .hero-showcase {
    text-align: center;
  }
}

@media (max-width: 32em) {}
</style>
