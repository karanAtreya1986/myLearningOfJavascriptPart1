// console.log(this);


// var user={
//     firstName: "Karan",
//     courseCount: 4,
//     getCourseCount: function(){
//         console.log("Line 8 ", this);
//     }
// }
// user.getCourseCount();

var user={
    firstName: "Karan",
    courseCount: 4,
    getCourseCount: function(){
        function sayHello(){
            console.log("Hello");
            console.log("Line 11 ", this);
        }
        sayHello();
    }
}
user.getCourseCount();

var user={
    firstName: "Karan",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 30 ", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 11 ", this);
        }
        sayHello();
    }
}
user.getCourseCount();