import anime from 'animejs';

function useFadeIn(el, done) {
    console.log(el)
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
        duration: 50,
        easing: 'easeInOutSine',
        complete: done,
    })
}

export {
    useFadeOut, useFadeIn
}