let parallax = gsap.timeline();

parallax
  .to('.bg', {
    scale: 1,
  })
  .to('.title', {
    opacity: 1,
    scale: 0.4,
  });

ScrollTrigger.create({
  animation: parallax,
  trigger: '.parallax',
  start: 'top 0%',
  end: 'bottom 0%',
  scrub: 2,
  markers: true,
  pin: true,
});
