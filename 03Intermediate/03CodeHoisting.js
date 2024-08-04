// function tipper(a){
//     var bill =a;
//     console.log(bill + 5);
// }
// //tipper(5);

// //pass string as an argument
// tipper("55");


/**
 * user parseInt method to convert all string form numbers to real numbers.
 * @param a 
 */
// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill + 5);
// }

// tipper("55");

//pass string and see the output
// tipper("rwerwer");

//assign function to variable

// bigTipper("200");

// var bigTipper=function(a){
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }
// bigTipper("200");

//print variable before declaring it.
// console.log(name);
// var name="Karan";

//undefined different from error.
// console.log(name);
// var name="Karan";

//same variable name, how global and execution context avoids confusion internally.
console.log(name);
var name = "Karan";

function sayName(){
    var name = "Mr K";
    console.log(name);
}

sayName();

console.log(name);