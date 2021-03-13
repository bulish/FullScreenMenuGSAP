/****************** MENU *******************/

var playing = false;
const tl = new TimelineMax({paused: true, onComplete: function(){ playing = false;}});
const items = document.querySelectorAll("li");

tl.fromTo(".menu", {y: -2000, duration: 0.8, display: "none", ease:'power1.out'}, {y: 0, display: "block", duration: 0.8, ease: 'power1.out'})
  .fromTo(".animation", {y:2000, opacity:0, duration: 0.8, ease:'power1.out'}, {y:0, opacity: 1, duration: 0.8, ease:'power1.out'}, "-=0.1")
  .fromTo('.li1',1,{x:"-100%"}, {x:"0%", ease: "expo.out", duration: 1.25} ,"-=0.1")
  .fromTo('.li2',1, {x:"-100%"}, {x:"0%", ease: "expo.out", duration: 1.25}, "-=0.65")
  .fromTo('.li3',1,{x: "-100%"}, {x:"0%", ease: "expo.out", duration: 1.25}, "-=0.65")
  .fromTo('.li4',1,{x:"-100%"}, {x:"0%", ease: "expo.out", duration: 1.25}, "-=0.65")
  //.fromTo("video", {y: 2000, opacity: 0, duration: 1.25}, {y: 0, opacity: 1, duration: 1.25}, ">")

$(".menu-click").click (function(){ tl.reversed( !tl.reversed() ) })

var menu = document.querySelectorAll(".menu-click")
for (var i = 0; i < menu.length; i++){
    menu[i].addEventListener("click", playTL)
}

function playTL(){
  if( !playing ){
    playing = true;
    tl.reversed() ? tl.play() : tl.reverse();
  }
}

/************** PLAYING VIDEO **************/ 

var video = document.querySelectorAll("video");
var li = document.querySelectorAll("li");
var myVideo;

for(var i=0; i<li.length; i++){
    li[i].addEventListener("mouseenter", function(){
        if(this.classList.contains("li1")){
            myVideo = video[0];
        } else if(this.classList.contains("li2")){
            myVideo = video[1];
        } else if(this.classList.contains("li3")){
            myVideo = video[2];
        } else{
            myVideo = video[3];
        }
        myVideo.style.display = "block";
        myVideo.muted = true;
        myVideo.play();
    })

    li[i].addEventListener("mouseleave", function(){
        if(this.classList.contains("li1")){
            myVideo = video[0];
        } else if(this.classList.contains("li2")){
            myVideo = video[1];
        } else if(this.classList.contains("li3")){
            myVideo = video[2];
        } else{
            myVideo = video[3];
        }
        myVideo.style.display = "none";
        myVideo.pause();
    })
}