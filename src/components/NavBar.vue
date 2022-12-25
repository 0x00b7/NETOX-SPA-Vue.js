<script>
import anime from "animejs";

export default {
    mounted() {
        var el = document.querySelectorAll('.N, .E, .T, .O, .X')
        anime({
            targets: el,
            opacity: [0, 1],
            translateX: [-270, 0],
            easing: 'easeOutElastic(1, 1)',
            scaleX: [{
                    value: 5,
                    duration: 25,
                    easing: 'easeOutExpo'
                },
                {
                    value: 1,
                    duration: 900
                }
            ],
            scaleY: [{
                    value: [1.75, 1],
                    duration: 450
                },
                {
                    value: 2,
                    duration: 100,
                    delay: 750,
                    easing: 'easeOutExpo'
                },
                {
                    value: 1,
                    duration: 450
                },
            ],
            delay: anime.stagger(100, {
                direction: 'reverse',
            })
        });
        anime({
            targets: '.dot',
            easing: 'spring(0, 20, 10, 0)',
            delay: 250,
            opacity: [0, 1],
            translateX: [100, 0],
            scaleY: [{
                    value: [2, 1],
                    duration: 450,
                },
            ],
        });
        anime({
            targets: '.ws',
            easing: 'spring(0, 20, 10, 0)',
            delay: 900,
            opacity: [0, 1],
        })
    },
}
</script>

<template>
    <header>
        <div class="sign">
            <div class="N">N</div>
            <div class="E">E</div>
            <div class="T">T</div>
            <div class="O">O</div>
            <div class="X">X</div>
            <div class="dot">.</div>
            <div class="ws">ws</div>
        </div>
       <div class="wrapper">
          <nav>
             <RouterLink to="/">Home</RouterLink>
             <RouterLink to="/creation">Creation</RouterLink>
             <RouterLink to="/about">About</RouterLink>
          </nav>
       </div>
    </header>
 </template>

<style scoped>
header {
    display: grid;
}

header .sign {
    display: flex;
    padding-top: 5px;
    white-space: nowrap;
    letter-spacing: 0.1rem;
}

header .sign div {
    font-weight: 600;
    font-size: 3rem;
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

a.router-link-exact-active:hover {
    background-color: transparent;
}

nav {
    width: 100%;
    font-size: 24px;
    text-align: left;
    margin: 5px 0px 15px 0px;
}

nav a {
    display: inline-block;
    padding: 0 1.5rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    header {
        line-height: 1.2;
        max-height: 100vh;
    }
    
    header .sign {
        justify-content: center;
    }

    nav {
        text-align: center;
    }
}
</style>