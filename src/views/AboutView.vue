<template>
  <div class="header">
     <h2>About Us.. or me?</h2>
     <div class="container">
        <div class="iam">
          <img src="../assets/images/i.jpg">
        </div>

        <div class="bio">
          <p>Dedication is where dreams begin..</p>
          <p>I am a 21 year old full stack developer who has been passionate about technology & its evulution since childhood, at the age of 14 i became passionate about programming websites via HTML, CSS & JavaScript</p>
        </div>
     </div>
  </div>
</template>


<style scoped>
  .header {
    text-align: center;
    font-size: 4vh;
    padding: 3vh 0vh;
  }
  .container {
    padding: 3vh 0vh;
  }
  .iam img {
    width: 60vh;
  }
  .bio {
    text-align: left;
    font-size: 3vh;
    padding: 2vh 2vh;
  }

  .bio p {
    margin-bottom: 1rem;
  }

  div {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .container {
      display: flex;
    }
  }

</style>