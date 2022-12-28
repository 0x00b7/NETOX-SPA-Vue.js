<script>
export default {
    mounted() {

        const computedStyle = window.getComputedStyle(this.$refs.image);

        const imageSrc = computedStyle.content.slice(5, -2);

        const image = new Image();

        image.src = imageSrc;

        image.onload = () => {
         //   this.$refs.loading.style.display = 'none';
         //   this.$refs.image.style.display = 'block';
        };

    },
};
</script>

<template>
    <div class="container">
       <div class="section">
          <div class="loader" ref="loading">
            <div class="placeholder"></div>
          </div>
          <img ref="image">
       </div>
       <div class="section">
          <h1>My Name is Gernot, Founder of Netox.ws! <br> I'm a 21-Year-Old Web/Software-Developer.</h1>
          <h2>At the Age of 12 I became Passionate about Technic & it's Journey, Day on – Day off, learning new capabilities about HTML/CSS3 as well as JavaScript and its wide Spectrum of Features… These days I am running a Website Developing Service, helping hundreds of People visualizing their Products on the World Wide Web!</h2>
          <h1>I am Always Dedicated and Open for new Projects at every Scale possible!</h1>
          <h2>For business inquiries regarding Web-Development, directly Open a Ticket via our Form or Sending an E-Mail to: admin@netox.ws</h2>
       </div>
    </div>
 </template>
 
<style scoped>
.container {
    display: flex;
}

.section:nth-child(2) {
    margin: 0.5rem 1rem
}

.section {
    width: 100%;
}

.section h1 {
    margin-bottom: 0.5rem;
}

.section h2 {
    margin-bottom: 2rem;
}

img {
    display: none;
    content: url(../assets/images/admin.png);
    animation: image_fade 500ms linear forwards;
    animation-delay: 500ms;
    margin-left: 5%;
    opacity: 0;
    width: 100%;
    height: 100%;
}

.loader {
    mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    mask-size: 200% 100%;
    animation: placeholder 2s linear infinite;
    width: 100%;
}

.placeholder {
    background-color: rgb(0, 0, 0);
    opacity: .5;
    height: 690px;
}

@keyframes placeholder {
    100% {
        mask-position: -600% 0%;
    }
}

@media (max-width: 64em) {
    .container {
        display: grid;
    }

    img {
        content: url(../assets/images/admin_small.png);
        width: 95%;
        top: 0.5rem;
    }

    .section:nth-child(1) {
        display: flex;
        justify-content: center;
    }

    .section:nth-child(2) {
        margin: 0;
        padding: 1rem 0 0 1rem;
    }
}

@media (max-width: 32em) {}

@keyframes image_fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
        margin-left: 0%;
    }
}
</style>