gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top 60%',
    end: 'bottom 30% ',
    scrub: true,
    markers: true,
  },
  y: -100,
  opacity: 1,
  // x: 800,
  // opacity: 1,
  // rotation: 360,
  // ease: 'none',
  // duration: 5,
});
