function page1() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    delay: 0.7,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(".centerpart1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.8,
  });

  tl.from(".centerpart1 p", {
    y: -100,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(".centerpart1 button", {
    opacity: 0,
    duration: 0.5,
  });
  tl.from(
    ".centerpart2 img",
    {
      opacity: 0,
      x: 100,
      duration: 0.5,
    },
    "-=2"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.15,
  });
}
page1();
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 0%",
    scrub: 2,
  },
});
tl2.from("#services", {
  y: -50,
  opacity: 0,
});
tl2.from(".elem.white.left", {
  x: -100,
  opacity: 0,
});
tl2.from(".elem.black.right", {
  x: 100,
  opacity: 0,
});
tl2.from(".elem.black.left", {
  x: -100,
  opacity: 0,
});

tl2.from(".elem.white.right", {
  x: 100,
  opacity: 0,
});
