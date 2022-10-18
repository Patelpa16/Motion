import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#history-middle", {duration:1,x:200,scrollTrigger:{trigger: "#history-middle"}});