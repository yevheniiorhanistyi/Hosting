const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.btn-testimonials--next',
        prevEl: '.btn-testimonials--prev',
    },

});

// document.querySelector('.btn-burger').addEventListener('click', (event) => {
//     document.querySelector('.btn-burger').classList.toggle('btn-burger--active');
//     document.querySelector('.btn__nav').classList.toggle('btn__nav--active');
//     document.querySelector('.nav').classList.toggle('nav--active');
//     const header = document.querySelector('.header');

//     header.classList.toggle('header--active');

//     if (header.classList.contains('header--active')) {
//         hideScroll();
//     }
//     else {
//         showScroll();
//     }
// });

// const hideScroll = () => {
//     const scrollWidth = `${getScrollbarWidth()}px`;

//     document.body.style.paddingRight = scrollWidth;
//     document.body.style.overflow = 'hidden';
// };
// const showScroll = () => {
//     document.body.style.paddingRight = '';
//     document.body.style.overflow = 'visible';
// };

// const resetNav = () => {
//     document.querySelector('.header').classList.remove('header--active');
//     document.querySelector('.btn-burger').classList.remove('btn-burger--active');
//     document.querySelector('.btn__nav').classList.remove('btn__nav--active');
//     document.querySelector('.nav').classList.remove('nav--active');
//     showScroll();
// };

// window.addEventListener('resize', resetNav);

// // Get scrollbar width
// const getScrollbarWidth = () => {

//     const outer = document.createElement('div');

//     outer.style.position = 'absolute';
//     outer.style.top = '-9999px';
//     outer.style.width = '50px';
//     outer.style.height = '50px';
//     outer.style.overflow = 'scroll';
//     outer.style.visibility = 'hidden';

//     document.body.appendChild(outer);
//     const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
//     document.body.removeChild(outer);

//     return scrollbarWidth;
// };