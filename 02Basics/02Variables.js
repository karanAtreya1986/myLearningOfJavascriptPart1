/*
This is like creating user registration page.
*/

const userId="abcd1234";

//userId=23423423;

var fullName = "Karan Vaidyanathan Atreya";
var email="karan@gmail.com";
var password="erwer2134234200";
var confirmPassword="erwer2134234200";
var courseTakenCount=0;
var isLoggedFromGoogle=false;

//alerts are for the pop ups we see on browser pages.
//alert("Annoying message we get on websites -- the pop ups")

//take input from the users, but we need to attach to webpage like first code.
//fullName = prompt("Enter your name");

//console.log(fullName);

//concat strings with variables
//console.log("the email id is " + email);

//concat strings with variables with comma
//console.log("the confirmPassword  is ", confirmPassword);

//with back ticks better way to write console.log
console.log(`
    with id : ${userId}
    user name is : ${fullName}
    and password id ${password}
    and check ${isLoggedFromGoogle} value is true or false
    `)