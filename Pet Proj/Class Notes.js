




















//JS Introduction

var dude = "wassup?";
var wassup = "WASSSSSUP?!";
var wassssup = "Not much, my fellow chap. You?";
var notMuchJustCoding = "Cool dude, good luck!"

//2.
var sample = "Hello Codeup";
sample.length;
sample.toUpperCase();
sample.toLowerCase();
sample += " Students";
sample.indexOf('c');
sample.indexOf('C');
sample.substring(sample.indexOf('C'),sample.indexOf('p')+1)

//3.1
var littleMer = 3;
var brotherBear = 5;
var hercules = 1;
var dayRent = 3;
var rentOwed = (littleMer + brotherBear + hercules) * dayRent;

//3.2
var google =400*6;
var amazon =380*4;
var face =350*10;
var weeklyPay = google+amazon+face;
        //or
var google =400;
var amazon =380;
var face =350;
var weeklyPay = (google*6)+(amazon*4)+(face*10);

//3.3
var classDay = 7;
var classesNow = 5;
var newClasses = 2;
var classResult = classDay - (classesNow + newClasses);
        //or
var maxClassSize = 24;
var currentClassSize = 23;
var classTime="11:30";
var newClassTime = "11:30";
//classTime != newClassTime && currentClassSize <= maxClassSize

//3.4
var number = 1;
var date = 2019;
var membershipStatus = true;
var moreThantwo = number>=2;
var discount = (membershipStatus) || ((moreThantwo>=2) && (date >= 2019));

//4
var username = 'codeup';
var password = 'notastrongpassword';

var pwLength = 5;
var MaxUNLength = 20;

var accountCreated = (username.length <= MaxUNLength)
    && ((password.length >= pwLength)
    && (password.indexOf(username) < 0))
    && (username.trim() === username) && (password.trim() === password);