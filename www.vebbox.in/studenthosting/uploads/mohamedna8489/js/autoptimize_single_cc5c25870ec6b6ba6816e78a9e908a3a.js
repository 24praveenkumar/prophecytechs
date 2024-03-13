(function($, window, document, undefined) {
    "use strict";
    // $('.tool-data.active .eurolandtool').EurolandIFrameAutoHeight();
    $(window).on('resize', function() {
        $('.tool-data.active .eurolandtool').EurolandIFrameAutoHeight();
    });
    $(document).on('click', '.goal', function() {
        var goalId = $(this).data('id');
        $('.sustainability-info').removeClass('selected');
        $('#' + goalId).addClass('selected');
    });
    $(document).ready(function() {
        $("#termsModal").modal('show');
    })
    $(document).on('click', '#search-btn', function() {
        if ($('#header-search-form').hasClass('show')) {
            $('#header-search-form').submit();
        } else {
            $('#header-search-form').addClass('show');
        }
    });
    $(document).on('click', '#tandc_agree', function() {
        document.cookie = "tandc_agree=true; path=/";
    });
    $(document).on('click', '.tool-btn', function() {
        var toolLink = $(this).data('tool');
        $('.tool-btn').removeClass('active');
        $('.tool-data').removeClass('active');
        $(this).addClass('active');
        $('#' + toolLink).addClass('active');
        $('.tool-data.active .eurolandtool').EurolandIFrameAutoHeight();
    });
    $.fn.isOnScreen = function() {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };
    $(document).on('click', '.sub-nav-link', function(e) {
        e.preventDefault();
        var keyValue = document.cookie.match('(^|;) ?sub_type=([^;]*)(;|$)');
        setCookie('sub_type', keyValue, '-1');
        var parentLink = $(this).data('parent');
        var linkHref = $(this).attr('href');
        document.cookie = "sub_type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        setCookie('sub_type', parentLink, 30);
        window.location.href = linkHref;
    });
    $('#mediaGalleryCarousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: ["<div class='nav-btn prev-slide'>Prev</div>", "<div class='nav-btn next-slide'>Next</div>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $('#mediaGalleryCarousel .slide').on('click', function() {
        var theSrc = $(this).find('img').attr('src');
        var owlModal = $('#owl-modal');
        owlModal.empty();
        $('<img>', {
            'src': theSrc
        }).appendTo(owlModal);
    });
    $('.filter-option').on('click', function() {
        var teamContainer = '#' + $(this).data('filter');
        $('.teams-container').removeClass('selected');
        $(teamContainer).addClass('selected');
    });
    $('.download-links .btn-link').on('click', function() {
        $('.download-links').removeClass('bg-selected');
        if ($(this).parent().parent().parent().parent().parent().children('.download-section').hasClass('show')) {} else {
            $(this).parent().parent().parent().parent().parent().addClass('bg-selected');
        }
    });

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
    $('.box').each(function() {
        if ($(this).isOnScreen()) {
            if ($(this).children('.fade-in').length < 1) {
                $(this).children().toggleClass('fade-in');
            }
        }
    });
    $(document).on('click', '.routes-wrapper-nav .line', function() {
        var line_id = $(this).data('id');
        $('.routes-wrapper-nav .line').removeClass('selected');
        $('.routes-wrapper img').removeClass('selected');
        $('#' + line_id).addClass('selected');
        $('#mob-' + line_id).addClass('selected');
        $(this).addClass('selected');
    });
    $(window).scroll(function() {
        var x = $(this).scrollTop();
        $('.background-image').css('background-position', 'center ' + parseInt(-x / 8) + 'px');
    });
    $(document).on('click', '.main-nav-option', function() {
        var id = $(this).data('id');
        $('#form-wrapper').removeClass('hide');
        $('#form-wrapper .expand').addClass('show');
    });
    $(document).on('click', '.virtual-map-filter', function() {
        $('.virtual-map-filter').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.visit.short', function() {
        var id = $(this).data('id');
        $('.profile-short').removeClass('open');
        $('#profile-short-' + id).addClass('open');
        $('#profile-short-bg').addClass('open');
    });
    $(document).on('click', '.profile-short-close', function() {
        $(this).parent().removeClass('open');
        $('#profile-short-bg').removeClass('open');
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".c-header").addClass("scrolled");
        } else {
            $(".c-header").removeClass("scrolled");
        }
    });
    $(document).on('click', '.chevron-down', function() {
        var nextSection = $(this).parent().next('section');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 300);
    });
    $(document).on('click', '#form-wrapper .expand', function() {
        $('#form-wrapper').removeClass('hide');
        $('#form-wrapper .expand').addClass('show');
    });
    $(".caret-down").on('click', function(event) {
        var nextSection = $(this).parent().next('section');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 800);
    });
    $(".nav-search").on('click', function(event) {
        $('#search-container').addClass('open');
        $('.corner').addClass('search');
    });
    $(document).on('click', '#btn-menu', function() {
        $('#main-navigation').toggleClass('open');
        $('#header-container').toggleClass('open');
        $('.c-header').toggleClass('menu-open');
        $(this).toggleClass('open');
    });
    $(document).on('click', '.back-to-top', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    $(document).on('click', '.menu-item-has-children a', function(e) {
        if ($(this).parent().children('.sub-menu').length > 0) {
            e.preventDefault();
            $(this).parent('li').parent('ul').children('li').children('a').removeClass('selected');
            $(this).parent('li').parent('ul').children('li').children('.sub-menu').removeClass('open');
            $(this).addClass('selected');
            $(this).parent().children('.sub-menu').addClass('open');
        }
    });
    $(".link-item").hover(function() {
        $('.link-item').removeClass('selected');
        $('.link-bg').removeClass('selected');
        $(this).addClass('selected');
        var iValue = '#' + $(this).data('id');
        $(iValue).addClass('selected');
    }, function() {});
    $(".content-icon-wrapper").hover(function() {
        $('.question').toggleClass('hide');
    });
    $(".slide-inner").hover(function() {
        $(this).parent().parent().parent().parent().parent().children('.slide-bg').toggleClass('hover');
    });
    var myCarousel = document.getElementById('carouselBanner');
    if (myCarousel) {
        myCarousel.addEventListener('slide.bs.carousel', function() {
            $('.carousel-item').each(function() {
                if ($(this).hasClass('active')) {} else {
                    console.log('Restart function v3');
                    var video = $(this).children('video').get(0);
                    video.pause();
                    video.currentTime = 0;
                    video.play();
                }
            });
        });
    }
    let items = document.querySelectorAll('.carousel-team .carousel-item')
    if (items) {
        items.forEach((el) => {
            const minPerSlide = 4
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    }
    $(document).on('click', '.inner-navigation-btn', function() {
        console.log(999);
        var activeTab = $(this).data('nav');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.inner-navigation-btn').removeClass('active');
            $(this).addClass('active');
        }
        if ($(".inner-navigation-links:not(" + activeTab + ")").hasClass('active')) {
            $(".inner-navigation-links:not(" + activeTab + ")").removeClass('active').delay(800).queue(function() {
                $(activeTab).addClass('active').dequeue();
            });
        } else {
            $(activeTab).toggleClass('active');
        }
    });
})(jQuery, window, document);