<template>
    <div class="section">
       <img> 
    </div>
    <div class="section">
       <h1>My Name is Gernot, Founder of Netox.ws! <br> I'm a 21-Year-Old Web/Software-Developer.</h1>
       <h2>At the Age of 12 I became Passionate about Technic & it's Journey, Day on – Day off, learning new capabilities about HTML/CSS3 as well as JavaScript and its wide Spectrum of Features… These days I am running a Website Developing Service, helping hundreds of People visualizing their Products on the World Wide Web!</h2>
       <h1>I am Always Dedicated and Open for new Projects at every Scale possible!</h1>
       <h2>For business inquiries regarding Web-Development, directly Open a Ticket via our Form or Sending an E-Mail to: admin@netox.ws</h2>
    </div>
 </template>
 
<script setup>
import { ref } from "vue";

const about = ref(null);
const getAboutImage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    about.value = {
        img: './../../assets/images/admin.png',
        cache: './../../assets/images/admin_small.png',
    };
}

await getAboutImage();
</script>

<style scoped>
.section {
    width: 100%;
}

.section h1 {
    margin-bottom: 0.5rem;
}

.section h2 {
    margin-bottom: 2.5rem;
}

img {
    content: url(./../../assets/images/admin.png);
    animation: av_admin-fade 500ms linear forwards;
    animation-delay: 250ms;
    margin-left: 5%;
    opacity: 0;
    width: 100%;
    height: 100%;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    .container {
        display: grid;
    }

    img {
        content: url(./../../assets/images/admin_small.png);
        width: 75%;
    }

    .section:nth-child(1) {
        display: flex;
        justify-content: center;
    }

    .section:nth-child(2) {
        padding: 1rem;
    }

}

/* W512x ~ iPhone */
@media (max-width: 32em) {}

@keyframes av_admin-fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
        margin-left: 0%;
    }
}
</style>