
"use script";




// Promises
//////////////////////////////////////////////////////////////////////////////////////
$.get("https://api.chucknorris.io/jokes/random")
    .done(function (data) {
        console.log(data.value)
    })
    .fail(function (data) {
        console.log("there was an error")
    });

//equals:

$.get("https://api.chucknorris.io/jokes/random")
    .done((data) => {
        resolve(data)
    })
    .fail((err) => {
        reject(err)
    })
    .then(data => {
        console.log(data.value)
    })
    .catch(err => {
        console.log("there was an error" + err)
    });

//Equals with Fetch

fetch("https://api.chucknorris.io/jokes/random")
//gets the shit from the site
    .then(response => response.json())
    //delivers and formats to json
    .then(data => console.log(data.value));
//displays the results


//////////////////////////////////////////////////////////////////////////////////////


$.ajax("https://icanhazdadjoke.com", {headers: {Accept: "application"}})
    .done(function (data) {
        console.log(data.joke)
    })
    .then(data => {
        console.log(data.value)
    })
    .catch(err => {
        console.log("there was an error" + err)
    });




//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////




//AJAX Notes
// GET requests can be submitted in
//      Forms - <form method='get' action="url here"></form>
//      Link - <a href="url here"></a>
//      Type in URL
// POST vs GET
// GET can be cashed in the system
// POST is more secure and isnt seen or cashed.
//
//AJAX uses XML and JSON, should be called JSON
//JSON is just for sending data, not functions
//
//      $.ajax("/some-url") is a basic request
//
//      $.ajax("/some-url", {
//     type: "POST",
//     data: {
//         name:     "John",
//         location: "Boston"
//     }
// });
//      The easiest way to manipulate the Ajax options is to pass a JavaScript object
//      In this example, we are instructing jQuery to send a POST request rather than GET and to pass some additional information to the server with the request (name: John, location: Boston).
//
//      The Ajax options object has numerous parameters and values it can use. Some of the most common options are:
//
// type — The type of HTTP request to send to the server. Can be "GET", "POST", "PUT", or "DELETE". The default is "GET".
// data — Data to be included with the request. Typically this will be a JavaScript object. If the request type is GET the data will be encoded into the URL being requested. Otherwise, it is included with the request behind the scenes.
// dataType — The type of data we expect the server to send back from our request. Common options are "json", "xml", "html", or "text". By default, jQuery will try to guess this value based on the response content.
// url — Rather than passing the request URL as a string to $.ajax() you can just pass a JavaScript object on its own and include the url option to specify where to send the request. We will see an example of this further on.
// username & password — If a server requires a username and password you can specify it using these parameters.
// headers — an object of whose key value pairs represent custom HTTP headers to send along with the request
//
//
//A function that we create to be called when some process completes is called a callback function. The primary way to attach a callback to your Ajax request is to tack .done() to the end of your request and pass your callback to it, like the following:
//
//
// $.ajax("/some-url").done(function(data, status, jqXhr) {
//     alert("AJAX call completed successfully!");
//     console.log("Request status: " + status);
//     console.log("Data returned from server:");
//     console.log(data);
// });
//
//                                      jslint.com to check syntax
//
//          Asynchronous JavaScript and XML)
//
//          A Higher Order Function- A higher order function is a function that takes a function as an argument, or returns a function . Higher order function is in contrast to first order functions, which don't take a function as an argument or return a function as output.Mar 3, 2017
//
//          Stays inside the local scope
//
//          Request verification
//









//
//
//
//
//
// function convertNameToObject (name) {
//     var nameArr = name.split(" ");
//     return {
//         firstName: nameArr[0],
//         lastName: nameArr[1]
//     }
// }
//
// function capitalizeName(name) {
//     var nameObj = convertNameToObject(name);
//     var firstName = nameObj.firstName.substring(0,1).toUpperCase() + nameObj.firstName.substring(1);
//     var lastName = nameObj.lastName.substring(0,1).toUpperCase() + nameObj.lastName.substring(1);
//     return firstName + " " + lastName;
//
// }
//
// function capitalizeAllNames(names) {
//     var arr = [];
//     arr.push(capitalizeName(name));
//     return arr;
// }
//
// //
// // document.querySelectorAll('li').forEach(function (element, i) {
// //     if (i % 2 ===0) {
//         element.style.backgroundColor = '#ef0'
//     }
//
// });




// var lineCount = 1;
//
// if (lineCount >= 5){
//     removeLine()
// }
// var paragraph = document.getElementById("p");
// var div = document.getElementById("div");
//
//
// function newLine() {
//     lineCount+=1;
//     var newParagraph = document.getElementsByTagName('p')[0];
//     var newText = document.createTextNode("Another Text Line Here!");
//     newParagraph.appendChild(newText);
//     var newBreak = document.createElement("br");
//     newParagraph.appendChild(newBreak);
//     if (lineCount >= 5){
//         removeLine()
//     }
// }
//
// function removeLine() {
//     div.removeChild(paragraph);
// }
//
//
// function lotsOfLines() {
// for (var i = 1; i < 10; i++) {
//         if(i > 11) {
//             return
//         } else {
//             newLine()
//         }
//     }
// }
//
//
//


















// // fizzbuz
// var num = parseInt(prompt("Pick a number"));
// for (var i = 1; i < num; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("Fizz Buzz");
//         continue;
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz ");
//         continue;
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//         continue;
//     }
//     console.log(i);
// }
//
//
//
//
//
// function splitStringOnLetter(string, letter) {
//     if (letter.length > 1 || letter.length < 1 || !isNaN(letter)) {
//         return false;
//     } else if (letter === letter.toUpperCase()) {
//         let arr = String(string).split(letter);
//         let finalArr = [];
//         arr.forEach(function(string) {
//             finalArr = finalArr.concat(string.split(letter.toLowerCase()));
//         });
//         return finalArr;
//     } else {
//         let arr = String(string).split(letter);
//         let finalArr = [];
//         arr.forEach(function(string) {
//             finalArr = finalArr.concat(string.split(letter.toUpperCase()));
//         });
//         return finalArr;
//     }
// }
//
//
// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//
//
//









