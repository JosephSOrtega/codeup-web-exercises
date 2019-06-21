(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 2,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return (Math.PI * Math.pow(circle.radius,2)); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
                if (doRounding === true) {
                    var num = this.getArea();
                    return(Math.round(num));
                } else {
                    // console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());
                    return circle.getArea();
                }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();
