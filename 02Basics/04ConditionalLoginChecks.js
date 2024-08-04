/*
Allow user to login and access the course in ineuron, if the user logins with valid emailid, or valid facebook email or valid google email*/

var email = true;
var google = false;
var facebook = true;

if(email || google || facebook){
    console.log("Login is successful");
}