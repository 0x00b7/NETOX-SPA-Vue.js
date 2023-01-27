<script>
import anime from "animejs";

export default {
  methods: {
    toggleNavbar() {
      const navbar = document.querySelector(".mobile-nav");
      if (navbar.style.display === "block") {
        anime({
          targets: navbar,
          easing: 'easeInOutQuad',
          height: "0px",
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
          height: "180px",
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 350,
        });
      }
    },
  },
  mounted() {
    var sign = document.querySelectorAll(".N, .E, .T, .O, .X");
    anime({
      targets: sign,
      opacity: [0, 1],
      translateX: [-270, 0],
      easing: "easeOutElastic(1, 1)",
      scaleX: [
        {
          value: 5,
          duration: 25,
          easing: "easeOutExpo",
        },
        {
          value: 1,
          duration: 900,
        },
      ],
      scaleY: [
        {
          value: [1.75, 1],
          duration: 450,
        },
        {
          value: 2,
          duration: 100,
          delay: 750,
          easing: "easeOutExpo",
        },
        {
          value: 1,
          duration: 450,
        },
      ],
      delay: anime.stagger(100, {
        direction: "reverse",
      }),
    });
    anime({
      targets: ".dot",
      easing: "spring(0, 20, 10, 0)",
      delay: 250,
      opacity: [0, 1],
      translateX: [100, 0],
      scaleY: [
        {
          value: [2, 1],
          duration: 450,
        },
      ],
    });
    anime({
      targets: ".ws",
      easing: "spring(0, 20, 10, 0)",
      delay: 900,
      opacity: [0, 1],
    });
    anime({
      targets: ".sign-background",
      background:
        "linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      delay: 1000,
      duration: 800,
      easing: "easeOutElastic(1, 1)",
    });
  },
};
</script>

<template>
  <header>
    <div class="mobile-nav">
      <ul class="fa-ul">
        <li>
          <span class="fa-li">
            <i class="fa-solid fa-golf-flag-hole"></i>
          </span>
          <RouterLink @click="toggleNavbar" to="/">Home</RouterLink>
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-solid fa-bolt"></i>
          </span>
          <RouterLink @click="toggleNavbar" to="/creation">Creation</RouterLink>
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-solid fa-book-user"></i>
          </span>
          <RouterLink @click="toggleNavbar" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
    <div class="sign">
      <div class="sign-background">
        <div class="N">N</div>
        <div class="E">E</div>
        <div class="T">T</div>
        <div class="O">O</div>
        <div class="X">X</div>
        <div class="dot">.</div>
        <div class="ws">ws</div>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/creation">Creation</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </div>
      <div class="mobile-wrapper">
        <button class="mobile-nav-toggle" @click="toggleNavbar">
          <i class="fa-duotone fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: -ms-grid;
  display: grid;
}

header .sign {
  white-space: nowrap;
  font-size: 3rem;
}

header .sign .sign-background {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(255, 255, 255, 0.2)),
    to(rgba(255, 255, 255, 0.2))
  );
  background: -webkit-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  background: -moz-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  background: -o-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  background: -webkit-gradient(
    linear,
    left bottom, left top,
    from(rgba(255, 255, 255, 0.2)),
    to(rgba(255, 255, 255, 0.2))
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
}

header .sign .sign-background div {
  font-weight: 600;
  font-style: italic;
}

header .wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  place-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

nav {
  width: 100%;
  font-size: 26px;
  margin: 13px 0px 0px 15px;
  font-style: normal;
}

nav a {
  display: inline-block;
  padding: 0 4rem;
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.mobile-wrapper {
  display: none;
}

.mobile-nav-toggle {
  background-color: transparent;
  font-size: 48px;
  left: 0;
  border: 0;
}

.mobile-nav-toggle svg {
  color: white;
}

.mobile-nav {
  background: linear-gradient(45deg, rgba(22,32,82,1) 0%, rgba(70,22,31,1) 100%);
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  z-index: 1;
  display: none;
  border-radius: 0 0 5rem 5rem;
}

.mobile-nav ul {
  top: 1rem;
}

.mobile-nav ul li {
  margin-bottom: 1rem;
}

@media (max-width: 64em) {
  header {
    line-height: 1.2;
    max-height: 100vh;
  }

  header .wrapper {
    display: none;
  }

  .mobile-wrapper {
    position: fixed;
    display: block;
    right: 0;
    top: 0;
    padding: 5px;
    z-index: 999;
  }
}
</style>
