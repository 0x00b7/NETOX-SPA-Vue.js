const transitions = {
  none: {
    in: {},
  },

  fade: {
    in: {
      opacity: [0, 1],
    },
  },

  slideDown: {
    in: {
      opacity: [0, 1],
      translateY: ["20vh", 0],
    },
  },

  slideLeft: {
    in: {
      opacity: [0, 1],
      translateX: ["-20vw", 0],
    },
  },

  slideRight: {
    in: {
      opacity: [0, 1],
      translateX: ["20vw", 0],
    },
  },

  slideUp: {
    in: {
      opacity: [0, 1],
      translateY: ["-20vh", 0],
    },
  },

  revealDown: {
    in: {
      opacity: [0, 1],
      "-webkit-clip-path": ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
      clipPath: ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
    },
  },

  revealLeft: {
    in: {
      opacity: [0, 1],
      "-webkit-clip-path": ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"],
      clipPath: ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"],
    },
  },

  revealRight: {
    in: {
      opacity: [0, 1],
      "-webkit-clip-path": ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
      clipPath: ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
    },
  },

  revealUp: {
    in: {
      opacity: [0, 1],
      "-webkit-clip-path": ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
      clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
    },
  },

  bounceDown: {
    in: {
      easing: "easeOutBounce",
      opacity: [0, 1],
      translateY: ["20vh", 0],
    },
  },

  bounceLeft: {
    in: {
      easing: "easeOutBounce",
      opacity: [0, 1],
      translateX: ["-20vw", 0],
    },
  },

  bounceRight: {
    in: {
      easing: "easeOutBounce",
      opacity: [0, 1],
      translateX: ["20vw", 0],
    },
  },

  bounceUp: {
    in: {
      easing: "easeOutBounce",
      opacity: [0, 1],
      translateY: ["-20vh", 0],
    },
  },

  zoomIn: {
    in: {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [0, 1],
    },
  },

  zoomOut: {
    in: {
      opacity: [0, 1],
      scaleX: [2, 1],
      scaleY: [2, 1],
    },
  },

  flipX: {
    in: {
      opacity: [0, 1],
      rotateX: [90, 0],
    },
  },

  flipY: {
    in: {
      opacity: [0, 1],
      rotateY: [360, 0],
    },
  },

  rotateLeft: {
    in: {
      opacity: [0, 1],
      rotate: [360, 0],
    },
  },

  rotateRight: {
    in: {
      opacity: [0, 1],
      rotate: [-360, 0],
    },
  },
};

export default transitions;
