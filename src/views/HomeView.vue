<script>
import ScrollSection from "../components/ScrollSection.vue";

export default {
  components: {
    ScrollSection: ScrollSection,
  },
  methods: {
    transition() {
      if (window.innerWidth > 512) {
        return "none";
      } else {
        return "cards";
      }
    },
  },
};
</script>

<template>
	<div class="container">
	   <!-- Section I -->
	   <div class="section one">
		  <div class="home">
			 <h1>MAKE THE <br> WWW YOUR <br> <span class="gardient">TERRITORY!</span></h1>
			 <div class="button">
				<i class="fa-sharp fa-angle-right fa-fade"></i>
				<i class="fa-sharp fa-angle-right fa-fade"></i>
				<i class="fa-sharp fa-angle-right fa-fade"></i>
				<RouterLink to="/order-now">
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
	   <hr id="T_LINE">
	   <div class="header">
		  <h1>The Standard</h1>
	   </div>
	   <!-- Section II -->
	   <div class="section two">
		  <ScrollSection :transition="transition()">
			 <p>Awesome</p>
			 <i class="fa-solid fa-sparkles"></i>
			 <p>We admire detail, keeping our Design as Clean as Possible!</p>
		  </ScrollSection>
		  <ScrollSection :transition="transition()">
			 <p>Handmade</p>
			 <i class="fa-duotone fa-cubes"></i>
			 <p> Proudly to say, we program and set up our Projects 100% ourselves.</p>
		  </ScrollSection>
		  <ScrollSection :transition="transition()">
			 <p>Responsive</p>
			 <i class="fa-regular fa-laptop-mobile"></i>
			 <p>We also pay attention to responsiveness on every Device.</p>
		  </ScrollSection>
		  <ScrollSection :transition="transition()">
			 <p>Effortless</p>
			 <i class="fa-solid fa-feather"></i>
			 <p>We care about a Flawless User experience, programming your Product!</p>
		  </ScrollSection>
	   </div>
	</div>
 </template>
 

<style scoped>
.section {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
}

.section.one {
	margin: 0.5rem 1.5rem 0rem;
}

.section.two {
	margin: 0 1.5vw 1rem;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	   -moz-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
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
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
}

.button div {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
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
	-webkit-animation-name: fa-shake;
	   -moz-animation-name: fa-shake;
	     -o-animation-name: fa-shake;
	        animation-name: fa-shake;
	-webkit-animation-delay: 0s;
	   -moz-animation-delay: 0s;
	     -o-animation-delay: 0s;
	        animation-delay: 0s;
	-webkit-animation-direction: normal;
	   -moz-animation-direction: normal;
	     -o-animation-direction: normal;
	        animation-direction: normal;
	-webkit-animation-duration: 2000ms;
	   -moz-animation-duration: 2000ms;
	     -o-animation-duration: 2000ms;
	        animation-duration: 2000ms;
	-webkit-animation-iteration-count: infinite;
	   -moz-animation-iteration-count: infinite;
	     -o-animation-iteration-count: infinite;
	        animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
	   -moz-animation-timing-function: linear;
	     -o-animation-timing-function: linear;
	        animation-timing-function: linear;
}

.button svg:nth-child(1) {
	-webkit-animation-delay: 500ms;
	   -moz-animation-delay: 500ms;
	     -o-animation-delay: 500ms;
	        animation-delay: 500ms;
	--fa-animation-duration: 2s;
	--fa-fade-opacity: 0.1;
}

.button svg:nth-child(2) {
	-webkit-animation-delay: 1000ms;
	   -moz-animation-delay: 1000ms;
	     -o-animation-delay: 1000ms;
	        animation-delay: 1000ms;
	--fa-animation-duration: 2s;
	--fa-fade-opacity: 0.1;
}

.button svg:nth-child(3) {
	-webkit-animation-delay: 1500ms;
	   -moz-animation-delay: 1500ms;
	     -o-animation-delay: 1500ms;
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
.feature-box {
	width: 100%;
	height: 270px;
	background-color: rgba(10, 10, 10, 1);
	-webkit-border-radius: 5px;
	   -moz-border-radius: 5px;
	        border-radius: 5px;
	-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
	   -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
	        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
	text-align: center;
	margin: 0 2vw 0 0;
	padding: 15px 15px;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	   -moz-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
}

.feature-box:last-child {
	margin: 0;
}

.feature-box p:nth-child(1) {
	font-weight: 600;
	font-size: 30px;
	-webkit-text-decoration: underline crimson;
	   -moz-text-decoration: underline crimson;
	        text-decoration: underline crimson;
	text-decoration-thickness: 3px;
}

.feature-box p:nth-child(3) {
	font-weight: 200;
	word-wrap: break-word;
}

.feature-box svg {
	margin: 2.5rem 0;
	font-size: 72px;
	-webkit-filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
	        filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
}

@media (max-width: 64em) {
	.section.one {
		display: -ms-grid;
		display: grid;
		margin: 0rem 0.5rem 0rem;
	}

	.section.two {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: auto 20px auto;
		grid-template-columns: auto auto;
		grid-column-gap: 20px;
		margin: 0rem 1rem;
	}

	.home {
		font-size: 42px;
	}

	.define {
		font-size: 16px;
	}

	.button {
		margin-bottom: 10px;
	}

	.button div:hover>p:nth-child(2) {
		-webkit-animation-name: none;
		   -moz-animation-name: none;
		     -o-animation-name: none;
		        animation-name: none;
	}

	.feature-box {
		margin: auto 0 20px;
		height: 280px;
	}
}

@media (max-width: 32em) {
	.section.two {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: inherit;
		grid-template-columns: inherit;
		margin: 0rem 1rem 1rem;
	}

	.home {
		font-size: 32px;
	}
}
</style>