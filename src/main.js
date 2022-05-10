import "./main.scss";
import AOS from "aos";


AOS.init();

//Mobile nav menu toggle
const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
});


//Google Analytics
function enableTracking() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-5LXKYHJ4Y4");
}

 enableTracking();

