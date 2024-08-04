//TODO: Part 1 of the this keyword

// console.log(this); // this will say whats there in global context.

/*
weird code output with this keyword
*/

var game = "Basketball";

function sayName(){
    var name = "Karan";
    console.log(this);
}

sayName();