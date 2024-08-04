var name = "Karan";

console.log("Line number 3 ", name);

// function sayName(){
//     console.log("Line number 6 ", name); //icecream or popsicle example. taken from the above level.
// }
// sayName();

// function sayName(){
//     var name = "Mr K";
//     //console.log("Line number 6 ", name); //we got our own icecream.
//     sayNameTwo();
//     function sayNameTwo(){
//         console.log("Line number 14 ", name); //this will ask icecream to its immediate higher level variable called name.
//     }
// }
// sayName();

// function sayName(){
//     var name = "Mr K";
//     console.log("Line number 6 ", name); 
//     sayNameTwo();
//     function sayNameTwo(){
//         var name = "Mr K2";
//         console.log("Line number 14 ", name); //we have our own icecream.
//     }
// }
// sayName();

function sayName(){
    console.log("Line number 6 ", name); 
    sayNameTwo();
    function sayNameTwo(){
        console.log("Line number 14 ", name); //take icecream from the highest level.
    }
}
sayName();