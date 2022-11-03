import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

function simpleSVGAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.from("#simple-svg path", {
    drawSVG: 0,
    stagger: 0.3,
    ease: "sine.inOut",
  });
}

function patternSVGAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.to(".pattern line", {
    drawSVG: "50% 100%",
    stagger: 0.2,
    duration: 0.5,
    ease: "sine.inOut",
  })
    .to(
      ".pattern line",
      {
        drawSVG: "100% 0%",
        stagger: 0.2,
        duration: 0.5,
        ease: "sine.inOut",
      },
      "-=3"
    )
    .to(
      ".pattern line",
      {
        drawSVG: "50% 100%",
        stagger: 0.2,
        duration: 0.5,
        ease: "sine.inOut",
      },
      "-=1.5"
    )
    .to(
      ".pattern line",
      {
        drawSVG: "100% 0%",
        stagger: 0.2,
        duration: 0.5,
        ease: "sine.inOut",
      },
      "-=3"
    );
}

function uiSVGAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.to(".blob", {
    rotate: "360deg",
    stagger: 0.8,
    duration: 5,
    ease: "sine.inOut",
  })
    .fromTo(
      ".ellipse circle",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 5, ease: "sine.inOut" },
      "<"
    )
    .fromTo(".ellipse circle", { drawSVG: "100%" }, { drawSVG: "1%" });
}

var mainTimeline = gsap.timeline();

mainTimeline
  .add(simpleSVGAnimation())
  .add(patternSVGAnimation())
  .add(uiSVGAnimation());
