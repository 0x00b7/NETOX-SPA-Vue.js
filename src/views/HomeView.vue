<template>
  <div class="container">
     <!-- Section I -->
     <div class="section">
        <div class="home">
           <h1>WE'LL BUILD YOUR VISION, START YOUR JOURNEY NOW!</h1>
           <div class="button">
              <svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                 <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
              </svg>
              <svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                 <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
              </svg>
              <svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                 <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
              </svg>
              <RouterLink to="/Order-Now">
                 <div>
                    <p>ORDER&nbsp;</p>
                    <p>NOW</p>
                    <p>!&nbsp;</p>
                 </div>
              </RouterLink>
           </div>
        </div>
        <div class="define">
           <h1>
              Netox not only creates your presentation but also provides all the
              other components to deliver your site.
           </h1>
           <h2>WE ARE RESPONSIBLE FOR</h2>
           <ul class="fa-ul">
              <li>
                 <span class="fa-li">
                 <i class="fa-solid fa-rectangle-code"></i> </span>Programming
              </li>
              <li>
                 <span class="fa-li"> <i class="fa-solid fa-wifi"></i> </span>Hosting
              </li>
              <li>
                 <span class="fa-li"> <i class="fa-solid fa-link"></i> </span>Domain
                 Linkage
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-solid fa-magnifying-glass-location"></i> </span>Search Engine Optimization
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-solid fa-shield-keyhole"></i> </span>Service Protection
              </li>
           </ul>
        </div>
     </div>
     <!-- Section-Text -->
     <div class="header">
        <div class="divider">
           <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
           </svg>
           <h1>Features</h1>
           <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
           </svg>
        </div>
     </div>
     <!-- Section II -->
     <div class="section">
        <OS class="feature-box" :anim="mobile()">
           <p>Awesome</p>
           <i class="fa-solid fa-sparkles"></i>
           <p>We admire detail and strive to keep our design as clean as possible.</p>
        </OS>
        <OS class="feature-box" :anim="mobile()">
           <p>Handmade</p>
           <i class="fa-solid fa-cubes"></i>
           <p>We are proud to say that we program and set up our projects 100% ourselves.</p>
        </OS>
        <OS class="feature-box" :anim="mobile()">
           <p>Responsive</p>
           <i class="fa-solid fa-laptop-mobile"></i>
           <p>We pay close attention to ensuring responsiveness on every device.</p>
        </OS>
        <OS class="feature-box" :anim="mobile()">
           <p>Effortless</p>
           <i class="fa-solid fa-feather"></i>
           <p>We are dedicated to providing a flawless user experience while programming your product.</p>
        </OS>
     </div>
  </div>
</template>


<script>
import OS from "../components/OS.vue";
import anime from "animejs";

export default {
    components: {
        OS: OS,
    },
    mounted() {
        anime({
            targets: ".fa-angle-right",
            opacity: [1, 0.2, 1],
            easing: "easeInCubic",
            duration: 1000,
            loop: true,
            delay: anime.stagger(200),
        });
    },
    methods: {
        mobile() {
            if (window.innerWidth > 512) {
                return "none";
            }
        },
    },
};
</script>

<style scoped>
.header {
  padding: 0;
  background: 0;
}

.header .divider {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.header .divider svg {
  position: relative;
  display: block;
  width: calc(200%);
  height: 100px;
  right: 50%;
  opacity: 1;
}

.header .divider svg:first-child {
  transform: rotate(180deg);
}

.header .divider .shape-fill {
  fill: crimson;
}

.section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
}

/* THE WWW.. */
.home {
  font-size: 42px;
  width: 100%;
}

.home h1 {
  font-weight: 600;
}

.home span {
  font-weight: 700;
}

.button svg {
  color: rgb(150, 255, 0);
}

.button {
  margin-top: 1rem;
  font-size: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  background: -webkit-linear-gradient(
    305deg,
    rgba(255, 0, 50, 0.2) 0%,
    rgba(160, 0, 255, 0.2) 100%
  );
  background: -moz-linear-gradient(
    305deg,
    rgba(255, 0, 50, 0.2) 0%,
    rgba(160, 0, 255, 0.2) 100%
  );
  background: -o-linear-gradient(
    305deg,
    rgba(255, 0, 50, 0.2) 0%,
    rgba(160, 0, 255, 0.2) 100%
  );
  background: linear-gradient(
    145deg,
    rgba(255, 0, 50, 0.2) 0%,
    rgba(160, 0, 255, 0.2) 100%
  );
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
}

.button div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.button a div p {
  font-weight: 600;
}

.button a {
  left: 0.3rem;
}

.button div:hover > p:nth-child(2) {
  -webkit-animation-name: fa-shake;
  -moz-animation-name: fa-shake;
  -o-animation-name: fa-shake;
  animation-name: fa-shake;
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-direction: normal;
  -moz-animation-direction: normal;
  -o-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-duration: 2000ms;
  -moz-animation-duration: 2000ms;
  -o-animation-duration: 2000ms;
  animation-duration: 2000ms;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

/* WE ARE RESPONSIBLE FOR.. */
.define {
  width: 100%;
}

.define h1 {
  font-weight: 300;
}

.define h2 {
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid var(--color-border);
}

ul {
  padding: 10px 0;
}

li {
  font-weight: 200;
  line-height: 1.5;
}

/* OUR STANDARD */
.feature-box {
  width: 100%;
  height: 270px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0 0;
  padding: 15px 15px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.feature-box:last-child {
  margin: 0;
}

.feature-box p:nth-child(1) {
  font-weight: 600;
  font-size: 30px;
  -webkit-text-decoration: underline crimson;
  -moz-text-decoration: underline crimson;
  text-decoration: underline crimson;
  text-decoration-thickness: 3px;
}

.feature-box p:nth-child(3) {
  font-weight: 200;
  word-wrap: break-word;
}

.feature-box svg {
  margin: 2.5rem 0;
  font-size: 72px;
  -webkit-filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
  filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
}

@media (max-width: 64em) {
  .section {
    display: -ms-grid;
    display: grid;
  }

  .section:last-child {
    -ms-grid-columns: auto 20px auto;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
  }

  .home {
    font-size: 42px;
  }

  .define {
    font-size: 16px;
  }

  .button {
    margin-bottom: 10px;
  }

  .button div:hover > p:nth-child(2) {
    -webkit-animation-name: none;
    -moz-animation-name: none;
    -o-animation-name: none;
    animation-name: none;
  }

  .feature-box {
    margin: auto 0 20px;
    height: 280px;
  }
}

@media (max-width: 32em) {
  .section:last-child {
    -ms-grid-columns: inherit;
    grid-template-columns: inherit;
  }

  .home {
    font-size: 32px;
  }
}
</style>
