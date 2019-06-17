








// //If/else statements
//
// var x = 5;
// if (x >= 5) {
//     console.log("X is greater than or equal to 5.")
// }
// //or
// function isItANumber(parameter) {
//     if (isNaN(parameter) === false) {
//         return "That's a number!"
//     } else {
//         return "That's not a number!"
//     }
// }
//
// console.log(isItANumber(777));
// console.log(isItANumber("Bob"));
//
//
// //break
// var haveCow = false;
//
// if (haveCow === false) {
//     console.log("Headed to Kroger")
// } else {
//     console.log("Milking Bessie.")
//
// }
//
// //Break
//
// var haveCow = false;
// var haveGoat = true;
//
// if (haveCow === true) {
//     console.log("Milking Bessie.")
// } else if (haveGoat === true){
//     console.log("Thank god I have Billy Sue!")
// } else {
//     console.log("Headed to Kroger.")
//
// }
//
// // //Break
//
// function isThisThirtyFive(parameter){
//         if (parameter > 35) {
//             return "That number," + parameter + ", is greater than 35."
//         } else if (parameter === 35) {
//             return "That number," + parameter + ", is equal to 35."
//         } else if (parameter < 35) {
//             return "That number," + parameter + ", is less than 35."
//         } else {
//             return "That ain't no number!"
//         }
// }
// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(35));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive("Bobby"));
//
// //Break
//
// var action = (doWeHaveMilk) ? "I want to make a bowl of cereal." : "I'll head to the store." ;
// var doWeHaveMilk = false;
// console.log(action);
//
// //break
//
// function isItANumber(parameter) {
//     if (isNaN(parameter) === false) {
//         return "That's a number!"
//     } else {
//         return "That's not a number!"
//     }
// }
//
// //or the alt option:
//
// // return (isNaN(parameter)) ? "That's not a number..." : "That's a number!";

//Switch Statement
//
// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch (color) {
//     case "green":
//         alert("What a coincidence, that's my friend's favorite!");
//         break;
//     case "blue":
//         alert("What a coincidence, that's my brother's favorite!");
//         break;
//     case "orange":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     default:
//         alert(color + "is a weird color, my dude!");
//         break;
// }
//
// //break
//
// var animal = "n/a";
// switch (animal){
//     case "cow":
//         console.log("Milking Betty Lynn");
//         break;
//     case "goat":
//         console.log("Milking Bertha");
//         break;
//     case "camel":
//         console.log("Milking Ophelia");
//         break;
//     default:
//         console.log("Heading to HEB to buy milk.");
//         break;
// }
//
// //Break
//
// var favMeat = prompt("WHat's your favorite sandwich meat?").toLowerCase();
//
// switch (favMeat) {
//     case "olive loaf":
//         alert("Congrats, you are a brave soul...");
//         break;
//     case "brisket":
//         alert("Thank you for picking the right answer.");
//         break;
//     default:
//         alert(favMeat + "? Really?...Do better, scrub.");
//         break;
// }


// function sayHello(name){
//     return 'Hello, ' + name + "!";
// }
// var helloMessage = sayHello(Joseph);
//
// console.log(helloMessage);
//
//
//






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