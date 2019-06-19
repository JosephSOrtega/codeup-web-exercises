"use strict";

(function() {





//4
for (var i = 105; i >= 5; i -= 5) {
    console.log(i);
    if (i === 5) {
        break;
    }
}


//3

for (var Apple =1; Apple < 10; Apple++) {
    var output = Apple.toString();

    while (output.length < Apple) {
        output = (output+Apple.toString());
    }
    console.log(Number(output))
}








//2
for (var i = 1; i < 11;i++) {
        var radoNum = Math.floor(Math.random() * 20) + 180;
        if (radoNum % 2 === 0) {
            console.log(radoNum + " is even!");
        } else {
            console.log(radoNum + " is odd!");
        }
}


//1
function showMultiplicationTable(a) {
    for (var i = 1; i < 11; i++) {
        console.log(a + " x " + i + " =  " + (a * i));
    }
}
console.log(showMultiplicationTable(7));


})();