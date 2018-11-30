$(document).ready(function () {
    // Show dropdown when clicked
    $('#header-btn').on('click', function (e) {
        $('#header-menu').toggleClass('active');
        $('.nav-btn').toggleClass('active');
        $('.header-nav').hide();
        $('.mobile-menu').toggleClass('open');
    });

    // Hide menu after clicking menu item
    $('.dropdown-menu li').on('click', function (e) {
        $('#header-menu').removeClass('active');
        $('.nav-btn').removeClass('active');
        $('.header-nav').show();
        $('.mobile-menu').toggleClass('open');
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
    })
});
