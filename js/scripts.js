/*!
    * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
    function resizeHeader() {
        var paddingValue = Math.round(($(window).height()-$('#header-container').height())/2);
        if (paddingValue <= 115) {
            paddingValue = 115;
        }
        $('header').css({ 'height': $(window).height() });
        $('#header').css({ 'padding-top': paddingValue+'px' });
    };

    (function ($) {
    "use strict"; // Start of use strict

    // shown banner and deactivate cookies if not agreed
    checkLocale();

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    //ensure that header image is always maxed and the content is centered
    resizeHeader();

    $(window).on('resize', function(){
        resizeHeader();        
    });

    //enabling the back-button for modal close but only when online
    /*switch(window.location.protocol) {
        case 'file:':
            break;
        default:
            $('.modal').on('shown.bs.modal', function() {
                if (typeof(this.dataset.hash) !== 'undefined') {
                    history.pushState(null, null, this.dataset.hash);
                }
            });

            $('.modal').on('hide.bs.modal', function(event) {
                if (this.dataset.pushback !== 'true') {
                    event.preventDefault();
                    history.back();
                }
                this.dataset.pushback = '';
            });

            window.onpopstate = function() {
                let open_modal = document.querySelector('.modal.show');
                if (open_modal) {
                    open_modal.dataset.pushback = 'true';
                    $(open_modal).modal('hide');
                };
            };
    }*/

})(jQuery); // End of use strict
