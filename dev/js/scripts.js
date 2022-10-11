//import {gsap} from "gsap";

//gsap.from("#line-1",{duration:.7,x:-200,alpha:0});
//gsap.from("#line-2",{duration:.7,x:-200,alpha:0,delay:0.1});
//gsap.from("#portrait",{duration:1,x: +200,alpha:0});

//gsap.from("#resumebutton",{duration:.7,x: -200,alpha:0,delay:0.3});



import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap.timeline();


    tl.from("#line-1",{duration: 1, alpha:0, y:-100})
        .from("#line-2",{duration: 1, alpha:0, y:-70})
        .from("#resumebutton",{duration: 1, alpha:0, y:200})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(heroAnimation());


var heroSizeNumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  heroSizeNumber = 2;
});

mm.add("(max-width: 767px)", () => {
  // mobile setup code here...
  heroSizeNumber = 1.25;
});

let trailBtn = document.querySelector("#trails-btn");

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#trails-btn",{duration:0.25, scale:heroSizeNumber},"goAway")
        .to("#resumebutton",{duration: 0.25, rotateY:180})
        .to("#line-1",{duration: 0.25, alpha:0, y:50},"goAway")
        .to("#line-2",{duration: 0.25, alpha:0, y:20},"goAway");

trailBtn.addEventListener("mouseover",function(){
   buttonAnimation.play();
})

trailBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})