<template>
  <div class="container">
     <div class="section">
        <img src="../assets/images/admin.png" alt="Loading..">
     </div>
     <div class="section">
        <h2>Dedication is where dreams begin..</h2>
        <br>
        <h2>I am a 21 year old full stack developer who has been passionate about technology & its evolution since childhood, <br> at the age of 14 i became passionate about programming websites via HTML, CSS & JavaScript.</h2>
     </div>
  </div>
</template>
          
<style scoped>
.container {
    display: flex;
    padding: 2rem 2rem 0 0;
    background-image: url("../assets/images/av_bg.JPG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: rgba(15, 15, 15, 1);
}

img {
    animation: av_admin-fade 500ms linear forwards;
    animation-delay: 250ms;
    margin-left: 5%;
    opacity: 0;
    width: 100%;
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

    .bio {
        padding: 0vh 0px;
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