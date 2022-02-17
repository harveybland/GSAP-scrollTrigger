/* ------Great Horned Owl Sequence------  */
gsap.set('.circle', { yPercent: -5 });
gsap.set('.dotsBlue', { yPercent: 10 });
gsap.set('.owlHorned', { yPercent: -20 });
gsap.set('.clusterGreat', { yPercent: 5 });

gsap.to('.circle', {
  yPercent: 5,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterGreat',
    scrub: 1,
  },
});

gsap.to('.dotsBlue', {
  yPercent: -10,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterGreat',
    scrub: 1,
  },
});

gsap.to('.owlHorned', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterGreat',
    scrub: 1,
  },
});

gsap.to('.caption', {
  yPercent: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterGreat',
    // markers:true,
    end: 'bottom center',
    scrub: 1,
  },
});

gsap.to('.clusterGreat', {
  yPercent: -5,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterGreat',
    end: 'bottom center',
    scrub: 1,
  },
});

/* ------Burrowing Owl Sequence------  */
gsap.set('.triangle', { yPercent: 25, rotation: -90 });
gsap.set('.dotsWhite', { yPercent: 10 });
gsap.set('.owlBurrowing', { yPercent: -20 });
gsap.set('.clusterBurrowing', { yPercent: 5 });

gsap.to('.triangle', {
  yPercent: -5,
  rotation: 40,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterBurrowing',
    scrub: 1,
  },
});

gsap.to('.dotsWhite', {
  yPercent: -10,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterBurrowing',
    scrub: 1,
  },
});

gsap.to('.owlBurrowing', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterBurrowing',
    scrub: 1,
  },
});

gsap.to('.captionBurrowing', {
  yPercent: 200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterBurrowing',
    // markers:true,
    end: 'bottom center',
    scrub: 1,
  },
});

gsap.to('.clusterBurrowing', {
  yPercent: -5,
  ease: 'none',
  scrollTrigger: {
    trigger: '.clusterBurrowing',
    // markers:true,
    end: 'bottom center',
    scrub: 1,
  },
});
