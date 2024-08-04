var mymap=new Map();

mymap.set(1, "Uno");
mymap.set(2, "dos");
mymap.set(3, "tres");
mymap.set(4, "cuatro");

// console.log(mymap);

// for(let key of mymap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of mymap.values()){
//     console.log(`key is ${value}`);
// }

// for(let [key,value] of mymap){
//     console.log(`key is ${key} and value is ${value}`);
// }

// mymap.forEach((key) => console.log(`${key}`));

// mymap.forEach((value) => console.log(`${value}`));

// mymap.forEach((v, k) => console.log(`${v} is value and ${k} is key`));

mymap.delete(3);
console.log(mymap);
