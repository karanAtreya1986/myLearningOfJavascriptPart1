const uno = () =>{
   return "i am one";
}

// const dos = async() =>{
//     setTimeout(() => {
//         return "I am two";
//     }, 5000);
// }

// const dos = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("I am two");
//         }, 5000);
//     })
// }

const dos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("I am two");
        }, 5000);
    })
}

const tres = () =>{
    return "I am three";
}

const callme = async () => {
    let valueone=uno();
    console.log(valueone);

    let valuetwo=await dos();
    console.log(valuetwo);

    let valuethree=tres();
    console.log(valuethree);
}

callme();

