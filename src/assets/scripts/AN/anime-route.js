import anime from 'animejs';

// DEFAULT-ROUTE-TRANSITION
function useFadeIn(el, done) {
    anime({
        targets: el,
        opacity: [0, 1],
        duration: 100,
        easing: 'easeInOutSine',
        complete: done,
    })
}

function useFadeOut(el, done) {
    anime({
        targets: el,
        opacity: [1, 0],
        duration: 100,
        easing: 'easeInOutSine',
        complete: done,
    })
}

export {
    useFadeOut, useFadeIn
}