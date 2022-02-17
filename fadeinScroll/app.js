gsap.utils.toArray('.website-section').forEach((section) => {
  const elems = section.querySelectorAll('.js-content-opacity');

  gsap.registerPlugin(ScrollTrigger);
  // Set starting params for sections
  gsap.set(elems, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    overwrite: 'auto',
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',
    end: 'bottom 30%',
    markers: true,
    onEnter: () =>
      gsap.to(elems, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }),
    // onLeave: () =>
    //   gsap.to(elems, {
    //     y: -50,
    //     opacity: 0,
    //     stagger: 0.2,
    //   }),
    onEnterBack: () =>
      gsap.to(elems, {
        y: 0,
        opacity: 1,
        stagger: -0.2,
      }),
    onLeaveBack: () =>
      gsap.to(elems, {
        y: 50,
        opacity: 0,
        stagger: -0.2,
      }),
  });
});

function redBackground() {
  document.getElementById('myDIV').style.backgroundColor = 'red';
}

function blueBackground() {
  document.getElementById('myDIV').style.backgroundColor = 'blue';
}

function myFunction() {
  document.getElementById('myDIV').style.backgroundColor = 'lightblue';
}
