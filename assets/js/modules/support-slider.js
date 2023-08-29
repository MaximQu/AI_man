const supportSlider = () => {
    const supportSwiper = new Swiper('.support-swiper', {
        grabCursor: true,
        slidesPerView: 'auto',
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     575: {
        //         slidesPerView: 2,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //     },
        //     1199: {
        //         slidesPerView: 4,
        //     }
        // },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default supportSlider