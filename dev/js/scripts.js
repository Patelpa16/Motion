import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin, MotionPathHelper, GSDevTools);

  gsap.set("#kh_blue_line,#kh_pink_line,#kh_yellow_line", { drawSVG: "0% 0%" });
  gsap.set("#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow", { drawSVG: "0% 0%" });
  gsap.set("#c_outer_path,#c_line_stroke", { drawSVG: "0% 0%" });
  gsap.set("#c_line_blue,#c_line_pink,#c_line_yellow", { drawSVG: "0% 0%", strokeWidth: "220", transformOrigin: "50% 50%" });
  gsap.set("#c_line_blue_p,#c_line_pink_p,#c_line_yellow_p,#c_group,#c_line_white_g", { transformOrigin: "50% 50%" });
  gsap.set("#kh_group", { transformOrigin: "0% 100%" });
  gsap.set("#c_line_stroke", { transformOrigin: "50% 50%", rotate: -45 })
  gsap.set("#c_group_outer", { motionPath: { path: "#c_group_road", align: "#c_group_road", alignOrigin: [0.5, 0.5], end: 0 } });
  gsap.set("#kh_group_outer", { motionPath: { path: "#kh_group_road", align: "#kh_group_road", alignOrigin: [0, 1], end: 0 } });
  gsap.set("#a_group,#ao_line_blue", { transformOrigin: "50% 50%" });
  gsap.set("#ao_outer_line", { transformOrigin: "58% 50%" });
  gsap.set("#al_outer_path,#ao_outer_line", { drawSVG: "0% 0%" });
  gsap.set("#al_path", { drawSVG: "0% 0%" });
  gsap.set("#a_group_outer", { transformOrigin: "100% 100%", x: 150, y: 150 });
  gsap.set("#k_group_outer", { transformOrigin: "20% 60%", rotate: 15 });
  gsap.set("#kbs_path1", { transformOrigin: "0% 0%", rotate: 15 });
  gsap.set("#ksl_path1", { transformOrigin: "0% 100%", rotate: -15 });
  gsap.set("#e_group_outer", { transformOrigin: "80% 70%", rotate: -35, x: -20, y: 150, scale: 0 });
  gsap.set("#el_group", { transformOrigin: "50% 50%", rotate: 120 });
  gsap.set("#e_outer_path", { drawSVG: "101% 101%" });
  
  function cAnimation() {
      
      var tl = gsap.timeline();
      // c animation
      tl.to("#c_line_blue_p", { duration: 1.05, rotate: 445, ease: "power2.inOut" }, "c_line_blue")
          .to("#c_line_yellow_p", { duration: 1.05, rotate: 445 - 120, ease: "power2.inOut" }, "c_line_blue")
          .to("#c_line_pink_p", { duration: 1.05, rotate: 445 - 240, ease: "power2.inOut" }, "c_line_blue")
          .to("#c_line_blue,#c_line_pink,#c_line_yellow", { duration: 0.5, drawSVG: "0% 60.66%", ease: "power2.inOut" }, "c_line_blue")
          .to("#c_line_blue,#c_line_pink,#c_line_yellow", { duration: 0.55, drawSVG: "33.33% 66.66%", ease: "power2.inOut" }, "-=0.6")
          .fromTo("#c_group", { scale: 0.5 }, { duration: 0.6, scale: 1.2, ease: "power1.inOut" }, "c_line_blue")
          .to("#c_group", { duration: 0.72, scale: 1, ease: "power1.inOut" }, "-=0.5")
          .set("#kh_path4", { opacity: 1 }, "c_line_blue+=" + 0)
          .to("#kh_path4", { duration: 0.1, morphSVG: "#kh_path3", ease: "linear" }, "c_line_blue+=" + 0.2)
          .to("#kh_path4", { duration: 0.2, morphSVG: "#kh_path2", ease: "linear" }, "c_line_blue+=" + 0.3)
          .to("#kh_path4", { duration: 0.6, morphSVG: "#kh_path1", ease: "power1.in" }, "c_line_blue+=" + 0.5)
          .to("#c_group", { duration: 0.5, scale: 1.2, ease: "power1.inOut" }, "c_line_blue+=" + 1.1)
          .fromTo("#c_line_white_g", { scale: 0 }, { duration: 1, scale: 1.5, ease: "power1.in" }, "c_line_blue+=" + 1.1)
          .fromTo("#c_line_white", { strokeWidth: 150 }, { duration: 1, strokeWidth: 53, ease: "power1.in" }, "c_line_blue+=" + 1.1)
          .to("#kh_path4", { duration: 1, morphSVG: "#kh_path", ease: "power1.in" }, "c_line_blue+=" + 1.6)
          .to("#c_group", { duration: 0.5, scale: 1, ease: "power1.inOut" }, "c_line_blue+=" + 1.6)
          .to("#c_line_blue,#c_line_pink,#c_line_yellow", { duration: 1.8, strokeWidth: 103, ease: "power1.inOut" }, "c_line_blue+=" + 1.6)
          .to("#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow", { drawSVG: "20% 80%", duration: 0.3, ease: "power1.in" }, "c_line_blue+=" + 1.4)
          .to("#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow", { drawSVG: "101% 101%", duration: 0.3, ease: "power1.out" }, "c_line_blue+=" + 1.7)
          .to("#kh_blue_line,#kh_pink_line,#kh_yellow_line", { drawSVG: "30% 70%", duration: 0.3, ease: "power1.in" }, "c_line_blue+=" + 1.7)
          .to("#kh_blue_line,#kh_pink_line,#kh_yellow_line", { drawSVG: "101% 101%", duration: 0.3, ease: "power1.out" }, "c_line_blue+=" + 2)
          .to("#c_line_blue", { duration: 1.2, drawSVG: "30% 100%", ease: "power2.inOut" }, "c_line_blue+=" + 2.1)
          .to("#c_line_yellow", { duration: 1.2, drawSVG: "30% 30%", ease: "power2.inOut" }, "c_line_blue+=" + 2.1)
          .to("#c_line_blue_p", { duration: 1.2, rotation: 565, ease: "power2.inOut" }, "c_line_blue+=" + 2.1)
          .to("#c_line_yellow_p", { duration: 1.2, rotation: 445, ease: "power2.inOut" }, "c_line_blue+=" + 2.1)
          .to("#c_line_pink_p", { duration: 1.2, rotation: 320, ease: "power2.inOut" }, "c_line_blue+=" + 2.1)
          .set("#c_line_pink_p,#c_line_yellow_p", { opacity: 0 }, "c_line_blue+=" + 3.4)
          .to("#c_group_outer", { duration: 1.6, rotate: 55, ease: "linear" }, "c_line_blue+=" + 0.8)
          .to("#kh_group_outer", { duration: 1, ease: "power2.in", motionPath: { path: "#kh_group_road", align: "#kh_group_road", alignOrigin: [0, 1], end: 0.248 } }, "c_line_blue+=" + 0.2)
          .to("#kh_group_outer", { duration: 1.55, ease: "power3.inOut", motionPath: { path: "#kh_group_road", align: "#kh_group_road", alignOrigin: [0, 1], start: 0.248, end: 0.6 } }, "c_line_blue+=" + 1.2)
          .to("#kh_group_outer", { duration: 1.2, ease: "power1.in", motionPath: { path: "#kh_group_road", align: "#kh_group_road", alignOrigin: [0, 1], start: 0.6, end: 0.9325 } }, "c_line_blue+=" + 2.45)
          .to("#kh_group_outer", { duration: 0.6, ease: "power1.out", motionPath: { path: "#kh_group_road", align: "#kh_group_road", alignOrigin: [0, 1], start: 0.9325, end: 1 } }, "c_line_blue+=" + 3.65)
          .to("#kh_group", { duration: 0.6, ease: "sine.inOut", rotate: 15 }, "c_line_blue+=" + 1.2)
          .to("#kh_group", { duration: 0.6, ease: "sine.inOut", rotate: -15 }, "c_line_blue+=" + 1.8)
          .set("#kh_group", { x: -55 }, "c_line_blue+=" + 2.45)
          .to("#kh_group", { duration: 0.6, ease: "sine.inOut", rotate: 0, y: 2 }, "c_line_blue+=" + 2.45)
          .to("#c_group_outer", { duration: 1.5, ease: "power2.inOut", motionPath: { path: "#c_group_road", align: "#c_group_road", alignOrigin: [0.5, 0.5], end: 1 } }, "c_line_blue+=" + 1.9)
          .to("#c_group", { duration: 0.9, rotate: -30, ease: "power2.inOut" }, "c_line_blue+=" + 1.8)
          .to("#c_group", { duration: 1.1, rotate: 0, ease: "power1.Out" }, "c_line_blue+=" + 2.8)
          .to("#c_line_stroke", { drawSVG: "30% 60%", duration: 0.7, ease: "power1.in" }, "c_line_blue+=" + 2.8)
          .to("#c_line_stroke", { drawSVG: "90% 90%", duration: 0.5, ease: "power1.out" }, "c_line_blue+=" + 3.5)
          .set("#c_line_stroke", { opacity: 0 })
          return tl
  
  }
  function aAnimation(){
  // a animation
  
  var tl = gsap.timeline();
  tl.to("#a_group_outer", { duration: 0.8, y: -35, x: -35, rotate: 15, scale: 1, ease: "power1.inOut" }, "c_line_blue+=" + 2.5)
      .to("#a_group_outer", { duration: 0.5, y: 0, x: 0, rotate: -5 }, "c_line_blue+=" + 3.3)
      .to("#a_group_outer", { duration: 0.3, rotate: 0, ease: "power1.inOut" }, "c_line_blue+=" + 3.8)
  
      .fromTo("#ao_line_blue", { scale: 0, strokeWidth: 206 }, { duration: 1, scale: 1, strokeWidth: 103, ease: "power1.out" }, "c_line_blue+=" + 2.7)
  
      .to("#a_group", { duration: 0.4, rotate: 15, ease: "expo.out" }, "c_line_blue+=" + 2.7)
      .to("#a_group", { duration: 0.6, rotate: -5, ease: "linear" }, "c_line_blue+=" + 3.1)
      .to("#a_group", { duration: 0.4, rotate: 0, ease: "linear" }, "c_line_blue+=" + 3.7)
  
      .set("#ao_outer_line", { drawSVG: "35% 50%" }, "c_line_blue+=" + 3)
      .to("#ao_outer_line", { duration: 0.5, drawSVG: "101% 101%", ease: "power1.out" }, "c_line_blue+=" + 3)
      .to("#al_path", { duration: 0.8, drawSVG: "5% 100%", ease: "expo.inOut" }, "c_line_blue+=" + 2.9)
      .to("#al_group", { duration: 0.8, y: 5, ease: "expo.inOut" }, "c_line_blue+=" + 2.7)
      .to("#al_group", { duration: 0.8, y: 0, ease: "expo.inOut" }, "c_line_blue+=" + 3.4)
      .to("#al_outer_path", { duration: 0.4, drawSVG: "30% 70%", ease: "linear" }, "c_line_blue+=" + 2.8)
      .to("#al_outer_path", { duration: 0.4, drawSVG: "101% 101%", ease: "linear" }, "c_line_blue+=" + 3.4)
      return tl
  }
  function kAnimation(){
      // k animation
  
      var tl = gsap.timeline();
      tl.set("#kl_path1", { opacity: 1 }, "c_line_blue+=" + 2.8)
          .to("#kl_path1", { duration: 0.4, morphSVG: "#kl_path" }, "c_line_blue+=" + 2.8)
          .set("#ksl_path1", { opacity: 1 }, "c_line_blue+=" + 3)
          .to("#ksl_path1", { duration: 0.6, morphSVG: "#ksl_path", rotate: 0 }, "c_line_blue+=" + 3)
          .set("#kbs_path1", { opacity: 1 }, "c_line_blue+=" + 3.2)
          .to("#kbs_path1", { duration: 0.8, morphSVG: "#kbs_path", rotate: 0 }, "c_line_blue+=" + 3.2)
          .to("#k_group_outer", { duration: 0.6, rotate: -3 }, "c_line_blue+=" + 2.8)
          .to("#k_group_outer", { duration: 0.2, y: 50 }, "c_line_blue+=" + 3.54)
          .to("#k_group_outer", { duration: 0.5, y: 0, rotate: 0 }, "c_line_blue+=" + 3.87)
          return tl
  }
  function eAnimation(){
      // e animation
      
      var tl = gsap.timeline();
      tl.to("#e_group_outer", { duration: 0.8, y: -25, x: -5, rotate: 20, scale: 1, ease: "power1.inOut" }, "c_line_blue+=" + 2.5)
          .to("#e_group_outer", { duration: 0.5, y: 0, x: 0, rotate: -5 }, "c_line_blue+=" + 3.3)
          .to("#e_group_outer", { duration: 0.3, rotate: 0, ease: "power1.inOut" }, "c_line_blue+=" + 3.8)
          .to("#el_group", { duration: 0.8, rotate: 2 }, "c_line_blue+=" + 3)
          .to("#eo_path1", { duration: 0.5, morphSVG: "#eo_path" }, "c_line_blue+=" + 3.2)
          .to("#el_path1", { duration: 0.5, morphSVG: "#el_path2" }, "c_line_blue+=" + 3.2)
          .to("#el_path1", { duration: 0.2, morphSVG: "#el_path" }, "c_line_blue+=" + 3.7)
          .to("#e_outer_path", { duration: 0.4, drawSVG: "30% 70%", ease: "linear" }, "c_line_blue+=" + 3)
          .to("#e_outer_path", { duration: 0.4, drawSVG: "0% 0%", ease: "linear" }, "c_line_blue+=" + 3.4)
          .to("#cake_layer", { duration: 0.8, opacity: 0 }, "c_line_blue+=" + 4.8)
          return tl
  }
  var maintl = gsap.timeline();
  maintl.add(cAnimation(),0)
  .add(aAnimation(),0)
  .add(kAnimation(),0)
  .add(eAnimation(),0)
  GSDevTools.create()