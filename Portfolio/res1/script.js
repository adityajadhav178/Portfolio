document.addEventListener('DOMContentLoaded', () => {
    let tl1 = gsap.timeline();

    tl1
        .from("#early", {
            y: -100 ,
            opacity: 0 ,
            duration: 1.5,
            ease: "easeIn" 
        })
        .from("#late", {
            x: 100 ,
            duration: 2,
            opacity: 0 ,
            ease: "Expo.easeInOut" ,
        }, "-=0.5")
        .to(".s .page", {
            y: -200 ,
            opacity: 0 ,
            duration: 1
        })
        .to(".s", {
            height: "0%",
            duration: 2,
            ease: Expo.easeInOut 
        }, "-=1.4")
        .to(".f", {
            height: "0%",
            duration: 2,
            ease: Expo.easeInOut
        }, "-=1.8")
        .from("#l1", {
            y: 100,
            opacity: 0 ,
            duration: 1,
            ease: "easeIn"
        }, "-=0.75")
        .from("#l3", {
            y: 100,
            opacity: 0 ,
            duration: 1,
            ease: "easeIn"
        }, "-=0.75")
        .from("#l2 .a", {
            y: 100,
            duration: 1 ,
            stagger: 0.2 ,
            opacity: 0
        })
        .from("#l2 .b", {
            y: 100,
            duration: 1 ,
            stagger: -0.2 ,
            opacity: 0
        }, "-=1.6")
        .from("#l2 .c", {
            opacity: 0
        })
});

let l2 = document.querySelector("#l2");
let l2Text = l2.textContent;
let clutter = "";
let len = 5;
l2Text.split("").forEach((e , i) => {
    if(i < len) {
        clutter += `<span class="a">${e}</span>`
    }
    else if(i > len) {
        clutter += `<span class="b">${e}</span>`
    }
    else {
        clutter += `<span class="c">${e}</span>`
    }
})

l2.innerHTML = clutter;




