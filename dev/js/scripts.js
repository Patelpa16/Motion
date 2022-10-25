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

function landingAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#landing-section",
      start: "-=60%",
      markers: false
    }
  });

  tl.from("#hero", {
    clipPath: "inset(0 0 100% 0)",
    ease: "expo.inOut",
    duration: 2
  }).from(
    ["#imgrobot-2", "#early-history-2", "#history-header-2", "#yellow-2"],
    {
      stagger: 0.1,
      opacity: 0
    },
    "-=1"
  );
}

function historyAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#history",
      start: "-=15% center",
      end: "center-=50 center",
      markers: false,
      scrub: 1
    }
  });

  tl.from("#first-paragraph", { opacity: 0, y: 100, duration: 0.5 })
    .from("#second-paragraph", { opacity: 0, y: 100, duration: 0.5 })
    .from("#history-last", { opacity: 0, y: 100, duration: 0.5 });
}

function skillsAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "-=15% center",
      end: "center-=50 center",
      markers: false,
      scrub: 1
    }
  });

  tl.to("#skills-picture", {
    backgroundPositionX: "-100px",
    duration: 3
  })
    .from("#skills-picture", { clipPath: "inset(0 0 0 100%)" }, "<")
    .from("#skills-content", { clipPath: "inset(0 0 0 100%)" }, "<")
    .from(
      ["#skills-header", "#skills-subheader"],
      { opacity: 0, x: 75, stagger: 0.3 },
      "-=1"
    )
    .from(".bottom", { stagger: 0.3, width: 0 })
    .from(".top", { opacity: 0, stagger: 0.3 }, "<")
    .from(["#yellowbar-1", "#yellowbar-2", "#yellowbar-3"], {
      width: 0,
      stagger: 0.3
    });
}

function heroTwoAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-2",
      start: "-=15% center",
      end: "center-=200 center",
      markers: false,
      scrub: 1
    }
  });

  tl.from("#robot-hero", { clipPath: "inset(38% 30% 38% 30%)" }).from(
    "#robot-hero",
    { scale: 2 },
    "<"
  );
}
function galleryAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#skynet",
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

  tl.from(["#gallery-7"], { opacity: 0, scale: 25 })
    .from(
      ["#gallery-1", "#gallery-4"],
      {
        scale: 5,
        stagger: 0.3,
        opacity: 0,
        clipPath: "inset(40% 40% 40% 40%)"
      },
      "-=.25"
    )
    .from(
      ["#gallery-6", "#gallery-3", "#gallery-2", "#gallery-5"],
      {
        scale: 0.5,
        stagger: 0.3,
        opacity: 0
      },
      "<"
    );
}

var mainTimeline = gsap.timeline();

mainTimeline
  .add(scrollRevealAnimation())
  .add(landingAnimation())
  .add(historyAnimation())
  .add(skillsAnimation())
  .add(heroTwoAnimation())
  .add(galleryAnimation());
