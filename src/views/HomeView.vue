<template>
    <div class="container">
       <!-- Section I -->
       <div class="section">
          <div class="home">
             <h1>MAKE THE <br> WWW YOUR <br> <span class="gardient">TERRITORY!</span></h1>
             <div class="button">

                <i class="fa-sharp fa-angle-right fa-fade"></i>
                <i class="fa-sharp fa-angle-right fa-fade"></i>
                <i class="fa-sharp fa-angle-right fa-fade"></i>
                
                <RouterLink to="/creation">
                   <div>
                      <p>ORDER&nbsp;</p>
                      <p>NOW</p>
                      <p>!</p>
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
                   </span>Programming
                </li>
                <li>
                   <span class="fa-li">
                   <i class="fa-sharp fa-wifi"></i>
                   </span>Hosting
                </li>
                <li>
                   <span class="fa-li">
                   <i class="fa-sharp fa-link"></i>
                   </span>Domain Linkage
                </li>
                <li>
                   <span class="fa-li">
                   <i class="fa-sharp fa-magnifying-glass-location"></i>
                   </span>Search Engine Optimization
                </li>
                <li>
                   <span class="fa-li">
                   <i class="fa-sharp fa-shield-keyhole"></i>
                   </span>Service Protection
                </li>
             </ul>
          </div>
       </div>
       <!-- Section-Text -->
       <hr id="TL">
          <h1>Our Standard</h1>
          <!-- Section II -->
          <div class="section">
             <div class="feature-box">
                <p>Awesome</p>
                <i class="fa-solid fa-sparkles"></i>
                <p>We admire detail, keeping our Design as Clean as Possible!</p>
             </div>
             <div class="feature-box">
                <p>Handmade</p>
                <i class="fa-duotone fa-cubes"></i>
                <p> Proudly to say, we program and set up our Projects 100% ourselves.</p>
             </div>
             <div class="feature-box">
                <p>Responsive</p>
                <i class="fa-regular fa-laptop-mobile"></i>
                <p>We also pay attention to responsiveness on every Device.</p>
             </div>
             <div class="feature-box">
                <p>Effortless</p>
                <i class="fa-solid fa-feather"></i>
                <p>We care about a Flawless User experience, programming your Product!</p>
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

hr {
	margin: 0 0 0.5rem 0;
}

/* SKELETON */
.section {
	display: flex;
	margin: 1rem 0 1rem 0;
}

/* THE WWW.. */
.home {
	font-size: 42px;
	width: 100%;
}

.home h1 {
	font-weight: 600;
}

.home span {
	font-weight: 700;
}

.button svg {
	color: rgb(150, 255, 0);
}

.button {
	margin-top: 1.5rem;
	width: 260px;
	font-size: 80%;
	display: flex;
}

.button div {
	display: flex;
	padding: 0 0.2rem;
}

.button a div p {
	font-weight: 600;
}

.button a {
	left: 0.3rem;
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

.define h1 {
	font-weight: 300;
}

.define h2 {
	margin-top: 1rem;
	font-weight: 600;
	text-align: center;
	border-bottom: 1px solid var(--color-border);
}

ul {
	padding: 10px 0;
}

li {
	font-weight: 200;
	line-height: 1.5;
}

/* OUR STANDARD */
.container h1:nth-child(3) {
	text-align: center;
	font-weight: 600;
}

.feature-box {
	width: 100%;
	height: 270px;
	background-color: rgba(10, 10, 10, 1);
	text-align: center;
	border: 1px solid rgb(5, 5, 5);
	margin: 0px 10px 0px 0px;
	padding: 20px 30px;
}

.feature-box:nth-child(4) {
	margin: 0;
}

.feature-box p:nth-child(1) {
	font-weight: 600;
	font-size: 30px;
	text-decoration: underline crimson;
	text-decoration-thickness: 3px;
}

.feature-box p:nth-child(3) {
	font-weight: 200;
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
		margin: 1rem;
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
	.home {
		font-size: 32px;
	}

	.section:nth-child(4) {
		display: grid;
		grid-template-columns: inherit;
	}
}
</style>