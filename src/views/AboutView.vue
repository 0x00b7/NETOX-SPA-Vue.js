<template>
  <div class="container">
     <div class="section">
        <img src="../assets/images/admin.png" alt="Loading..">
     </div>
     <div class="section">
        <h2>My Name is Gernot</h2>
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