<script>
import anime from 'animejs';

export default {
    data() {
        return {
            icons: [{
                    name: 'fa-phone',
                    class: 'fa-solid',
                    svgCode: '<svg class="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>'
                },
                {
                    name: 'fa-discord',
                    class: 'fa-brands',
                    svgCode: '<svg class="svg-inline--fa fa-discord" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>'
                },
                {
                    name: 'fa-camera-retro',
                    class: 'fa-solid',
                    svgCode: '<svg class="svg-inline--fa fa-camera-retro" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM344 304c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88z"></path></svg>'
                },
                {
                    name: 'fa-rocket-launch',
                    class: 'fa-solid',
                    svgCode: '<svg class="svg-inline--fa fa-rocket-launch" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket-launch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M117.8 128H207C286.9-3.7 409.5-8.5 483.9 5.3c11.6 2.2 20.7 11.2 22.8 22.8c13.8 74.4 9 197-122.7 276.9v89.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-114.7c0-22.6-9-44.3-25-60.3s-37.7-25-60.3-25H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3zM424 128c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40zM166.5 470C117 519.5 .5 511.5 .5 511.5s-8-116.5 41.5-166c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-16.5 16.5-13.8 55.2-13.8 55.2s38.7 2.7 55.2-13.8z"></path></svg>'
                },
                {
                    name: 'fa-clipboard',
                    class: 'fa-solid',
                    svgCode: '<svg class="svg-inline--fa fa-clipboard" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm-80 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>'
                }
            ],
            currentIcon: 0
        }
    },
    mounted() {
        this.animation()
    },
    methods: {
        animation() {
            setInterval(() => {
                anime({
                    targets: this.$refs[`icon-${this.currentIcon}`],
                    opacity: 0,
                    duration: 500,
                    translateX: -200,
                    translateY: '-50%',
                    complete: () => {
                        anime({
                            targets: '.icon',
                            easing: 'easeInOutQuad',
                            translateX: '-50%',
                            translateY: '-50%',
                        })
                    },
                    easing: 'easeInOutQuad'
                });
                this.currentIcon = (this.currentIcon + 1) % this.icons.length;
                anime({
                    targets: this.$refs[`icon-${this.currentIcon}`],
                    opacity: 1,
                    translateX: '-50%',
                    translateY: '-50%',
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
            }, 2000);
        }
    }
};
</script>
<template>
  <div class="container">
     <div class="header">
        <h1>Know our vision</h1>
     </div>
     <div class="section">
        <div class="showcase">
           <div class="hero-showcase">
              <div class="icon" style="transform: translateY(-50%) translateX(-50%)" v-for="(icon, index) in icons" :key="index" :ref="`icon-${index}`" v-html="icon.svgCode"></div>
           </div>
           <div class="hero-text">
              <h1>Not just a simple website!</h1>
              <h2>We create innovative web-applications and UX designs at an affordable price. <br/><br/> Our code, primarily based on Vue.js and JavaScript, is highly professional and uses the best solutions to create a masterpiece for our clients. <br/><br/> We also use Font-Awesome, a top-notch SVG icon library, to enhance the overall look and feel of our designs.</h2>
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

.showcase,
.workflow {
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  margin: 5rem;
}

.showcase .hero-showcase {
  text-align: center;
  line-height: 100%;
  padding: 10rem;
  background-color: rgba(0, 0, 0, 0.4);
}

.showcase .hero-showcase .icon:first-child {
  opacity: 1;
}

.showcase .hero-showcase .icon {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
     -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
       -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 12rem;
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
