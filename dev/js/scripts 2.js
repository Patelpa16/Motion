import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function preloaderAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.to([".blob-1", ".blob-2", ".blob-3"], {
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

function simpleSVGAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.from(".meta-rectangle", {
    opacity: 0,
    scale: 0,
    rotate: "360deg",
    ease: "back.out(2)",
    duration: 2,
    filter: "blur(5px)",
  })
    .to(".meta-rectangle", {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: "power4.out",
      filter: "blur(15px)",
    })
    .from(
      ".meta-ellipse",
      {
        opacity: 0,
        x: 50,
        scale: 0,
        duration: 2,
        ease: "back.out(4)",
        filter: "blur(5px)",
      },
      "-=2.3"
    )
    .to(".meta-ellipse", { filter: "blur(15px)", scale: 0 }, "-=.3")
    .from(
      ".meta-polygon",
      {
        scale: 0,
        opacity: 0,
        duration: 1.3,
        filter: "blur(15px)",
        ease: "back.out(1)",
      },
      "-=.5"
    )
    .to(".meta-polygon", {
      x: -50,
      ease: "power4.out",
      opacity: 0,
      rotation: "-15deg",
    })
    .from(
      "#text-path",
      { opacity: 0, scale: 1.5, drawSVG: 0, duration: 2 },
      "<"
    )
    .from(".meta", { drawSVG: 0, opacity: 0, stagger: 0.2 });
}

function signatureAnimation() {
  var tl = gsap.timeline({ repeat: -1 });

  tl.from(".signature-svg path", { drawSVG: 0, stagger: 0.5 });
}

var mainTl = gsap.timeline();

mainTl
  .add(preloaderAnimation())
  .add(simpleSVGAnimation())
  .add(signatureAnimation());
