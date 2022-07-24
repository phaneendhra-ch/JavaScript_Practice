// First Class Functions : Ability to use functions as values
a();
//b();

// Function Statement
function a(){
    console.log("a is called ");
}

// Function Expression
var b = function (){  // Can also name this funtion, but throws an error if you call it with the name
    console.log("b is called ");
}
b();

// Anonymous Function -- func without name
/*
function (){

}*/ // Thorws an error (requires name)