//
// // IIFE Example
// "use strict";
//  for (var ourHand = 0; ourHand <= 21; ourHand += Math.floor((Math.random()*11)+1)){
//      alert("Your hand is now " + ourHand);
//      //keepgoing =
//      if (confirm("Do you want another card?")) {
//          continue;
//      } else {
//          break;
//      }
//  }
// alert("Game over!");
//
//


//
// var count = 0;
// while (count <10){
//     console.log("Count is now " + count);
//     count++
// }
// console.log("Done with the loop.");
//
// //or
//
//
// for (var count = 0; count <10; count++){
//     console.log("Count is now " + count);
// }
// console.log("Done with the loop.");
//
//
//
// //Guess the number!!!
// function guessingGame() {
//     var input = Number(prompt("Guess a number between 1-10:"));
//     var radoNum = (Math.floor(Math.random() * 10) + 1);
//     var guess = true;
//     console.log(radoNum);
//     while (guess === true) {
//         if (input === 0) {
//             var guess = false;
//             alert("Cya!")
//             break;
//         }
//         if (input === radoNum) {
//             var guess = false;
//             alert("Congrats! You guessed right!")
//         } else if (input !== radoNum) {
//             var guess = alert("Guess again! " + input + " was not right!");
//             guessingGame(input);
//             break;
//         }
//     }
// }
//
//
// console.log(guessingGame());


// (function() {
//     var keepGoing = true;
//     var ourHand = 0;
//
//     function hitMe() {
//         var nextCard = Math.floor((Math.random() * 11) + 1);
//         ourHand += nextCard;
//     }
//
//     while(keepGoing) {
//         keepGoing = confirm("Do you want another card?");
//         if (keepGoing) {
//             hitMe();
//             alert("Our hand is now " + ourHand);
//             if (ourHand > 21) {
//                 keepGoing = false;
//                 alert("You busted!");
//             }
//         }
//     }
//
// var count = 1;
//     while (count < 10) {
//         console.log("Count is now " + count);
//         count++
//     }
// })();

















// //Assessment shit
//
// //1
// function isBoolean(input) {
//     return typeof input === "boolean"
// }
//
//
// //2
// function isNumeric(valuetwo) {
//     if (typeof(valuetwo)==="boolean" || valuetwo===null){
//         return false
//     } else {
//         return !isNaN(valuetwo);
//     }
// }
//
//
// //3
// function isString(valuethree) {
//     return typeof(valuethree) === "string";
// }
//
//
// //4
// function isArray(valueFour) {
//     return Array.isArray(valueFour);
// }
//
//
// //5
// function isNegative(valueFive) {
//     return valueFive < 0;
// }
//
//
// //6
// function isPositive(valueSix) {
//         return parseInt(valueSix) > 0;
// }
//
//
// //7
// function increment(valueSeven) {
//     if (isNumeric(nuvalueSeven) === false) {
//         return false
//     } else {
//         return Number(valueSeven) + 1
//     }
// }
//
//
// //8
// function decrement(valueEight) {
//     if (isNumeric(valueEight) === false) {
//         return false
//     } else {
//         return Number(valueEight) - 1
//     }
// }
//
// //9
// function square(valueNine) {
//     if (!isNumeric(num)) {
//         return false
//     } else {
//         return Math.pow(valueNine, 2)
//         // or valueNine * valueNine
//     }
// }
//
//
// //10
// function upperCase(valueTen) {
//     if (isString(valueTen) && isNaN(parseInt(valueTen))){
//         return valueTen.toUpperCase();
//     } else {
//         return false;
//     }
// }
//
// //11
// function isPalindrome(valueEleven) {
//     if (typeof (valueEleven) !== "string") {
//         return false
//     } else {
//         var splitEmUp = ((valueEleven).toLowerCase()).split('');
//         var reverseEm = splitEmUp.reverse();
//         var joinArray = reverseEm.join('');
//         return (joinArray === valueEleven.toLowerCase())
//     }
// }
//
//
// //12
// function getHighestNumber(a,b,c) {
//     if ((isNaN(Number(a))) || (isNaN(Number(b))) || (isNaN(Number(c)))) {
//         return false
//     } else {
//         return Math.max(a, b, c);
//     }
// }
//
//
// //13
// function containsVowel(abc) {
//     if (typeof (abc) !== "string") {
//         return false
//     } else {
//         return ((abc.indexOf('a') >= 0) || (abc.indexOf('e') >= 0) || (abc.indexOf('i') >= 0) || (abc.indexOf('o') >= 0) || (abc.indexOf('u') >= 0))
//     }
// }
//
//
// //14
// function add(onceAgain,andAgain) {
//     if (isNumeric(onceAgain) && isNumeric(andAgain)){
//         return parseFloat(onceAgain) + parseFloat(andAgain);
//     } else {
//         return false;
//     }
// }
//
//
// //15
// function multiply(onceAgain,andAgain) {
//     if (isNumeric(onceAgain) && isNumeric(andAgain)){
//         return parseFloat(onceAgain) * parseFloat(andAgain);
//     } else {
//         return false;
//     }
// }
//
//
// //16
// function sumOfSquares(onceAgain,andAgain) {
//     return add(square(onceAgain), square(andAgain));
// }
//
//
//



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