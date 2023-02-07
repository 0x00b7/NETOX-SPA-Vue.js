import anime from "animejs";

function useFadeIn(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    duration: 150,
    easing: "easeInOutSine",
    complete: done,
  });
}

function useFadeOut(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    duration: 150,
    easing: "easeInOutSine",
    complete: done,
  });
}

export { useFadeOut, useFadeIn };
