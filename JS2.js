/*
    Global Execution Context
          
*/

var number =  15;                   // global variable
var name = "Phaneendhra chinta";    // global variable

function twice(n){
    return n*2;
}

function printname(){
    var name = "phani";
    console.log("Name : "+name);    // prints local name here
}

console.log("My  First JavaScript Program");
console.log(twice(5));
printname();