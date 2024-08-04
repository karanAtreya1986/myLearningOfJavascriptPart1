const uno = () =>{
    console.log("i am one");
}

const dos = () =>{
    setTimeout(() => {
        console.log("I am the timeout function");
    }, 5000);
    console.log("i am two");
}

const tres = () =>{
    console.log("i am three");
}

// uno();
// dos();
// tres();

// uno();
// tres();
// dos();

uno();
dos();
tres();
