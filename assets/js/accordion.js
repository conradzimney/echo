"use strict";

$(document).ready(function() {
    $("#slider").zAccordion({
        tabWidth: 170,
        speed: 1500,
        slideClass: 'slider',
        animationStart: function () {
            $('#slider').find('li.slider-open div').css('display', 'none');
            $('#slider').find('li.slider-previous div').css('display', 'none');
    },
    animationComplete: function () {
        $('#slider').find('li div').fadeIn(600);
    },
    width: window.innerWidth,
    height: 600
    });
});