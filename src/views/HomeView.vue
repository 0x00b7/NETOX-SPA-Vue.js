<template>
  <div class="container">

     <!-- Section I -->

     <div class="section">

        <div class="welcome">
           <h1>MAKE THE <br> WWW YOUR <br> <span id="UL" class="gardient">TERRITORY!</span></h1>
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
              <p id="UL">Handsome</p>
              <i class="fa-sharp fa-glasses"></i>
              <p>We admire details and keeping our Design as Clean as Possible!</p>
            </div>
           <div class="feature-box">
              <p id="UL">Selfmade</p>
              <i class="fa-sharp fa-keyboard"></i>
              <p>Proudly to say we Program and set up our Websites 100% ourselves.</p>
           </div>
           <div class="feature-box">
              <p id="UL">Responsive</p>
              <i class="fa-sharp fa-laptop-mobile"></i>
              <p>We also pay attention to responsiveness on every Device.</p>
           </div>
           <div class="feature-box">
              <p id="UL">Effortless</p>
              <i class="fa-sharp fa-bolt-lightning"></i>
              <p>Your Clients will have a Flawless User experience interacting with our Products!</p>
           </div>
        </div>
     </div>
  </div>
</template>



<style scoped>
/* HEAD-STUB */
.add {
    padding: 2vh 0;
}
.container {
    background-color: rgba(15, 15, 15, 1);
}

/* SKELETON */
.section {
    display: flex;
    padding: 5vh 5vh;
}
.section:nth-child(2) {
    padding: 2vh 2vh;
    justify-content: center;
    align-items: center;
}

/* THE WWW.. */
.welcome {
    font-size: 5vh;
    width: 100%;
}

/* WE ARE RESPONSIBLE FOR.. */
.definition {
    width: 100%;
}
.definition h2 {
    margin-top: 1rem;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
}
ul {
    padding: 2% 0;
}
li {
    line-height: 1.5;
}

/* THE DIFFERENCE */
.add h1 {
    font-size: 6vh;
}
.feature-box {
    width: 100%;
    height: 17rem;
    background-color: rgba(10, 10, 10, 1);
    text-align: center;
    border: 1px solid var(--color-border);
    margin: 0 1vh 0 0;
    padding: 1rem 3rem;
}
.feature-box p:nth-child(1) {
    font-size: 3vh;
}
.feature-box p:nth-child(3) {
    max-width: 200px;
    word-wrap: break-word;
}
.feature-box svg {
    margin: 1.5rem 0;
    font-size: 5rem;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    .section {
        display: grid;
    }
    .section:nth-child(2) {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 10px;
    }
    .welcome {
        font-size: 3.5vh;
    }
    .feature-box {
        height: 15rem;
        margin: 1vh 0 0 0;
    }
}

/* W512x ~ iPhone */
@media (max-width: 32em) {
    .welcome {
        font-size: 32px;
    }
    .section:nth-child(2) {
        display: grid;
        grid-template-columns: inherit;
    }
}

/* H624x ~ FLIP */
@media (max-height: 39em) {

    .section {
        font-size: large;
    }

    .add h1 {
        font-size: 9vw;
    }

    .welcome {
        font-size: 32px;
    }

    .feature-box {
        font-size: 2vw;
        height: 19rem;
    }

    .feature-box p:nth-child(1) {
        font-size: 3vw;
    }
}
</style>