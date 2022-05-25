import './index.scss';
import './mobile-menu';
import $ from 'jquery'

window.addEventListener("load", function(){
    hidePreloader();
}) 


function hidePreloader() {
    const preloader = $('.preloader')
    preloader.hide();
}