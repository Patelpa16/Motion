import { gsap } from "gsap";

gsap.from("#line-2",{duration:.7,x:-200,alpha:0});

import $ from "jquery";

let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})