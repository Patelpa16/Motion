import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from("#hero", {duration: 1, alphay:-70})
gsap.from("#yellowbar", {duration: 1, alphay:-70})


gsap.to('#imgrobot', {
  scale: 1.5,
  duration: 1,
  scrollTrigger: {
    trigger: '#imgrobot',
    markers: true,
    start: "top center",
  end: "bottom center"
    

  }
})



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