$(document).ready(function () {
    $('#header').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        pauseOnHover: false,
        speed: 1000,
        arrows: false
    })

    $('#clients').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 599,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              }
        ]
    })
});