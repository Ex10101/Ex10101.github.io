const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#nav-links');
const navbarOther = document.querySelector('#nav-other');
const filterBar = document.querySelector('#filter-bar');
const arrow = document.querySelector('#arrow');


hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarOther.classList.toggle('active');
})

arrow.addEventListener('click', () => {
    filterBar.classList.toggle('active');
})