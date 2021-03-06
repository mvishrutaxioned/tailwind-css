// open navbar on click
$('#menu').click(() => {
    $('nav').removeClass('translate-x-full')
    $("html, body").css("overflow-y", "hidden")
})

// close navbar on click
$('#close').click(() => {
    $('nav').addClass('translate-x-full')
    $("html, body").css("overflow-y", "visible")
})

// feature slick slider
$(document).ready(() => {
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    })

    $('.featured-slider').slick({
        arrows: true,
        slidesToShow: 6,
        infinite: true,
        responsive: [
            { breakpoint: 995,
                settings: { slidesToShow: 4 }
            },
            { breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            { breakpoint: 540,
                settings: { slidesToShow: 2 }
            },
            { breakpoint: 320,
                settings: { slidesToShow: 1 }
            }
        ]
    })

    // radio slick slider
    $('.radio-slider').slick({
        arrows: true,
        slidesToShow: 6,
        infinite: true,
        responsive: [
            { breakpoint: 995,
                settings: { slidesToShow: 4 }
            },
            { breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            { breakpoint: 540,
                settings: { slidesToShow: 2 }
            },
            { breakpoint: 320,
                settings: { slidesToShow: 1 }
            }
        ]
    })
})