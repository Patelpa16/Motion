import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function scrollRevealAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro-scrolling",
      pin: true,
      start: "top top",
      end: "+=2000",
      markers: false,
      scrub: 1
    },
    defaults: {
      duration: 1
    }
  });

  tl.from("#imgrobot", { opacity: 0, scale: 0.5 })
    .to(".intro-section", { scale: 2 }, "first")
    .to(
      "#svg",
      {
        scale: 13
      },
      "first"
    )
    .to(".scroll-to-reveal", { opacity: 0 }, "first")
    .to("#svg", { opacity: 0 }, "-=.75");

}































































var mainTimeline = gsap.timeline();

mainTimeline
  .add(scrollRevealAnimation())
  .add(landingAnimation())
