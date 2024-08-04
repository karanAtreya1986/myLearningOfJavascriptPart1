const student={
    age: 44,
    name:{
        firstname:"Karan",
        lastname:"Atreya"
    }
};

student.age=99;
// console.log(student);

Object.freeze(student);

student.age=107;
// console.log(student);

student.name.firstname="tiger";
console.log(student);