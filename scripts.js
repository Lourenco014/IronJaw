// scrollreveal
const sr = ScrollReveal({
    reset: false,
    origin: 'left',
    delay: 200,
    distance: '30px'
});

sr.reveal('.nav', {
    origin: 'top',
});

sr.reveal('.section-description');
sr.reveal('.section-title', {
    delay: 400
});
sr.reveal('.section-paragraph', {
    delay: 600
});

sr.reveal('.button-wrapper', {
    delay: 800,
});

sr.reveal('.disciplines li .svg-div', {
    origin: 'bottom'
})
sr.reveal('.disciplines li h3', {
    origin: 'bottom',
    delay: 400
})
sr.reveal('.disciplines li p', {
    origin: 'bottom',
    delay: 600
})

sr.reveal('.about-list li', {
    distance: 0,
    delay: 800
})

sr.reveal('.coaches-list li div img', {
    origin: 'top'
})
sr.reveal('.coaches-list li .title', {
    dleay: 400
})
sr.reveal('.coaches-list li .emphasis', {
    delay: 600
})

sr.reveal('.contact-content iframe', {
    delay: 600,
    distance: 0,
})

sr.reveal('.contact-infos li socials', {
    origin: 'top',
    delay: 800
})

sr.reveal('.contact-infos li h3', {
    origin: 'top',
    delay: 1000
})

sr.reveal('.contact-infos li div', {
    origin: 'top',
    delay: 1200
})
sr.reveal('.contact-infos li p', {
    origin: 'top',
    delay: 1200
})

sr.reveal('.plan', {
    origin: 'top'
})

sr.reveal('footer .logo')
sr.reveal('footer .paragraph', {
    delay: 400
})
sr.reveal('footer .footer_socials', {
    delay: 600
})

sr.reveal('footer .footer-list', {
    delay: 800,
    origin: 'bottom'
})

// statistics


// nav
const nav = document.querySelector('.nav');
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 0){
        nav.classList.add('scrolled');
    } else{
        nav.classList.remove('scrolled');
    }
})

// options
const as = document.querySelectorAll('.nav-options .option a');
const menuButton = document.querySelector('.menu');
const opcoes = document.querySelector('.nav-options');
as.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        document.body.classList.remove('menu-opened');
        opcoes.classList.remove('active');
    });
});
// menu
function menu(){
    opcoes.classList.toggle('active');
    menuButton.classList.toggle('active');
    document.body.classList.toggle('menu-opened');

}

