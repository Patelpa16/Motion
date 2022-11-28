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
     // c animation
    tl.to(
        "#c_line_blue_p",
        { duration: 1.05, rotate: 445, ease: "power2.inOut" },
        "c_line_blue"
    )
        .to(
            "#c_line_yellow_p",
            { duration: 1.05, rotate: 445 - 120, ease: "power2.inOut" },
            "c_line_blue"
        )
        .to(
            "#c_line_pink_p",
            { duration: 1.05, rotate: 445 - 240, ease: "power2.inOut" },
            "c_line_blue"
        )
        .to(
            "#c_line_blue,#c_line_pink,#c_line_yellow",
            { duration: 0.5, drawSVG: "0% 60.66%", ease: "power2.inOut" },
            "c_line_blue"
        )
        .to(
            "#c_line_blue,#c_line_pink,#c_line_yellow",
            { duration: 0.55, drawSVG: "33.33% 66.66%", ease: "power2.inOut" },
            "-=0.6"
        )
    
        .fromTo(
            "#c_group",
            { scale: 0.5 },
            { duration: 0.6, scale: 1.2, ease: "power1.inOut" },
            "c_line_blue"
        )
        .to(
            "#c_group", { duration: 0.72, scale: 1, ease: "power1.inOut" },
            "-=0.5")
        .set(
            "#kh_path4",
            { opacity: 1 },
            "c_line_blue+=" + 0)
        .to(
            "#kh_path4",
            { duration: 0.1, morphSVG: "#kh_path3", ease: "linear" },
            "c_line_blue+=" + 0.2
        )
        .to(
            "#kh_path4",
            { duration: 0.2, morphSVG: "#kh_path2", ease: "linear" },
            "c_line_blue+=" + 0.3
        )
        .to(
            "#kh_path4",
            { duration: 0.6, morphSVG: "#kh_path1", ease: "power1.in" },
            "c_line_blue+=" + 0.5
        )
        .to(
            "#c_group",
            { duration: 0.5, scale: 1.2, ease: "power1.inOut" },
            "c_line_blue+=" + 1.1
        )
        .fromTo(
            "#c_line_white_g",
            { scale: 0 },
            { duration: 1, scale: 1.5, ease: "power1.in" },
            "c_line_blue+=" + 1.1
        )
        .fromTo(
            "#c_line_white",
            { strokeWidth: 150 },
            { duration: 1, strokeWidth: 53, ease: "power1.in" },
            "c_line_blue+=" + 1.1
        )
    
        .to(
            kh_path4,
            { duration: 1, morphSVG: kh_path, ease: "power1.in" },
            "c_line_blue+=" + 1.6
        )
        .to(
            "#c_group",
            { duration: 0.5, scale: 1, ease: "power1.inOut" },
            "c_line_blue+=" + 1.6
        )
        .to(
            "#c_line_blue,#c_line_pink,#c_line_yellow",
            { duration: 1.8, strokeWidth: 103, ease: "power1.inOut" },
            "c_line_blue+=" + 1.6
        )
    
        .to(
            "#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow",
            { drawSVG: "20% 80%", duration: 0.3, ease: "power1.in" },
            "c_line_blue+=" + 1.4
        )
        .to(
            "#c_outer_line_blue,#c_outer_line_pink,#c_outer_line_yellow",
            { drawSVG: "101% 101%", duration: 0.3, ease: "power1.out" },
            "c_line_blue+=" + 1.7
        )
    
        .to(
            "#kh_blue_line,#kh_pink_line,#kh_yellow_line",
            { drawSVG: "30% 70%", duration: 0.3, ease: "power1.in" },
            "c_line_blue+=" + 1.7
        )
        .to(
            "#kh_blue_line,#kh_pink_line,#kh_yellow_line",
            { drawSVG: "101% 101%", duration: 0.3, ease: "power1.out" },
            "c_line_blue+=" + 2
        )
    
        .to(
            "#c_line_blue",
            { duration: 1.2, drawSVG: "30% 100%", ease: "power2.inOut" },
            "c_line_blue+=" + 2.1
        )
        .to(
            "#c_line_yellow",
            { duration: 1.2, drawSVG: "30% 30%", ease: "power2.inOut" },
            "c_line_blue+=" + 2.1
        )
        .to(
            "#c_line_blue_p",
            { duration: 1.2, rotation: 565, ease: "power2.inOut" },
            "c_line_blue+=" + 2.1
        )
        .to(
            "#c_line_yellow_p",
            { duration: 1.2, rotation: 445, ease: "power2.inOut" },
            "c_line_blue+=" + 2.1
        )
        .to(
            "#c_line_pink_p",
            { duration: 1.2, rotation: 320, ease: "power2.inOut" },
            "c_line_blue+=" + 2.1
        )
        .set(
            "#c_line_pink_p,#c_line_yellow_p",
            { opacity: 0 },
            "c_line_blue+=" + 3.4)
        .to(
            "#c_group_outer",
            { duration: 1.6, rotate: 55, ease: "linear" },
            "c_line_blue+=" + 0.8
        )
        .to(
            "#kh_group_outer",
            {
                duration: 1,
                ease: "power2.in",
                motionPath: {
                    path: "#kh_group_road",
                    align: "#kh_group_road",
                    alignOrigin: [0, 1],
                    end: 0.248,
                },
            },
            "c_line_blue+=" + 0.2
        )
        .to(
            "#kh_group_outer",
            {
                duration: 1.55,
                ease: "power3.inOut",
                motionPath: {
                    path: "#kh_group_road",
                    align: "#kh_group_road",
                    alignOrigin: [0, 1],
                    start: 0.248,
                    end: 0.6,
                },
            },
            "c_line_blue+=" + 1.2
        )
        .to(
            "#kh_group_outer",
            {
                duration: 1.2,
                ease: "power1.in",
                motionPath: {
                    path: "#kh_group_road",
                    align: "#kh_group_road",
                    alignOrigin: [0, 1],
                    start: 0.6,
                    end: 0.9325,
                },
            },
            "c_line_blue+=" + 2.45
        )
        .to(
            "#kh_group_outer",
            {
                duration: 0.6,
                ease: "power1.out",
                motionPath: {
                    path: "#kh_group_road",
                    align: "#kh_group_road",
                    alignOrigin: [0, 1],
                    start: 0.9325,
                    end: 1,
                },
            },
            "c_line_blue+=" + 3.65
        )
        .to(
            "#kh_group",
            { duration: 0.6, ease: "sine.inOut", rotate: 15 },
            "c_line_blue+=" + 1.2
        )
        .to(
            "#kh_group",
            { duration: 0.6, ease: "sine.inOut", rotate: -15 },
            "c_line_blue+=" + 1.8
        )
        .set("#kh_group", { x: -55 }, "c_line_blue+=" + 2.45)
        .to(
            "#kh_group",
            { duration: 0.6, ease: "sine.inOut", rotate: 0, y: 2 },
            "c_line_blue+=" + 2.45
        )
        .to(
            "#c_group_outer",
            {
                duration: 1.5,
                ease: "power2.inOut",
                motionPath: {
                    path: "#c_group_road",
                    align: "#c_group_road",
                    alignOrigin: [0.5, 0.5],
                    end: 1,
                },
            },
            "c_line_blue+=" + 1.9
        )
        .to(
            "#c_group",
            { duration: 0.9, rotate: -30, ease: "power2.inOut" },
            "c_line_blue+=" + 1.8
        )
        .to(
            "#c_group",
            { duration: 1.1, rotate: 0, ease: "power1.Out" },
            "c_line_blue+=" + 2.8
        )
    
        .to(
            "#c_line_stroke",
            { drawSVG: "30% 60%", duration: 0.7, ease: "power1.in" },
            "c_line_blue+=" + 2.8
        )
        .to(
            "#c_line_stroke",
            { drawSVG: "90% 90%", duration: 0.5, ease: "power1.out" },
            "c_line_blue+=" + 3.5
        )
        .set("#c_line_stroke", { opacity: 0 });
        var maintl = gsap.timeline({ repeat: -1 });
    maintl.add(cakeAnimation())