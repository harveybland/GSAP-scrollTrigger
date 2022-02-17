gsap.utils.toArray('section').forEach((section, i) => {
  section.bg = section.querySelector('.bg');

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    });
  }

  // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
  else {
    section.bg.style.backgroundPosition = '50% 0px';

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
});
