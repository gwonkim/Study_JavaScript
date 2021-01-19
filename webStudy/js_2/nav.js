const nav = document.querySelector(".js-nav");

const SCROLLED_CN = "scrolledNav";

const handleScroll = () => {
   if(window.pageYOffset > 110){
       nav.classList.add(SCROLLED_CN);
   } else {
    nav.classList.remove(SCROLLED_CN);
   }
   console.log(window.pageYOffset);
};

const navInit = () => {
    window.addEventListener("scroll", handleScroll);
};

navInit();
