import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraphSection = document.querySelector("#history");





gsap.from("#history-first", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power1.out",
});

gsap.fromTo(
  "#robot-hero",
  { clipPath: "inset(10% 16% 10% 16%)" },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger: {
      trigger: robotPictureSection,
      markers: true,
      scrub: 1,
      top: "-=200",
      end: "-=1",
    },
  }
);

// Timelines
const paragraphTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: paragraphSection,
    start: "-=425",
    markers: true,
  },
});


// // gsap.from("#hero", {duration: 1, alphay:-70})
// gsap.from("#yellowbar", {duration: 1, alphay:-70})


// gsap.to('#imgrobot', {
//   scale: 1.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '#imgrobot',
//     markers: true,
//     start: "top center",
//   end: "bottom center"
    

//   }
// })


// gsap.to('#imgrobot', {
//   scale: 1.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '#imgrobot',
//     markers: true,
//     start: "top center",
//   end: "bottom center"
    

//   }
// })

// gsap.timeline({
//       scrollTrigger: {
//         trigger: "#skills-content",
//         start: "top center",
//         toggleActions: "play pause resume reverse",
//         scrub: 0.5,
//         markers: true
//       }
//     })
//     .fromTo(
//       "#skills-content",
//       { x: 200, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 3
//       }
//     );


// gsap.to("#history-first", {
//   backgroundPositionX: "0%",
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".text",
//     markers: true,
//     scrub: 1,
//     start: "top center",
//     end: "bottom center"
//   }
// });



// gsap.from("#yellow", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scrub: true,
//     pin: true,
//     start: "125px 150px",
//     end: "+=100%",
//     markers: true
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// });




// gsap.from("#emotion", {
//   scrollTrigger: {
//     trigger: "#",
//     scrub: true,
//     start: "top bottom",
//     end: "top top",
//     markers: true
//   },
//     scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });


//gsap.to("#history-middle", {
//    scrollTrigger:{
 //       trigger: "#history-middle",
  //      start: "botttom center"
  //  }
   // });