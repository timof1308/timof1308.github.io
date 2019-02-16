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

    new Text_Transform('#tt_title', {
        text: 'Text-Transform',
        chars: "@!§$%&\\/()=?+*#-_<>{}[]",
        loop: true,
    });

    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-indicator").style.width = scrolled + "%";

        $('.timeline .tl-container').each(function (index) {
            if ($(this).isInViewport()) {
                let _this = $(this);
                let animation = (index % 2 === 0) ? 'fade-in-right ease 0.4s forwards' : 'grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards'
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
            }
        });

        $('.hero').each(function (index) {
            let currentTop = $(window).scrollTop();
            let elemTop = $(this).offset().top;
            let elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                let _this = $(this);
                $('#info-text').html(_this.data('info'))
            }
        });
    }
});
