function sayHello(name){
    return 'Hello, ' + name + "!";
}
var helloMessage = sayHello(Joseph);

console.log(helloMessage);









// function sayHello(){
//     // console.log("Hello World");
//     return "Hello World"
// }
// sayHello();
//
// var greeting = sayHello();
//
//
// //function expression:
//
// var sayHello = function(){
//     return "hello world"
// };
//
// // //this function expression does same as the one before^
//
// function add(a, b){
//     var sumOf = a + b;
//     return sumOf;
// };
// var multiply = function(a,b){
//     return Number(a*b);
// };
// "use strict";
// (function (){
//     //variable stores what user had for lunch - String
//     var lunch = prompt("What did you eat?");
//     //function concatenates String - returns new String
//     function digest(food) {
//         return "not " + food + " anymore";
//     }
//     //call function in argument, logs results.
//     console.log(digest(lunch));
//
//
// })();
//
//
// "use strict";
// (function (){
//     //ask user for password
//     var password = prompt("Please enter your password");
//
//     //function call shows hidden copy of password.
//     function hidePassword(pass){
//         var fullPassword = pass.substring(0,pass.length);
//         var hiddenPassword = pass.replace(fullPassword,"_");
//         return "your password is: " + hiddenPassword;
//     }
//     console.log(hidePassword(password));
//
//
// })();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //JS Introduction
//
// var dude = "wassup?";
// var wassup = "WASSSSSUP?!";
// var wassssup = "Not much, my fellow chap. You?";
// var notMuchJustCoding = "Cool dude, good luck!"
//
// //2.
// var sample = "Hello Codeup";
// sample.length;
// sample.toUpperCase();
// sample.toLowerCase();
// sample += " Students";
// sample.indexOf('c');
// sample.indexOf('C');
// sample.substring(sample.indexOf('C'),sample.indexOf('p')+1)
//
// //3.1
// var littleMer = 3;
// var brotherBear = 5;
// var hercules = 1;
// var dayRent = 3;
// var rentOwed = (littleMer + brotherBear + hercules) * dayRent;
//
// //3.2
// var google =400*6;
// var amazon =380*4;
// var face =350*10;
// var weeklyPay = google+amazon+face;
//         //or
// var google =400;
// var amazon =380;
// var face =350;
// var weeklyPay = (google*6)+(amazon*4)+(face*10);
//
// //3.3
// var classDay = 7;
// var classesNow = 5;
// var newClasses = 2;
// var classResult = classDay - (classesNow + newClasses);
//         //or
// var maxClassSize = 24;
// var currentClassSize = 23;
// var classTime="11:30";
// var newClassTime = "11:30";
// //classTime != newClassTime && currentClassSize <= maxClassSize
//
// //3.4
// var number = 1;
// var date = 2019;
// var membershipStatus = true;
// var moreThantwo = number>=2;
// var discount = (membershipStatus) || ((moreThantwo>=2) && (date >= 2019));
//
// //4
// var username = 'codeup';
// var password = 'notastrongpassword';
//
// var pwLength = 5;
// var MaxUNLength = 20;
//
// var accountCreated = (username.length <= MaxUNLength)
//     && ((password.length >= pwLength)
//     && (password.indexOf(username) < 0))
//     && (username.trim() === username) && (password.trim() === password);