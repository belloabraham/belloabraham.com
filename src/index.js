import './index.scss';
import './mobile-menu';

import AOS from "aos";
AOS.init();
import $ from 'jquery'
import "./reveal";
import './contact-form';

window.addEventListener("load", function(){
    hidePreloader();
}) 

function hidePreloader() {
    const preloader = $('.preloader')
    preloader.hide();
}