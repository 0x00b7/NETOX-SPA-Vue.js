<template>
  <div class="container">

    <!-- Section I -->

     <div class="section">
        <div class="welcome">
           <h1>MAKE THE <br> WWW YOUR <br> <span id="UL" class="crimson">TERRITORY!</span></h1>
        </div>
        <div class="definition">
           <h1>Netox not only creates your presentation but also provides all the other components to deliver your site.</h1>
           <h2>WE ARE RESPONSIBLE FOR</h2>
           <ul class="fa-ul">
              <li>
                 <span class="fa-li">
                 <i class="fa-sharp fa-rectangle-code"></i>
                 </span>PROGRAMMING
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-sharp fa-wifi"></i>
                 </span>HOSTING
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-sharp fa-link"></i>
                 </span>DOMAIN-LINKING
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-sharp fa-magnifying-glass-location"></i>
                 </span>SEARCH-ENGINE-OPTIMIZATION (SEO)
              </li>
              <li>
                 <span class="fa-li">
                 <i class="fa-sharp fa-shield-keyhole"></i>
                 </span>SERVICE PROTECTION
              </li>
           </ul>
        </div>
     </div>

     <!-- Section-Text -->

     <div id="TL" class="add">
        <h1 id="CT">THE DIFFERENCE</h1>

        <!-- Section II -->

        <div class="section">

          <div class="feature-box">
            <p id="UL">Love for Detail's</p>
            <i class="fa-sharp fa-glasses"></i>
            <p>We admire Detail's, keeping our Design as Clean as Possible!</p>
          </div>

          <div class="feature-box">
            <p id="UL">100% Self-made</p>
              <i class="fa-sharp fa-keyboard"></i>
              <p>We admire Detail's, keeping our Design as Clean as Possible!</p>
          </div>

          <div class="feature-box">
            <p id="UL">Responsive</p>
              <i class="fa-sharp fa-laptop-mobile"></i>
              <p>We admire Detail's, keeping our Design as Clean as Possible!</p>
          </div>

          <div class="feature-box">
            <p id="UL">Effortless</p>
              <i class="fa-sharp fa-bolt-lightning"></i>
              <p>We admire Detail's, keeping our Design as Clean as Possible!</p>
          </div>

        </div>
     </div>

  </div>
</template>


<style scoped>
  .add {
    font-size: 3vh;
    padding: 5vh 0;
  } 
  .container {
    background-color: rgba(15, 15, 15, 1);
  }
  .section {
    padding: 5vh 5vh;
    font-size: 4vh;
  }
  .section:nth-child(2) {
    justify-content: center;
    align-items: center;
  }
  .welcome {
    font-size: 5vh;
    width: 100%;
  }
  .definition {
    width: 100%;
    font-size: 2vh;
  }
  .definition h2 {
    margin-top: 1rem;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
  }
  .feature-box {
    background-color: rgba(10, 10, 10, 1);
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 5vh;
    border: 1px solid var(--color-border);
    border-radius: 10px 10px 0 0;
    margin: 5vh 0 0 0;
  }
  .feature-box p:nth-child(1) {
    margin-top: 5%;
    margin-bottom: 10%;
  }
  .feature-box p:nth-child(3) {
    font-size: smaller;
    margin-top: 10%;
    margin-bottom: 5%;
  }
  .feature-box svg {
    font-size: 5rem;
  }
  @media (min-width: 1024px) {
    .section {
      display: flex;
    }
    .feature-box {
     width: 25%;
     text-align: center;
     font-size: 3vh;
     margin: 0 1vh 0 0;
     padding: 0 2rem;
    }
    .feature-box p:nth-child(1) {
    margin-top: 5%;
    margin-bottom: 5%;
    }
    .feature-box p:nth-child(3) {
    margin-top: 5%;
    margin-bottom: 5%;
    }
  }
  ul {
    padding: 1% 0;
    left: -1%
  }
  li {
    line-height: 1.5;
  }
</style>