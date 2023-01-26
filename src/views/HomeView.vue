<script>
import OS from "../components/OS.vue";
import anime from "animejs";

export default {
    components: {
        OS: OS,
    },
    mounted() {
        anime({
            targets: '.fa-angle-right',
            opacity: [1, 0.2, 1],
            easing: 'easeInCubic',
            duration: 1000,
            loop: true,
            delay: anime.stagger(200)
        })
    },
    methods: {
        mobile() {
            if (window.innerWidth > 512) {
                return "none";
            }
        },
    },
};
</script>

<template>
	<div class="container">
	   <!-- Section I -->
	   <div class="section">
		  <div class="home">
			 <h1>WE'LL BUILD YOUR VISION, START YOUR JOURNEY NOW!</h1>
			 <div class="button">
				<svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
				   <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
				</svg>
				<svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
				   <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
				</svg>
				<svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fass" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
				   <path fill="currentColor" d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z"></path>
				</svg>
				<RouterLink to="/order-now">
				   <div>
					  <p>ORDER&nbsp;</p>
					  <p>NOW</p>
					  <p>!&nbsp;</p>
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
	   <div class="header">
		  <h1>Features</h1>
	   </div>
	   <!-- Section II -->
	   <div class="section">
		  <OS class="feature-box" :anim="mobile()">
			 <p>Awesome</p>
			 <i class="fa-sharp fa-sparkles"></i>
			 <p>We admire detail, keeping our Design as Clean as Possible!</p>
		  </OS>
		  <OS class="feature-box" :anim="mobile()">
			 <p>Handmade</p>
			 <i class="fa-sharp fa-cubes"></i>
			 <p> Proudly to say, we program and set up our Projects 100% ourselves.</p>
		  </OS>
		  <OS class="feature-box" :anim="mobile()">
			 <p>Responsive</p>
			 <i class="fa-sharp fa-laptop-mobile"></i>
			 <p>We also pay attention to responsiveness on every Device.</p>
		  </OS>
		  <OS class="feature-box" :anim="mobile()">
			 <p>Effortless</p>
			 <i class="fa-sharp fa-feather"></i>
			 <p>We care about a Flawless User experience, programming your Product!</p>
		  </OS>
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

.section {
	padding: 1rem;
}

.header {
	background-color: rgba(10, 10, 10, 0.2);
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
	margin-top: 1rem;
	font-size: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	background: -webkit-linear-gradient(305deg, rgba(255,0,50,0.2) 0%, rgba(160, 0, 255, 0.2) 100%);
	background: -moz-linear-gradient(305deg, rgba(255,0,50,0.2) 0%, rgba(160, 0, 255, 0.2) 100%);
	background: -o-linear-gradient(305deg, rgba(255,0,50,0.2) 0%, rgba(160, 0, 255, 0.2) 100%);
	background: linear-gradient(145deg, rgba(255,0,50,0.2) 0%, rgba(160, 0, 255, 0.2) 100%);
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	padding: 0.5rem;
	-webkit-border-radius: 0.5rem;
	   -moz-border-radius: 0.5rem;
	        border-radius: 0.5rem;
}

.button div {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
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
	border-bottom: 2px solid var(--color-border);
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
	text-align: center;
	-webkit-border-radius: 0.5rem;
	   -moz-border-radius: 0.5rem;
	        border-radius: 0.5rem;
	margin: 0 0.5rem 0 0;
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
	.section {
		display: -ms-grid;
		display: grid;
	}

	.section:last-child {
		-ms-grid-columns: auto 20px auto;
		grid-template-columns: auto auto;
		grid-column-gap: 20px;
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
	.section:last-child {
		-ms-grid-columns: inherit;
		grid-template-columns: inherit;
	}

	.home {
		font-size: 32px;
	}
}
</style>