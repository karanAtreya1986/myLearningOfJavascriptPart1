var User=function(firstName, courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

// var karan=User("Karan", 45);
// console.log(karan);

//using the new keyword
var karan=new User("Karan", 45);
console.log(karan);

// var karan=new User("Same", 456);
// console.log(karan);

var sam=new User("Sam", 456);
console.log(sam);