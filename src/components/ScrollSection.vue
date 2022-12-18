<template>
  <div ref="root" class="feature-box">
    <slot></slot>
  </div>
</template>
  
<script>
  import { ref, onMounted, onUnmounted } from "vue";
  import { onIntersect } from "../assets/scripts/CA/oIntersect";

  import anime from "animejs";
  import transitions from "../assets/scripts/AN/anime-anims";

  export default {
    props: {
      transition: {
        type: String,
        default: "fade",
      },
    },
    setup(props) {
      let hasEnteredOnce = false;
  
      const _ = {
        observer: {},
        motion: {},
      };

      const root = ref(null);
  
      const animeTransition = transitions[`${props.transition}`]["in"];
  
      onMounted(() => {
        // init our Observer instance
        _.observer = onIntersect(root.value, onEnter, {
          outCallback: onExit,
          once: true,
          options: {
            threshold: 1,
          },
        });
  
        // init our anime object.
        _.motion = anime({
          targets: root.value,
          // by default animejs will run the transition on load.
          autoplay: false,
          duration: 1500,
          easing: "easeOutExpo",
          // here we spread in our custom transition properties
          // based on the transition prop provided.
          ...animeTransition,
        });

      });
  
      onUnmounted(() => {
        _.observer.disconnect();
      });
  
      const onEnter = () => {
        if (hasEnteredOnce) {
          // clean up from the exit transition
          _.motion.pause(); // if the exit transition is currently running, pause it.
          _.motion.reverse(); // change the direction back to the original
        }
        _.motion.play(); // run the transition
  
        if (!hasEnteredOnce) {
          // allow exit transitions to run.
          hasEnteredOnce = true;
        }

      };
  
      const onExit = () => {
        if (hasEnteredOnce) {
          _.motion.pause(); // if the enter transition is currently running, pause it.
          _.motion.reverse(); // change the direction of the transition
          _.motion.play(); // run the new reversed transition.
        }
      };
  
      return {
        root,
      };
    },
  };
  </script>