import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(
  DrawSVGPlugin, 
  MorphSVGPlugin, 
  GSDevTools
  );
gsap.set("#spotify_circle", { rotate: 180,transformOrigin: "50% 50%",opacity:0 });
gsap.set("#spotify_t_l", { drawSVG: "100% 100%", opacity: 0 });
gsap.set("#spotify_m_l", { drawSVG: "0% 0%", opacity: 0});
gsap.set("#spotify_b_l", { drawSVG: "100% 100%", opacity: 0 });
gsap.set("#spotify_l_p", { drawSVG: "20% 80%" });
gsap.set("#spotify_m_p", { drawSVG: "20% 100%" });
gsap.set("#spotify_r_p", { drawSVG: "20% 80%" });
gsap.set("#spotify_i_o", { scale: 0,transformOrigin: "50% 50%" });

gsap.set("#spotify_s,#spotify_p_l,#spotify_p_o,#spotify_o,#spotify_t_h,#spotify_t_lw,#spotify_i_l,#spotify_f_h,#spotify_f_l,#spotify_y_fs,#spotify_y_bs", { drawSVG: "0% 0%" });

function lineOneAnimation() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_l_p", { duration:0.2,drawSVG: "10% 90%" })
    .to("#spotify_l_p", { duration:0.2,drawSVG: "20% 80%"  })
    .to("#spotify_l_p", { duration:0.3,drawSVG: "0% 100%" })
    .to("#spotify_l_p", { duration:0.2,drawSVG: "20% 80%"  })
    .to("#spotify_l_p", { duration:0.2,drawSVG: "10% 90%" })
    .to("#spotify_l_p", { duration:0.3,drawSVG: "15% 85%" })
    .to("#spotify_l_p", { duration:0.3,drawSVG: "0% 100%" })
    .to("#spotify_l_p", { duration:0.3,opacity: "0" },"+=0.3")
    return tl

}
function lineTwoAnimation() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_m_p", { duration:0.2,drawSVG: "30% 90%" })
    .to("#spotify_m_p", { duration:0.2,drawSVG: "40% 80%"  })
    .to("#spotify_m_p", { duration:0.3,drawSVG: "20% 100%" })
    .to("#spotify_m_p", { duration:0.2,drawSVG: "40% 80%"  })
    .to("#spotify_m_p", { duration:0.2,drawSVG: "30% 90%" })
    .to("#spotify_m_p", { duration:0.3,drawSVG: "35% 85%" })
    .to("#spotify_m_p", { duration:0.3,drawSVG: "20% 100%" })
    .to("#spotify_m_p", { duration:0.2,drawSVG: "0% 100%"  ,ease: "sine.inOut"})
    .to("#spotify_m_p", { duration:0.5,morphSVG: "#spotify_circle",fill: "#23da69", strokeWidth: 0  ,ease: "sine.inOut"})
    return tl

}
function lineThreeAnimation() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_r_p", { duration:0.2,drawSVG: "10% 90%" })
    .to("#spotify_r_p", { duration:0.2,drawSVG: "20% 80%"  })
    .to("#spotify_r_p", { duration:0.3,drawSVG: "0% 100%" })
    .to("#spotify_r_p", { duration:0.2,drawSVG: "20% 80%"  })
    .to("#spotify_r_p", { duration:0.2,drawSVG: "10% 90%" })
    .to("#spotify_r_p", { duration:0.3,drawSVG: "15% 85%" })
    .to("#spotify_r_p", { duration:0.3,drawSVG: "0% 100%" })
    .to("#spotify_r_p", { duration:0.3,opacity: "0" },"+=0.3")

    return tl

}
function tmbLine() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_t_l,#spotify_m_l,#spotify_b_l", { duration: 0.2,opacity: 1})
    .to("#spotify_b_l", { duration:0.2,drawSVG: "0% 100%",ease: "sine.inOut"})
    .to("#spotify_m_l", { duration:0.2,drawSVG: "0% 100%",ease: "sine.inOut"},"-=0.1")
    .to("#spotify_t_l", { duration:0.2,drawSVG: "0% 100%",ease: "sine.inOut"},"-=0.1")

    return tl

}
function circleGroup() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_circle_p_grp", { duration:0.4,x:-65,ease: "sine.inOut"})

    return tl

}
function spotify() {
  var tl = gsap.timeline();
    tl
    .to("#spotify_s,#spotify_p_l,#spotify_p_o,#spotify_o,#spotify_t_h,#spotify_t_lw,#spotify_i_l,#spotify_f_h,#spotify_f_l,#spotify_y_fs,#spotify_y_bs", { duration:0.6,drawSVG: "0% 100%", stagger: 0.1 })
    .to("#spotify_i_o", { duration:0.5,scale: 1},"-=1")

    return tl

}
var mainTimeline = gsap.timeline();

mainTimeline.add(lineOneAnimation(),0)
.add(lineTwoAnimation(),0.1)
.add(lineThreeAnimation(),0.05)
.add(tmbLine())
.add(circleGroup())
.add(spotify())

mainTimeline.timeScale(1.3)

GSDevTools.create()