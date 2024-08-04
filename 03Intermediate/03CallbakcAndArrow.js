// function isEven(element){
//     if(element%2===0){
//         return true;
//     }
//     return false;
// }

//one liner code which does the same thing.
// function isEven(element){
//   return element%2===0;
// }
// console.log(isEven(4567));

//use arrow and variable for functions

// var isEven = (element) => {
//     return element%2===0;
// };
// console.log(isEven(20));
// console.log(isEven(131));

//without return keyword arrow function cannot work.
// var isEven = (element) => {
//     // return element%2===0;
// };
// console.log(isEven(20));
// console.log(isEven(131));

//shortcut to use arrays and its methods.
// [2,40,5,6.7,"test"].]

//every function with even number check
// function isEven(element){
//     if(element%2===0){
//         return true;
//     }
//     return false;
// }
// var result = [2,4,6,8,7,9].every(isEven);
// console.log(result);



//callback function.
// var result = [2,4,6,8].every((e)=>{ //e is nothing but any name which will iterate over the array.
//     return e%2===0;
// });
// console.log(result);





//you dont want return in callback, remove curly braces.
// var result = [2,4,6,8].every((e)=> //e is nothing but any name which will iterate over the array.
//      e%2===0
// );
// console.log(result);



//tip to remember. if you dont want to add return to callback, use () not {} as seen below.
var result = [2,4,6,8,11,15].every((e)=>(e%2===0) //e is nothing but any variable name which will iterate over the array.
);
console.log(result);