"use strict";
(function() {
    var i = 2;

    while (i < 65537) {
        console.log(i);
        var i = i * 2;
    }

// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);
// This expression will generate a random number between 1 and 5
    var conesSold = 0;
    do {
        var justBought = Math.floor(Math.random() * 5) + 1;
        var conesSold = justBought + conesSold;
        console.log("This person bought " + justBought + " cones! There are only " + (allCones - conesSold) + " cones left!");
        console.log(conesSold + " cones have been sold so far");

        if (conesSold === allCones) {
            console.log("Yay! I sold them all!");
        } else if (conesSold > allCones) {
            var conesSold = justBought - conesSold;
        }
    } while (allCones > conesSold);
})();

