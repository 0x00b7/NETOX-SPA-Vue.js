<template>
    <div class="section">
       <img :src="about.img"> 
    </div>
 </template>
 
<script setup>
import { ref } from "vue";

const about = ref(null);
const getAboutImage = async () => {
    const response = await fetch('./../../assets/images/admin.png')
    const imageBlob = await response.blob()
    await new Promise((resolve) => setTimeout(resolve, 2500));

    about.value = {
        img: URL.createObjectURL(imageBlob)
    };
}

await getAboutImage();
</script>

<style scoped>
img {
    animation: av_admin-fade 500ms linear forwards;
    animation-delay: 250ms;
    margin-left: 5%;
    opacity: 0;
    width: 100%;
    height: 100%;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {

    img {
        content: url(./../../assets/images/admin_small.png);
        width: 75%;
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