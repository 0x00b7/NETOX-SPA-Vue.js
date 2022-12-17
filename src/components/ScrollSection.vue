<template>
      <div ref="root" class="feature-box">
        <slot></slot>
      </div>
  </template>
  
<script>
  import { ref, onMounted, onUnmounted } from "vue";
  import anime from "animejs";
  import { onIntersect } from "../assets/scripts/CA/oIntersect";
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
            threshold: 0.1,
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
        // keeps exit transition from running before the first entrance.
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
  
<style>
.feature-box {
	width: 100%;
	height: 270px;
	background-color: rgba(10, 10, 10, 1);
	border-radius: 15px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
	text-align: center;
	margin: 0 1rem 0 0;
	padding: 20px 15px;
}

.feature-box:last-child {
	margin: 0;
}

.feature-box p:nth-child(1) {
	font-weight: 600;
	font-size: 30px;
	text-decoration: underline crimson;
	text-decoration-thickness: 3px;
}

.feature-box p:nth-child(3) {
	font-weight: 200;
	word-wrap: break-word;
}

.feature-box svg {
	margin: 2rem 0;
	font-size: 72px;
	filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));
}

</style>