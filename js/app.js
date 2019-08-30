$(document).ready(function () {
    // Show sidebar when clicked
    $('#header-btn').on('click', function (e) {
        if (!$('#header').hasClass('header-fill')) {
            $('#header').toggleClass('header-fill');
        }
        $('.nav-btn').toggleClass('active');
        if ($('.sidebar').is(':visible')) {
            $('.sidebar').hide();
            $('body').css('overflow', 'auto');
        } else {
            $('.sidebar').show();
            $('body').css('overflow', 'hidden');
        }
    });

    // transparent navbar --> fill with page scroll
    if ($(window).scrollTop() >= 120) {
        $('#header').not($('.no-transition')).addClass('header-fill');
    } else {
        $('#header').not($('.no-transition')).removeClass('header-fill');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 120) {
            $('#header').not($('.no-transition')).addClass('header-fill');
        } else {
            $('#header').not($('.no-transition')).removeClass('header-fill');
        }
    });

    // Text Transform Live Demo
    new Text_Transform('#tt_title', {
        text: 'Text-Transform',
        chars: "@!§$%&\\/()=?+*#-_<>{}[]",
        loop: true,
    });

    // on page scroll
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-indicator").style.width = scrolled + "%";

        let isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPod|iPad/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return ((isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()));
            }
        };


        // timeline fade in elements on scroll
        $('.timeline .tl-container').each(function (index) {
            if ($(this).isInViewport() && !isMobile.any()) {
                let _this = $(this);
                let animation = (index % 2 === 0) ? 'fade-in-right ease 0.4s forwards' : 'grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards';
                if (index % 2 !== 0) {
                    _this.css('transform', 'scaleX(0)');
                    _this.css('transform-origin', 'left');
                } else {
                    _this.css('opacity', '0');
                }
                $('.timeline::after').css('z-index', '-10');
                setTimeout(function () {
                    _this.css('animation', animation);
                    _this.css('animation-delay', '0.45s');
                }, 250);
            } else {
                // autodisplay
                let _this = $(this);
                _this.css('opacity', '1');
            }
        });

        // navbar header info text on scroll
        $('.hero').each(function (index) {
            let currentTop = $(window).scrollTop();
            let elemTop = $(this).offset().top;
            let elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                let _this = $(this);
                $('#info-text').html(_this.data('info'))
            }
        });
    };

    // skills loop
    var slider_nav_loop;
    slider_nav_loop = setInterval(skill_nav_loop,4000);

    // stop loop on click
    $('.slider-nav').on('click', function () {
        clearInterval(slider_nav_loop);

        // start loop again after 7,5s
        setTimeout(function () {
            slider_nav_loop = setInterval(skill_nav_loop, 4000);
        }, 7500)
    });

    // select next input
    function skill_nav_loop() {
        $('.slider-nav')
            .eq( ( $('input:checked').index() + 1 ) % 12 )
            .prop( 'checked', true );
    }
});
