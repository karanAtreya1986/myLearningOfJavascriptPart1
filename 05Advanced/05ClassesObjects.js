// import user from "./05Classesjs" //one way of importing.

const user=require("./05Classesjs");

const karan = new user("tiger", "tiger@test.com");

// const karan = new user();

// console.log(karan.getinfo());

// console.log(karan.getinfo().email);

karan.enrollcourse("testing");
karan.enrollcourse("developer");

// console.log(karan.getcourselist());

let courses=karan.getcourselist();

// courses.forEach(c=>console.log(c));
// courses.forEach((c)=>(console.log(c)));

// console.log(`Total number of courses is ${courses.length}`);

console.log(`you are enrolled in ${courses.length} and the course names are:`)
courses.forEach(c=>console.log(`* ${c}`));