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

GSDevTools.create()
function cakeAnimation(){
    var tl = gsap.timeline({ repeat: -1 });
    
    gsap.set(
        "#kh_blue_line,#kh_pink_line,#kh_yellow_line",
        { drawSVG: "0% 0%" }
    );
    gsap.set(
        "#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow",
        { drawSVG: "0% 0%" }
    );
    gsap.set(
        "#c_outer_path,#c_line_stroke",
        { drawSVG: "0% 0%" }
    );
    gsap.set("#c_line_blue,#c_line_pink,#c_line_yellow", {
        drawSVG: "0% 0%",
        strokeWidth: "220",
        transformOrigin: "50% 50%"
    });
    gsap.set(
        "#c_line_blue_p,#c_line_pink_p,#c_line_yellow_p,#c_group,#c_line_white_g",
        { transformOrigin: "50% 50%" }
    );
    gsap.set(
        "#kh_group",
        { transformOrigin: "0% 100%" }
    );
    gsap.set(
        "#c_line_stroke",
        { transformOrigin: "50% 50%", rotate: -45 }
    );
    
    gsap.set("#c_group_outer", {
        motionPath: {
            path: "#c_group_road",
            align: "#c_group_road",
            alignOrigin: [0.5, 0.5],
            end: 0,
        },
    });
    gsap.set("#kh_group_outer", {
        motionPath: {
            path: "#kh_group_road",
            align: "#kh_group_road",
            alignOrigin: [0, 1],
            end: 0,
        },
    });
        var maintl = gsap.timeline({ repeat: -1 });
    maintl.add(cakeAnimation())