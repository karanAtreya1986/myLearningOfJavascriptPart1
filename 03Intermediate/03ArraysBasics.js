var countries = [ "India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Pune");

// console.log(countries); // will print the entire arrayas list.

// console.log(states); // will print entire array as list.

//access array from a position
// console.log(states[1]);

//get the length of the array
// console.log(states.length);

//replace the value at an index
states[0]="Punjab";
// console.log(states);

//array with all datatypes in it
var user=["Karan", 45.65, true, 56, 'A'];
// console.log(user);

//remove last element from array
user.pop();
// console.log(user);

//adds new value at beginning.
user.unshift("New value at beginning");
// console.log(user);

//remove first value from array
user.shift();
// console.log(user);

//get the index of an element
var indexNumber=user.indexOf(true);
// console.log(user);
// console.log(indexNumber);

//index of element not present will be -1
// console.log(user.indexOf("newey"));

//how to convert anything which can be iterated on to an array
console.log(Array.from("Karan"));

