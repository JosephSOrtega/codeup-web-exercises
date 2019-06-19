"use strict";

(function() {

var i = parseInt(prompt("Please enter an odd number between 1-50:"));

for (i > 0; i > 0; i-=2) {

    if (i % 2 === 0) {
        console.log("Hey! That's an even number. Try again");
        break;
    } else if (i === 27) {
        console.log('Yikes!, lets skip 27.');
        continue;
    }
    console.log(i);
}
})();
