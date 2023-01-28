<script>
import anime from "animejs";

export default {
    data() {
        return {
            sliderCount: 0,
            slider: [{
                    path: 'src\\assets\\images\\pH\\SF.png',
                    name: "Netox has the experience and expertise to create a custom web-application on Shopify that fits the unique needs of your business. Whether you're just starting out or looking to take your existing business to the next level, Netox can help. With Netox, you can have a professional, user-friendly online store up and running in no time."
                },
                {
                    path: 'src\\assets\\images\\pH\\Lorem.png',
                    name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                }
            ]
        }
    },
    methods: {
        sliderSwipe_L() {
          this.sliderBtn({
                target: {
                    id: "prev-btn",
                },
            });
        },

        sliderSwipe_R() {
          this.sliderBtn({
                target: {
                    id: "next-btn",
                },
            });
        },

        sliderBtn(event) {
            anime({
                targets: '.image > *',
                easing: 'linear',
                opacity: [1, 0],
                duration: 250,
                delay: anime.stagger(100),
                complete: () => {
                    if (event.target.id === "next-btn") {
                        this.sliderCount = (this.sliderCount + 1) % this.slider.length
                    } else if (event.target.id === "prev-btn") {
                        this.sliderCount = (this.sliderCount + this.slider.length - 1) % this.slider.length
                    }
                    anime({
                        targets: '.image > *',
                        easing: 'linear',
                        opacity: [0, 1],
                        duration: 250,
                        delay: anime.stagger(100),
                    })
                }
            })
        }
    },
    mounted() {
        anime({
            targets: '.hero-text > *',
            duration: 1500,
            opacity: [0, 1],
            translateX: [-50, 0]
        })
    }
}
</script>

<template>
  <div class="container">
     <div class="header">
        <h1>Know our vision</h1>
     </div>
     <div class="section">
        <div class="showcase">
           <div class="hero-showcase">
              <i class="fa-duotone fa-star-shooting"></i>
           </div>
           <div class="hero-text">
              <h1>Not just a simple website!</h1>
              <h2>We create innovative web-applications and UX designs at an affordable price. <br/><br/> Our code, primarily based on Vue.js and JavaScript, is highly professional and uses the best solutions to create a masterpiece for our clients. <br/><br/> We also use Font-Awesome, a top-notch SVG icon library, to enhance the overall look and feel of our designs.</h2>
           </div>
        </div>
        <div class="showcase">
           <div class="carousel" v-touch:swipe.left="sliderSwipe_L" v-touch:swipe.right="sliderSwipe_R">
            <div class="steps">
              <div class="percentage" :style="{ width: (100 * (sliderCount + 1) / slider.length) + '%' }"></div>
            </div>
              <button id="prev-btn" @click="sliderBtn">
              <i class="fa-solid fa-left"></i>
              </button>
              <div class="image" v-show="sliderCount === index" v-for="(img, index) in slider" :key="index">
                 <img :src="img.path">
                 <div class="text-wrapper">
                    <h2>{{ img.name }}</h2>
                 </div>
              </div>
              <button id="next-btn" @click="sliderBtn">
              <i class="fa-solid fa-right"></i>
              </button>
           </div>
        </div>
     </div>
  </div>
</template>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.header {
  background-color: rgba(10, 10, 10, 0.2);
}

.showcase {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  margin: 5rem;
}

.showcase .hero-showcase {
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.4);
}
.showcase .hero-showcase svg {
  font-size: 12rem;
  color: blue;
  filter: sepia(60%) saturate(1000%) hue-rotate(90deg) drop-shadow(0px 0px 25px rgba(0, 119, 255, 0.2));
}

.showcase .hero-text {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}

.showcase .hero-text h1 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.showcase .hero-text h2 {
  font-weight: 100;
}

.showcase .carousel {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.showcase .carousel .steps {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.showcase .carousel .steps .percentage {
  background-color: rgb(170, 255, 0);
  padding: 0.2rem;
  transition: width 500ms;
}

.showcase .carousel .image {
  display: grid;
}

.showcase .carousel .image img {
  justify-self: center;
  width: 50%;
  bottom: 5px;
}

.showcase .carousel .text-wrapper {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  border-radius: 1rem;
  top: 20px;
}

.showcase .carousel .text-wrapper h2 {
  font-size: 100%;
  text-align: left;
  font-weight: 600;
}

button {
  background-color: transparent;
  color: white;
  border: 0;
  width: 64px;
  height: 64px;
  text-align: center;
  align-items: center;
  font-size: 100%;
}

#prev-btn {
  position: absolute;
  left: 0px;
  top: 0%;
  transform: translateY(0%);
  z-index: 1;
}

#next-btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

button > * {
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
