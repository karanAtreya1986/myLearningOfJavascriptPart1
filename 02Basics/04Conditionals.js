var temperature;

//TODO: Go to the website and get the data.

temperature=20;

//if conditions.
if(temperature<20){
    console.log("Cold outside"); //will not come in output as condition not true in if.
}

if(temperature<=20){
    //console.log("Cold weather"); //output will be cold weather.
}

if(temperature==20){
   // console.log("Cold weather"); //output will be cold weather.
}

if(temperature===20){
  //  console.log("Cold weather"); //output will be cold weather.
}

temperature=40;

if(temperature < 30){
    console.log("Hot weather"); //this will not come.
}else{
    console.log("Super hot outside"); //this will come in output.
}