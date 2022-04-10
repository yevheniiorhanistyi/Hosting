const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.btn-testimonials--next',
        prevEl: '.btn-testimonials--prev',
    },

});

const header = document.querySelector('.header');
const navbar = document.querySelector(".btn-burger");
const menuTop = document.querySelector('.menu-top');
const menuMiddle = document.querySelector('.menu-middle');
const menuBottom = document.querySelector('.menu-bottom');
const navItems = document.querySelectorAll('.nav__item');
const sticky = navbar.offsetTop;

navbar.addEventListener('click', (event) => {

    if (navbar.classList.contains('btn-burger--active')) {
        resetNav();
    }
    else {
        navbar.classList.add('btn-burger--active');
        menuTop.classList.add('menu-top-click');
        menuMiddle.classList.add('menu-middle-click');
        menuBottom.classList.add('menu-bottom-click');
        document.querySelector('.nav').classList.add('nav--active');

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('nav__item--active');

            navItems[i].addEventListener('click', resetNav);
        }
        hideScroll();
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
    navbar.classList.remove('btn-burger--active');
    menuTop.classList.remove('menu-top-click');
    menuMiddle.classList.remove('menu-middle-click');
    menuBottom.classList.remove('menu-bottom-click');
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

let plansWrapper = document.querySelector('.plans-wrapper');

plansWrapper.addEventListener("mouseover", () => {
    document.querySelector('#secondItem').classList.remove('plans-wrapper__item--active');
});

plansWrapper.addEventListener("mouseout", () => {
    document.querySelector('#secondItem').classList.add('plans-wrapper__item--active');
});