<template>
  <header>
     <div class="container">
        <button class="mobileBtn" @click="toggleMobile">X</button>
        <div id="mobile-nav" class="mobile-nav">
          <ul>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-earth-americas"></i>
                  </span>
                  <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                  <RouterLink to="/Service">Service</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-comments-question"></i>
                  </span>
                  <RouterLink to="/FAQs">FAQs</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-person-rays"></i>
                  </span>
                  <RouterLink to="/About">About</RouterLink>
              </li>
           </ul>
        </div>
        <div class="wrapper">
           <div class="company">NETOX.ws</div>
           <div class="desktop-nav">
              <nav>
                 <RouterLink to="/">Home</RouterLink>
                 <RouterLink to="/Service">Service</RouterLink>
                 <RouterLink to="/FAQs">FAQs</RouterLink>
                 <RouterLink to="/About">About</RouterLink>
              </nav>
           </div>
        </div>
     </div>
  </header>
</template>

<script>
import anime from 'animejs';

export default {
    methods: {
        toggleMobile() {
            const navbar = document.querySelector(".mobile-nav");
            if (navbar.style.display === "block") {
                anime({
                    targets: navbar,
                    easing: 'easeInOutQuad',
                    opacity: [1, 0],
                    duration: 350,
                    complete: () => {
                        navbar.style.display = "none";
                    },
                });
            } else {
                navbar.style.display = "block";
                anime({
                    targets: navbar,
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 350,
                });
            }
        },
    },
    mounted() {
        anime({
            delay: 250,
            translateX: [50, 0],
            targets: '.company',
            opacity: [0, 1],
        })
    }
}
</script>

<style scoped>
header {
	display: -ms-grid;
	display: grid;
  background: rgba(0, 0, 0, 0.3);
}

header .container {
	white-space: nowrap;
	font-size: 3rem;
}

header .container .mobileBtn {
  position: fixed;
  float: right;
  right: 0;
  margin: 1rem;
  display: none;
  z-index: 999;
}

header .container .mobile-nav {
  position: fixed;
  background: #1D1B26;
  padding: 0rem 1rem;
  width: 100%;
  height: 210px;
  z-index: 10;
  font-size: 1.5rem;
  display: none;
}

header .container .mobile-nav ul li {
  list-style-type: none;
  padding: 1rem 0 0.5rem;
}

header .container .mobile-nav ul li a {
  font-weight: 100;
}

header .container .wrapper {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	padding-left: 10px;
	padding-right: 15px;
	padding-top: 5px;
	padding-bottom: 5px;
}

header .container .wrapper .company {
	font-weight: 700;
	font-style: italic;
}

header .container .wrapper .desktop-nav nav {
	width: 100%;
	font-size: 24px;
	top: 14px;
	font-style: normal;
}

header .container .wrapper .desktop-nav nav a {
	display: inline-block;
	padding: 0 3rem;
}

@media (max-width: 64em) {
	header .container .wrapper .desktop-nav {
		display: none;
	}
  header .container .mobileBtn {
    display: block;
  }
}
</style>
