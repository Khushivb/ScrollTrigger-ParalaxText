gsap.registerPlugin(ScrollTrigger);

const lines = document.querySelectorAll(".line");

lines.forEach((line, index) => {
  gsap.fromTo(
    line,
    { opacity: 0, y: 100 }, 
    { 
      opacity: 1,
      y: 0, 
      duration: 2,
      scrollTrigger: {
        trigger: line, 
        start: "top 80%", 
        end: "top 20%", 
        scrub: true, 
        onEnter: () => animateLine(line, 100), 
        onLeaveBack: () => animateLine(line, -100), 
        markers: false,
      }
    }
  );
});

function animateLine(line, yOffset) {
  gsap.fromTo(
    line,
    { opacity: 0, y: pageYOffset }, 
    {
      opacity: 1,
    //   y: 0,
      duration: 1
    }
  );
}
