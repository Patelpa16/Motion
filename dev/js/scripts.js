import {gsap} from "gsap";

gsap.from("#line-1",{duration:.7,x:-200,alpha:0});
gsap.from("#line-2",{duration:.7,x:-200,alpha:0,delay:0.1});
gsap.from("#portrait",{duration:1,x: +200,alpha:0});

gsap.from("#resumebutton",{duration:.7,x: -200,alpha:0,delay:0.3});