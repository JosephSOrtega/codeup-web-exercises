"use strict";


(function () {
    let opac;

    function fadeInEffect() {
        $('.navbar').animate({
            opacity: 1,
        }, 200, "linear", {
            step: function () {
            }
        })
    }

    function fadeOutEffect() {
        $('.navbar').animate({
            opacity: opac,
        }, 100, "linear", {
            step: function () {
            }
        })
    }

    $(window).scroll(function () {
        $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 800);
        $(".navbar").css("opacity", 1 - $(window).scrollTop() / 800);
        if (($('.navbar').css("opacity")) < .1) {
            $('.navbar').css("opacity", ".1")
        }
        $('.navbar').hover(function () {
            opac = $('.navbar').css("opacity");

            fadeInEffect()
        }, function () {
            fadeOutEffect()

        });
    });


})();

