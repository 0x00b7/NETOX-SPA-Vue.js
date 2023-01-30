<template>
  <div ref="root">
      <slot></slot>
  </div>
</template>

<script>
import {
    ref,
    onMounted,
    onUnmounted
} from "vue";

import {
    onIntersect
} from "../assets/scripts/CA/oIntersect";

import anime from "animejs";
import transitions from "../assets/scripts/AN/anime-anims";

export default {
    props: {
        anim: {
            type: String,
            default: "slideDown",
        },
        duration: {
            type: Number,
            default: 1500,
        },
        easing: {
            type: String,
            default: "easeOutExpo",
        },
    },
    setup(props) {
        let hasEnteredOnce = false;

        const _ = {
            observer: {},
            motion: {},
        };

        const root = ref(null);

        const animeTransition = transitions[`${props.anim}`]["in"];

        onMounted(() => {
            _.observer = onIntersect(root.value, onEnter, {
                outCallback: onExit,
                once: true,
                options: {
                    threshold: 0.5,
                },
            });

            _.motion = anime({
                targets: root.value,
                autoplay: false,
                duration: props.duration,
                easing: props.easing,
                ...animeTransition,
            });
        });

        onUnmounted(() => {
            _.observer.disconnect();
        });

        const onEnter = () => {
            if (hasEnteredOnce) {
                _.motion.pause();
                _.motion.reverse();
            }
            _.motion.play();

            if (!hasEnteredOnce) {
                hasEnteredOnce = true;
            }
        };

        const onExit = () => {
            if (hasEnteredOnce) {
                _.motion.pause();
                _.motion.reverse();
                _.motion.play();
            }
        };

        return {
            root,
        };
    },
};
</script>
