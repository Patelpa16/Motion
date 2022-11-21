import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(
  DrawSVGPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  MotionPathHelper,
  GSDevTools
);

GSDevTools.create();

function cakelogoAnimation() {

var mainTl = gsap.timeline();

mainTl.add(cakelogoAnimation());
