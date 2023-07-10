// fadeIn function
export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -10 : 0,
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
