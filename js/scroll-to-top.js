(function() {
    'use strict';
    
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        scrollToTopBtn.classList.add("scroll-to-top-show");
    }
    if (scrolled < coords) {
        scrollToTopBtn.classList.remove("scroll-to-top-show");
    }
}

function scrollToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0,
            behavior: "smooth"
            });
    }
}

let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", trackScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);
})();