export const titleAnimation = {
  hidden: { x: 500 },
  show: {
    x: 0,
    transition: { duration: 1 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.25 },
  },
};

export const lineAnimation = {
  hidden: { width: "0" },
  show: {
    width: "100%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
export const expandAnimation = {
  hidden: { scale: 0.5 },
  show: {
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};
