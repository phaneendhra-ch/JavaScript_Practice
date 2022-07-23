/*
    JS Program to describe invlking of nested function from Global Scope
*/

function name(){

    console.log("Phani");

    return function lastname(){
        console.log("Chinta");
    }
}

//number();     // throws an error,
var number = function(){

    console.log(9553584020);
}

ins1 = name();  // calling function name
ins1();         // invokes function lastname

number();