<template>
  <div class="container">
     <div class="picture">
        <img src="../assets/images/i.jpg" alt="Loading...">
     </div>
     <div class="bio">
        <p>Dedication is where dreams begin..</p>
        <p>I am a 21 year old full stack developer who has been passionate about technology & its evolution since childhood, at the age of 14 i became passionate about programming websites via HTML, CSS & JavaScript</p>
     </div>
  </div>
</template>

          
<style scoped>.container {
  background-color: rgba(15, 15, 15, 1);
  border: 1px solid rgb(10, 10, 10);
}

.picture {
  padding: 5vh 5vh;
  display: flex;
}

img {
  border: 1px solid rgb(10, 10, 10);
  width: 500px;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
  .section {
      display: grid;
  }
}

/* W512x ~ iPhone */
@media (max-width: 32em) {
  
}
</style>