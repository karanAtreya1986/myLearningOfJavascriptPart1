var returnedvalue=Math.max(1,2,3,4,5.6,99.2);
// console.log(returnedvalue);


// var myobject={};
// Object.assign(myobject, {a:1, b:2, c:3}, {d:5.6, e: "tester", f: 7.89088});
// console.log(myobject);


function sumone(a,b){
    return a+b;
}
// console.log(sumone(56, 98.34234));

// var myarray=[5,6.7];
// console.log(sumone(myarray));

// console.log(sumone(4,5,6));

// var myarray=[5,6];
// console.log(sumone(...myarray));

// var myarray=[5,6, 99.54];
// console.log(sumone(...myarray));



// function sumtwo(...args){
//     // console.log(args);
//     let sum=0;
//     for(const arg of args){
//         sum=sum+arg;
//     }
//     return sum;
// }
// // console.log(sumtwo(2,3,4,5,66,78,8907.1324324));

// // console.log(sumtwo(4,5));

// console.log(sumtwo(1,2,3.56789,true, "tester"));

function sumthree(a,b, ... args){
    let multi=a*b;
    let sum=0;
    for(const arg of args){
        sum +=arg;
    }
    return [sum, multi];
}
console.log(sumthree(2,3,45678.7890, 56.78, true, "tester"));

console.log(sumthree(2,3,45678.7890, 56.78, 345435,456456.5675676570));

