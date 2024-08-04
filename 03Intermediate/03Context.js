//=== performs datatype and value comparison
// if(2==="2"){
//     console.log("True");
// }
// else{
//     console.log("False"); //this will be printed in output.
// }

/**
 * Using windows.<something> in ide and checking if same output as browser.
 * It will be different because context has changed from browser to ide (node manager).
 **/

var myName = "Karan";
if(myName === window.myName){
    console.log("Check if we get same output or context is different. Here context is different so we get error");
}