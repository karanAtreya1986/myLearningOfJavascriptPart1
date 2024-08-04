fetch('https://api.chucknorris.io/jokes/random')
.then((superman)=>{
    // console.log(superman);
    console.log("APIS " , superman.json());
    return superman.json();
})
.then((data) => {
    // console.log("DATA IS " , data);
    var joke=data.value;
    console.log("JOKE IS : " , joke);
})
.catch()