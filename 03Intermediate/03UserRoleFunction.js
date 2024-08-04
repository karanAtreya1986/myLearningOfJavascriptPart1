/*
Define function that can answer role of the user.
A user can have following roles:
admin - with all access.
subadmin - with access to create/delete courses.
testprep - with access to create/delete tests.
user - consumes all content.
other - trial user.

input will be (how we call the function): getUserRole(name,role);
*/

// function getUserRole(name, role){
var getUserRole=function (name, role){ //another way to write functions in javascript.

    switch(role){
        case "admin":
            return `${name} is admin with all access`;
           // break; //this is not necessary when we add return statement.
        case "subadmin":
            return `${name} is sub admin with access to create/delete courses.`;
           // break;    
        case "testprep":
            return `${name} is test prep with access to create/delete tests.`;
          //  break;  
        case "user":
            return `${name} is user with consumes all content.`;
         //   break;  
        default:
            return `${name} is a trial user`;
         //   break;
    }
}

//console.log(getUserRole("Karan", "testprep"));

//store the value returned by function inside variable and then print it out.

var getRole= getUserRole("Sammy", "admin");
console.log(getRole);