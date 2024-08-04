var testArray=[1,2,3,4,5,6,7,,8,90,"Karan", 5435.4353535];

// console.log(testArray.fill(0)); //fills entire array with 0.

// console.log(testArray.fill("KKKK")); //fils entire array with KKKK

// console.log(testArray.fill("KKKK",0)); //fills everything from zeroth position.

// console.log(testArray.fill("KKKK",2));  //fills from second index onwards.

// console.log(testArray.fill("KKKK", 2,6)); //fills from second index to 5th index, last index is omitted.


const myNumbers= [12,324,5346,576765,65767,8787, "Karan", 4456.456456456];

// console.log(myNumbers.filter((num)=>(num!=324))); //returns new array removing 324

// console.log(myNumbers.filter((num)=>(num<1001))); //returns new array returning numbers less than 1001.

const result=myNumbers.filter((numb)=>(numb>=11115000)); //filter such that nothing is returned in output.
console.log(result);

const anotherResult=myNumbers.filter((numb)=>(numb>=5000)); //filter such that numbers greater than 5000 is returned.
console.log(anotherResult);