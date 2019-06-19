"use strict";


(function() {
    function twoD6Roller(){
        var rolls2d6 = [2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12];
        var i = Math.floor(Math.random() * 35);
        alert("You rolled: " + rolls2d6[i] + "!");

    }
    // console.log(twoD6Roller());
})();


(function() {
    function twoD6PlusRoller(){
        var rolls1d6 = [1,2,3,4,5,6];
        var h = Math.floor(Math.random() * 6);
        // console.log(rolls1d6[h]);
        var j = Math.floor(Math.random() * 6);
        // console.log(rolls1d6[j]);

        alert("You rolled: " + (Number(rolls1d6[h]) + Number(rolls1d6[j])) + "!");
    }
    // console.log(twoD6PlusRoller());
})();


//Below is the game start, ask if play
(function() {

console.log(answer(confirm("Hey there! Want to go on an adventure?")));

function answer(a) {
    if (true) {
        alert("Okay! Have a great day!");
    } else if (false){
        alert("Let's get going, then!");
        console.log()
    }
}




})();
