gsap.registerPlugin(ScrollTrigger);

let container = document.getElementById('container');

gsap.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => '+=' + container.offsetWidth,
  },
});
