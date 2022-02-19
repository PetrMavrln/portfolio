(function() {
    'use strict';
    
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollToTopBtn.classList.add("scroll-to-top-show");
    }
    if (scrolled < coords / 2) {
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

function scrollOpacity() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    let opacity = 0.1;

    if (scrolled > coords / 2) {
        scrollToTopBtn.style.opacity = opacity;
    }

    if (scrolled > coords / 1.7) {
        scrollToTopBtn.style.opacity = opacity + 0.2;
    }

    if (scrolled > coords / 1.4) {
        scrollToTopBtn.style.opacity = opacity + 0.3;
    }

    if (scrolled > coords) {
        scrollToTopBtn.style.opacity = opacity + 0.4;
    }

}

let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", trackScroll);
window.addEventListener("scroll", scrollOpacity);
scrollToTopBtn.addEventListener("click", scrollToTop);
})();