<template>
  <div class="container">
     <div class="section">
        <img src="../assets/images/admin.png" alt="Loading..">
     </div>
     <div class="section">
        <h1>My Name is Gernot, <br> I'm a 21-Year-Old Web/Software-Developer.</h1>
        <br>
        <h2>At the Age of 12 I became Passionate about Technic & it's Journey, Day on –  Day off, learning new capabilities about HTML/CSS3 as well as JavaScript and its wide Spectrum of Features… These days I am running a Website Developing Service, helping hundreds of People visualizing their Products on the World Wide Web!</h2>
        <br>
        <h1>I am Always Dedicated and Open for new Projects at every Scale possible!</h1>
    </div>
  </div>
</template>
          
<style scoped>
.container {
    display: flex;
    padding: 2rem 2rem 0 0;
}

img {
    animation: av_admin-fade 500ms linear forwards;
    animation-delay: 250ms;
    margin-left: 5%;
    opacity: 0;
    width: 100%;
    height: 100%;
}

div {
    width: 100%;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    .container {
        display: grid;
    }

    img {
        width: 40%;
    }

}

/* W512x ~ iPhone */
@media (max-width: 32em) {
    img {
        width: 40%;
    }
    .section {
        display: flex;
        justify-content: center;
    }
}

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