//import {gsap} from "gsap";

//gsap.from("#line-1",{duration:.7,x:-200,alpha:0});
//gsap.from("#line-2",{duration:.7,x:-200,alpha:0,delay:0.1});
//gsap.from("#portrait",{duration:1,x: +200,alpha:0});

//gsap.from("#resumebutton",{duration:.7,x: -200,alpha:0,delay:0.3});



import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap.timeline();


    tl.from("#line-1",{duration:1,x:-200,alpha:0})
     .from("#portrait",{duration:1,x: +200,alpha:0})
        .from("#line-2",{duration: 1, alpha:0, y:-70})
        .from("#resumebutton",{duration: 1, alpha:0, y:200})
   
        
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(heroAnimation());

var heroSizeNumber = 4;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  heroSizeNumber = 2;
});

mm.add("(max-width: 767px)", () => {
  // mobile setup code here...
  heroSizeNumber = 1.25;
});

let trailBtn = document.querySelector("#resumebutton");

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#resumebutton",{duration:1, rotate:heroSizeNumber},"stay")
        .to("#resumebutton",{duration: 1,rotate: 360})
        .to("#line-1",{duration: 1},"open")
        .to("#line-2",{duration: 1},"open");

trailBtn.addEventListener("mouseover",function(){
   buttonAnimation.play();
})

trailBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})