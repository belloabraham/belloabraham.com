import { gsap, Power2, Power4 } from "gsap";
import $ from 'jquery'

const openTrigger = $('.menu-trigger');
const menuNav =    $('.menu-nav');
const openTriggerTop =  openTrigger.find('.menu-trigger-bar.top');
const openTriggerMiddle =  openTrigger.find('.menu-trigger-bar.middle');
const openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

const closeTrigger =  $('.close-trigger');
const closeTriggerLeft =   closeTrigger.find('.close-trigger-bar.left');
const closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');
const mNavContainer = $('.m-nav-container');  

const logo = $('.logo');
const body = $('body');

const menu = $('.menu');
const menuTop = $('.menu-bg.top');
const menuMiddle = $('.menu-bg.middle');
const menuBottom = $('.menu-bg.bottom');

const tlOpen = new gsap.timeline({paused: true});
const tlClose = new gsap.timeline({paused: true});

//OPEN TIMELINE
tlOpen.add("preOpen")
  .to(logo, 0.4, {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut
        }, "preOpen")
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function () {
  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
  onComplete: function() {
    openTrigger.css('visibility', 'hidden');
  }
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(menuTop, 0.8, {
  y: "13%",
  ease: Power4.easeInOut
}, "open")
.to(menuMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(menuBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(menu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
  .to(menuTop, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function() {
    logo.css('z-index','26');

      openTrigger.css('visibility', 'visible');

  }
}, "close")
.to(menuMiddle, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close") 
.to(menuBottom, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close")
  .to(menu, 0.6, {
    y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function () {
      menu.css('visibility', 'hidden');
  }
}, "close")
.to(logo, 0.8, {
  scale: 1, opacity: 1, ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    menuTop.css('background-color','#053865');
    menuMiddle.css('background-color','#053865');
    menuBottom.css('background-color', '#053865');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");

//EVENTS
openTrigger.on('click', function () {
  body.addClass("no-scroll")
  mNavContainer.show();
  if(tlOpen.progress() < 1){
    tlOpen.play();
            } else {
                tlOpen.restart();
            }
});

menuNav.on('click', function () {
  closeMobileNav();
});
       
closeTrigger.on('click', function () {
  closeMobileNav();
});

function closeMobileNav() {
  body.removeClass("no-scroll")
  mNavContainer.hide();
  if(tlClose.progress() < 1){
                tlClose.play();
            } else {
                tlClose.restart();
            }
}