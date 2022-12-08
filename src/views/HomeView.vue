<template>
    <div class="container">
       <!-- Section I -->
       <div class="section">
          <div class="home">
             <h1>MAKE THE WWW YOUR <span id="UL" class="gardient">TERRITORY!</span></h1>
             <div class="button">

                <i class="fa-sharp fa-angle-right fa-fade"></i>
                <i class="fa-sharp fa-angle-right fa-fade"></i>
                <i class="fa-sharp fa-angle-right fa-fade"></i>
                
                <RouterLink to="/creation">
                   <div>
                      <p>ORDER&nbsp;</p>
                      <p>NOW</p>!
                   </div>
                </RouterLink>

             </div>
          </div>
          <div class="define">
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
       <hr id="TL">
          <h1 id="CT">QUALITIES</h1>
          <!-- Section II -->
          <div class="section">
             <div class="feature-box">
                <p id="UL">Handsome</p>
                <i id="MyGradient" class="fa-sharp fa-glasses"></i>
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
                <p>Have a Flawless User experience interacting with your Product!</p>
             </div>
          </div>

       <!-- Section-Text -->

    </div>
 </template>


 <style scoped>
 /* HEAD-STUB */
 .container {
     background-color: rgba(15, 15, 15, 1);
 }

 /* SKELETON */
 .section {
     display: flex;
     padding: 1rem;
 }

 /* THE WWW.. */
 .home {
     font-size: 42px;
     width: 100%;
 }

 .button svg {
     color: rgb(150, 255, 0);
 }

 .button {
     margin-top: 10px;
     width: 260px;
     font-size: 80%;
     padding: 5px 0px;
     display: flex;
 }

 .button div {
     margin: 0 5px;
     display: flex;
 }
 .button p {
     top: 1px;
 }

 .button div:hover>p:nth-child(2) {
     animation-name: fa-shake;
     animation-delay: 0s;
     animation-direction: normal;
     animation-duration: 2000ms;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
 }

 .button svg:nth-child(1) {
     animation-delay: 500ms;
     --fa-animation-duration: 2s;
     --fa-fade-opacity: 0.1;
 }
 .button svg:nth-child(2) {
     animation-delay: 1000ms;
     --fa-animation-duration: 2s;
     --fa-fade-opacity: 0.1;
 }
 .button svg:nth-child(3) {
     animation-delay: 1500ms;
     --fa-animation-duration: 2s;
     --fa-fade-opacity: 0.1;
 }

 /* WE ARE RESPONSIBLE FOR.. */
 .define {
     width: 100%;
 }
 .define h2 {
     margin-top: 1rem;
     text-align: center;
     border-bottom: 1px solid var(--color-border);
 }

 ul {
     padding: 10px 0;
 }

 li {
     line-height: 1.5;
 }

 /* QUALITIES */
 .add h1 {
     font-size: 42px;
 }
 .feature-box {
     width: 100%;
     height: 270px;
     background-color: rgba(10, 10, 10, 1);
     text-align: center;
     border: 1px solid rgb(5, 5, 5);
     margin: 0 10px 0 0;
     padding: 20px 50px;
 }
 .feature-box p:nth-child(1) {
     font-size: 30px;
 }
 .feature-box p:nth-child(3) {
     word-wrap: break-word;
 }
 .feature-box svg {
     margin: 1.5rem 0;
     font-size: 72px;
     filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
 }

 /* W1024x ~ iPad */
 @media (max-width: 64em) {
     .section {
         display: grid;
     }
     .section:nth-child(4) {
         display: grid;
         grid-template-columns: auto auto;
         grid-column-gap: 20px;
     }
     .define {
         font-size: 16px;
     }
     .home {
         font-size: 42px;
     }
     .button {
         margin-bottom: 10px;
     }
     .button div:hover>p:nth-child(2) {
         animation: none;
     }
     .feature-box {
         margin: auto 0 20px;
         height: 280px;
     }
 }

 /* W512x ~ iPhone */
 @media (max-width: 32em) {
     .section:nth-child(4) {
         display: grid;
         grid-template-columns: inherit;
     }
 }
 </style>