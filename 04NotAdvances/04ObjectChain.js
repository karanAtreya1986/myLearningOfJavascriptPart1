var User=function(firstName, courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName=function(){
    console.log(`You first name is ${this.firstName}`);
};

var karan=new User("Karan", 45);

// if(karan.hasOwnProperty("firstName")){
//     karan.getFirstName();
// }

if(karan.hasOwnProperty("firstNamewerwer")){
    karan.getFirstName();
}

var sam=new User("Sam", 456);
sam.getCourseCount();


// var karan=new User("Karan", 45);
// karan.getCourseCount();
// karan.getFirstName();

// var sam=new User("Sam", 456);
// // sam.getCourseCount();
// // sam.getFirstName();