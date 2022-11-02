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

  tl.from("#leaf-svg path", {
    drawSVG: 0,
    stagger: 0.5,
    duration: 2,
    ease: "sine.inOut",
  });
}

function uiSVGAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.from(".ui-arrow-1", {
    drawSVG: 0,
    stagger: 0.5,
    ease: "sine.inOut",
  }).from(".ui-arrow-2", { drawSVG: 0, stagger: 0.5, ease: "sine.inOut" }, "<");
}

var mainTimeline = gsap.timeline();

mainTimeline
  .add(simpleSVGAnimation())
  .add(patternSVGAnimation())
  .add(uiSVGAnimation());
