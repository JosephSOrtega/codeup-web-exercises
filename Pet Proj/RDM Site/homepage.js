"use strict";


(function () {
        $(window).scroll(function () {
            $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 800);
            $(".navbar").css("opacity", 1 - $(window).scrollTop() / 800);
            if (($('.navbar').css("opacity")) < .2) {
                $('.navbar').css("opacity", ".2")
            }

        });


})();

