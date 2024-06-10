

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const slideUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.5,
      delay: i * (delay ? delay : 0.05),
    },
  }),
  closed: {
    y: 100,
    opacity: 0,
  },
};


export const perspective = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: -100,
    scale: 0.9,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};