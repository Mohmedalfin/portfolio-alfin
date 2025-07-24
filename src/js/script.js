// Hamburger line animation
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Navbar fixed on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

// Klik diluar hamburger untuk menutup menu
window.addEventListener('click', function(e){
    if(e.target != navMenu && e.target != hamburger) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
   if(darkToggle.checked){
    html.classList.add('dark');
   }else{
    html.classList.remove('dark');
   }
})