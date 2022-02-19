let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', function() {
    page.classList.toggle('dark-theme');
});