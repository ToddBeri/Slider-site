// slider1 = new Swiper('.slider1',{
//     freeMode: true, //переключаются не на фиксированное расстояние, а свебодно
//     centeredSlides: true, // центрирование относительно других
//     direction:'vertical', // вертикальное движение слайдов
//     mousewheel: true, // управление мышью
//     slidesPerView: 1.75,
// })

document.querySelectorAll('.slider').forEach((n, i) =>{
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true, //переключаются не на фиксированное расстояние, а свебодно
        centeredSlides: true, // центрирование относительно других
        direction: 'vertical', // вертикальное движение слайдов
        mousewheel: true, // управление мышью
        slidesPerView: 1.75,
        slidesOffsetBefore: -125
    })
})
bindSwipers (slider1, slider2, slider3, slider4)

