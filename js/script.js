const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.btn-testimonials--next',
        prevEl: '.btn-testimonials--prev',
    },

});

window.addEventListener('scroll', trackScroll, { passive: true });
let pageHeight = document.documentElement.scrollHeight;
const navItems = document.querySelectorAll('.nav__item');

function trackScroll() {
    let scrolled = window.pageYOffset;
    let deviceWidth = window.outerWidth;
    let scrolledPercent = Math.round((scrolled * 100) / pageHeight);
    let btnBurger = document.querySelector('.btn-burger');

    if (scrolledPercent > 2 && deviceWidth <= 780) {
        btnBurger.classList.add('btn-burger-show');
    }
    else {
        btnBurger.classList.remove('btn-burger-show');
    }

}

document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.btn-burger').classList.toggle('btn-burger--active');
    document.querySelector('.nav').classList.toggle('nav--active');
    const header = document.querySelector('.header');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.add('nav__item--active');

        navItems[i].addEventListener('click', resetNav);
    }

    if (document.querySelector('.btn-burger').classList.contains('btn-burger--active')) {
        hideScroll();
    }
    else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
};
const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
};

const resetNav = () => {
    document.querySelector('.btn-burger').classList.remove('btn-burger--active');
    document.querySelector('.btn__nav').classList.remove('btn__nav--active');
    document.querySelector('.nav').classList.remove('nav--active');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('nav__item--active');
    }
    showScroll();
};

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {

    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
};