"use strict";

alert("Welcome to my Website!");
// the following line will show the OK/CANCEL confirm dialog

var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

var userInput = prompt('Whats your favorite color?');
console.log('Great, ' + userInput + ' is my favorite color too!');

console.log('Hello from external JavaScript');


//3.1
alert("I have a few questions about the movies you rented...");

var userInputLM = prompt('How many days are you renting The Little Mermaid?');
var totalLM = parseInt(userInputLM);
var userInputBB = prompt('How many days are you renting Brother Bear?');
var totalBB = parseInt(userInputBB);
var userInputH = prompt('How many days are you renting Hercules?');
var totalH = parseInt(userInputH);
var rentOwedUI = (totalLM + totalBB + totalH) * dayRent;

alert('At a rate of $3 per night, Your total expense for movies this week is: $' + rentOwedUI);


//3.2

alert("You've had a busy week! Lets see how much you made.")

var userInputG = prompt('How many hours did you work for Google this week?');
var totalG = parseInt(userInputG) * 400;
var userInputA = prompt('How many hours did you work for Amazon this week?');
var totalA = parseInt(userInputA) * 380;
var userInputF = prompt('How many hours did you work for Facebook this week?');
var totalF = parseInt(userInputF) * 350;
var weeklyPay = totalG + totalA + totalF;

alert('You had a killer week! You made $' + weeklyPay);



//3.3

alert("Gosh, your schedule looks packed. Lets see if you can fit that new class in...")

var userInputOpenPeriod = prompt('When is the class you want to take?');
var userInputMaxCS = prompt('What is the max class size?');
var classesNow = parseInt(userInputMaxCS) + 1;
var class1 = "8:00"
var class2 = "9:00"
var class3 = "10:00"
//open call for 11
var class4 = "13:00"
var class5 = "14:00"
var class6 = "15:00"
var class7 = "16:00"
//userInputOpenPeriod !== class1 || class2 || class3 || class4 || class5 || class6 || class7
alert("Congrats! You got the last slot for the class! the max class size is " + userInputMaxCSMaxCS + ", but you got the last spot making the new class size " + classesNow + ".");


//3.4

alert("You may be subject to a Premium Discount! Lets see if you qualify...")

var userMemberStatus = prompt('Are you a Premium Member?');
var userItemNum = prompt('How many items did you buy?');
var userOfferDate = prompt('What year is it?');

/* I need Conditionals to make it work.
* = userOfferDate >= 2019;
* = userMemberStatus.indexOf(yes) > 0;
* = userItemNum >=2;
*/