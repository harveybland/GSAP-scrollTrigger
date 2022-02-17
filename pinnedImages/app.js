gsap.set('.bg', { zIndex: (i, target, targets) => targets.length - i });

const imageChange = gsap.timeline({ paused: true });

imageChange
  .to('body', { duration: 3.0 }, 0)
  .to('.bg.one', { duration: 0.25, autoAlpha: 0 }, 1.0)
  .to('.bg.two', { duration: 0.25, autoAlpha: 1 }, 1.0)
  .to('.bg.two', { duration: 0.25, autoAlpha: 0 }, 2.0)
  .to('.bg.three', { duration: 0.25, autoAlpha: 1 }, 2.0);

ScrollTrigger.create({
  trigger: '.container',
  start: 'top top',
  end: '+=300%',
  pin: '.bg-wrap',
  animation: imageChange,
  scrub: true,
  markers: true,
});
