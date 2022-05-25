import "./main.scss";
import AOS from "aos";
AOS.init();
import "./reveal";
import "./validate";
import $ from 'jquery'

window.addEventListener("load", function(){
    hidePreloader();
}) 

function hidePreloader() {
    const preloader = $('.preloader')
    preloader.hide();
}



