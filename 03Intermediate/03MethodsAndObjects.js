var user={
    firstName : "Karan",
    lastName : "Atreya",
    role: "jackson",
    loginCount:100,
    facebookSignIn:false,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

var courseList=true;
// console.log(user.getCourseCount());

user.buyCourse("Java");
user.buyCourse("Angular js by karan");

// console.log(user.getCourseCount);

console.log(user.getCourseCount());