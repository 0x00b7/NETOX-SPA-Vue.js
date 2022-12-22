<template>
    <div class="container">
       <div v-if="loading" class="placeholder-wave">
          <div class="placeholder"></div>
       </div>
       <img v-else :src="imageUrl" />
    </div>
 </template>
 <script>
    export default {
      data() {
        return {
          loading: true,
          imageUrl: ''
        }
      },
      methods: {
        async fetchImage() {
          const response = await fetch('https://www.sony.de/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960')
          this.imageUrl = await response.url
          this.loading = false
        }
      },
      mounted() {
        this.fetchImage()
      }
    }
 </script>
 
<style>
.placeholder-wave {
    -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
    animation: placeholder-wave 1500ms linear infinite;
}

.placeholder {
    display: inline-block;
    min-height: 350px;
    vertical-align: middle;
    width: 100%;
    background-color: rgb(25, 25, 25);
    padding: 2rem;
}

@keyframes placeholder-wave {
    100% {
        mask-position: -200% 0%;
    }
}
</style>
  