const supportSlider = () => {
    const supportSwiper = new Swiper('.support-swiper', {
        grabCursor: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default supportSlider