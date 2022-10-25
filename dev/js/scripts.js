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
      scrub: 1,
    },
    defaults: {
      duration: 1,
    },
  });































































var mainTimeline = gsap.timeline();

mainTimeline
  .add(scrollRevealAnimation())

// // Initial animations
// gsap.from("#history-first", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   ease: "power1.out"
// });

// gsap.fromTo(
//   "#robot-hero",
//   { clipPath: "inset(10% 16% 10% 16%)" },
//   {
//     clipPath: "inset(0% 0% 0% 0%)",
//     scrollTrigger: {
//       trigger: "#hero-2",
//       markers: true,
//       scrub: 1,
//       top: "-=200",
//       end: "-=1"
//     }
//   }
// );

// function history() {
//   var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#history",
//       start: "-=225",
//       markers: true
//     }
//   });

//   tl.from("#history-middle p", {
//     opacity: 0,
//     duration: 1.2,
//     y: 50,
//     stagger: 0.4,
//     ease: "power1.out"
//   }).from("#history-last", {
//     opacity: 0,
//     duration: 1.2,
//     y: 50,
//     stagger: 0.4,
//     ease: "power1.out"
//   });

//   return tl;
// }

// function skills() {
//   var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#skills",
//       start: "-=250",
//       markers: true
//     }
//   });

//   tl.from(["#yellowbar-1", "#yellowbar-2", "#yellowbar-3"], {
//     width: 0,
//     duration: 1.5,
//     ease: "circ.out",
//     stagger: 0.3
//   });

//   return tl;
// }

// function gallery() {
//   var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#skynet",
//       start: "-=550",
//       markers: true
//     }
//   });

//   tl.from("#gallery-2", { x: 50, opacity: 0, duration: 1.2 })
//     .from("#gallery-5", { x: 50, opacity: 0, duration: 1.2 }, "-=1")
//     .from(
//       "#gallery-1",
//       {
//         y: -50,
//         opacity: 0,
//         duration: 1.2
//       },
//       "-=1"
//     )
//     .from("#gallery-6", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
//     .from("#gallery-3", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
//     .from("#gallery-4", { y: 50, opacity: 0, duration: 1.2 }, "-=1")
//     .from(
//       "#gallery-7",
//       { scale: 1.2, opacity: 0, duration: 1.2, ease: "back.out(4)" },
//       "-=1"
//     );

//   return tl;
// }


// var mainTimeline = gsap.timeline();

// // Adding child timelines to main timeline
// mainTimeline.add(history())
// .add(skills())
// .add(gallery());







// const paragraphSection = document.querySelector("#history");
// const skillsSection = document.querySelector("#skills");
// const skynetAlbumSection = document.querySelector("#skynet");
// const robotPictureSection = document.querySelector("#hero-2");

// function history() {
// const paragraphSection = document.querySelector("#history");
// const paragraphTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: paragraphSection,
//     start: "-=225"
//     // markers: true
//   }
// });
// }

// gsap.from("#history-first", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   ease: "power1.out"
// });

// gsap.fromTo(
//   "#robot-hero",
//   { clipPath: "inset(10% 16% 10% 16%)" },
//   {
//     clipPath: "inset(0% 0% 0% 0%)",
//     scrollTrigger: {
//       trigger: robotPictureSection,
//       // markers: true,
//       scrub: 1,
//       top: "-=100",
//       end: "-=1"
//     }
//   }
// );


// // Timelines
// const paragraphTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: paragraphSection,
//     start: "-=225"
//     // markers: true
//   }
// });

// const skillsTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: skillsSection,
//     start: "-=250"
//     // markers: true
//   }
// });

// const galleryTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: skynetAlbumSection,
//     start: "-=550"
//     // markers: true
//   }
// });


// // Timeline Animations
// paragraphTimeline
//   .from("#history-middle p", {
//     opacity: 0,
//     duration: 1.2,
//     y: 50,
//     stagger: 0.4,
//     ease: "power1.out"
//   })
//   .from("#history-last", {
//     opacity: 0,
//     duration: 1.2,
//     y: 50,
//     stagger: 0.4,
//     ease: "power1.out"
//   });

//   skillsTimeline.from(["#yellowbar-1", "#yellowbar-2", "#yellowbar-3"], {
//   width: 0,
//   duration: 1.5,
//   ease: "circ.out",
//   stagger: 0.3
// });

// galleryTimeline
//   .from("#gallery-2", { x: 50, opacity: 0, duration: 1.2 })
//   .from("#gallery-5", { x: 50, opacity: 0, duration: 1.2 }, "-=1")
//   .from(
//     "#gallery-1",
//     {
//       y: -50,
//       opacity: 0,
//       duration: 1.2
//     },
//     "-=1"
//   )
//   .from("#gallery-6", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
//   .from("#gallery-3", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
//   .from("#gallery-4", { y: 50, opacity: 0, duration: 1.2 }, "-=1")
//   .from(
//     "#gallery-7",
//     { scale: 1.2, opacity: 0, duration: 1.2, ease: "back.out(4)" },
//     "-=1"
