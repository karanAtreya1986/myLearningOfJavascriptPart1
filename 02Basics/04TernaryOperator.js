/*Show user signout option if already logged in.
Otherwise show login or signup option
*/

// var authenticated = true;

// if(authenticated){
//     console.log("Show signout button"); // this will be displayed in output.
// }else {
//     console.log("Show sign in or login button");
// }

//checking when authenticated is false.
// var authenticated = false;

// if(authenticated){
//     console.log("Show signout button"); 
// }else {
//     console.log("Show sign in or login button");// this will be displayed in output.
// }

//checking with ternary operator

var authenticated = true;

authenticated ? console.log("Show signout") : console.log("Show login or signup");
