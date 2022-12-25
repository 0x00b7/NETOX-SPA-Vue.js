<script>
import anime from "animejs";

export default {
    mounted() {
        var emblem = document.querySelectorAll('.N, .E, .T, .O, .X')
        var emblemstr = document.querySelectorAll('.sN, .sE, .sT, .sO, .sX')
        anime({
            targets: emblem,
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
            }, ],
        });
        anime({
            targets: '.ws',
            easing: 'spring(0, 20, 10, 0)',
            delay: 900,
            opacity: [0, 1],
        });
        anime({
            targets: '.sign-background',
            'background': 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            delay: 1000,
            duration: 800,
            easing: 'easeOutElastic(1, 1)',
        });
    },
}
</script>

<template>
    <header>
       <div class="sign">
          <div class="sign-background">
             <div class="N">
                <div class="sN">N</div>
             </div>
             <div class="E">
                <div class="sE">E</div>
             </div>
             <div class="T">
                <div class="sT">T</div>
             </div>
             <div class="O">
                <div class="sO">O</div>
             </div>
             <div class="X">
                <div class="sX">X</div>
             </div>
             <div class="dot">
                <div class="sdot">.</div>
             </div>
             <div class="ws">
                <div class="sws">ws</div>
             </div>
          </div>
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
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    white-space: nowrap;
    font-size: 3rem;
}

header .sign .sign-background {
    display: flex;
    padding-left: 10px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: linear-gradient(0deg, rgba(255, 94, 0, 0.2) 0%, rgba(140, 0, 255, 0.2)100%);
}

header .sign .sign-background div {
    font-weight: 600;
    font-style: italic;
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
    margin: 5px 0px 10px 0px;
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