(function ($) {
    "use strict";

    // stycky header
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('neel');
        } else {
            $('header').removeClass('neel');
        }

    })

    // SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 2500,
        speedAsDuration: true
    });


    // offcanvas-menu active js
    $(".humberg-icon img").on('click', function () {
        $(".offcanvas-menu, .offcanvas-menu-overlay").addClass("active");
    });

    $(".menu-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu, .offcanvas-menu-overlay").removeClass("active");
    });


    //typed js(for offcanvas menu)
    var typed = new Typed('.type', {
        strings: [
            'Student',
            'Marketing',
            'HRA',
        ],
        loop: true, // Default value
        typeSpeed: 80,
        backSpeed: 60,
        cursorChar: '.', // Default value
    });

    //typed js (for home section - just class change korci)
    var typed = new Typed('.home-type', {
        strings: [
            'Student',
            'Marketing',
            'HRA',
        ],
        loop: true, // Default value
        typeSpeed: 80,
        backSpeed: 60,
        cursorChar: '.', // Default value
    });


    // parallax JS start
    // home-parallax (parallax-js-01)
    var home = document.getElementById('home-parallax');
    var parallaxInstance = new Parallax(home);

    // about-left-parallax (parallax-js-02)
    var about = document.getElementById('about-left-parallax');
    var parallaxInstance = new Parallax(about);
    // parallax JS end


    // circle-progressbar
    var el = $('.single-progress'),
        inited = false;

    el.appear({
        force_process: true
    });

    el.on('appear', function () {
        if (!inited) {
            el.circleProgress({
                value: 0.7
            });
            inited = true;
        }
    });
    // progress bar 01
    $('#uiux-progress').circleProgress({
        value: 0.73,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#6928d9",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

    // progress bar 02
    $('#development-progress').circleProgress({
        value: 0.85,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#1573ff",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

    // progress bar 03
    $('#branding-progress').circleProgress({
        value: 0.48,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#16ffdb",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

    // progress bar 04
    $('#product-progress').circleProgress({
        value: 0.69,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        fill: "#16ffdb",
        emptyFill: "#15154c",
        fill: "#baff26",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

    // sponsor section slider (slick slider)
    $('.sponsor-brand').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // portfolio section js start
    // Isotope jQuery plugin
    var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    });
    // filter items on button click 
    $('.portfolio-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // masonary nav menu active JS
    $('.portfolio-menu li').on('click', function () {
        $('li').removeClass('active');
        $(this).addClass('active')
    });

    // Fancy-box
    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom-in-out",
        transitionEffect: "slide",

    });
    // portfolio section js end

    // activate wow.js
    new WOW().init();

    // hover 3d js start
    //hover 3d - 01 (about section)
    $(".about").hover3d({
        selector: ".about-hover3d-01",
        sensitivity: 30
    });

    //hover 3d - 02 (skill section)
    $(".skill").hover3d({
        selector: ".skill-hover3d-02",
        sensitivity: 30
    });

    //hover 3d - 03 (qualification section)
    $(".qualification").hover3d({
        selector: ".quali-hover3d",
        sensitivity: 30
    });

    //hover 3d - 04 (contact section)
    $(".contact").hover3d({
        selector: ".contact-hover3d",
        sensitivity: 30
    });

    //hover 3d - 05 (blog section)
    $(".blog").hover3d({
        selector: ".blog-hover3d-05",
        sensitivity: 30
    });
    // hover 3d js end

})(jQuery);