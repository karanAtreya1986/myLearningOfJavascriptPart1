// const names=["Youtube","Gmail","Netflix","Alibaba","Amazon",124123,true,32432.234234234];

// for(var n of names){
//     console.log(n);
// }


// const symbols={
//     yt: "Youtube",
//     gt: "Google Talk",
//     fb: "Facebook",
//     34: "Testing",
//     45.67: "Value",
//     false: "TrueChecker",
//     number: 456745345,
//     booleanChecker: false,
//     numberTwoChecker: 34234324.2345345435
// };

// for(const n in symbols){
//     console.log(n);
// }

// const symbols={
//     yt: "Youtube",
//     gt: "Google Talk",
//     fb: "Facebook",
//     34: "Testing",
//     45.67: "Value",
//     false: "TrueChecker",
//     number: 456745345,
//     booleanChecker: false,
//     numberTwoChecker: 34234324.2345345435
// };

// for(const n in symbols){
//     console.log(symbols[n]);
// }




const symbols={
    yt: "Youtube",
    gt: "Google Talk",
    fb: "Facebook",
    34: "Testing",
    45.67: "Value",
    false: "TrueChecker",
    number: 456745345,
    booleanChecker: false,
    numberTwoChecker: 34234324.2345345435
};

for(const n in symbols){
    console.log(`Key is ${n} and the value is ${symbols[n]}`);
}