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

// arrow functions 1
let add = function(num1,num2){
    return num1+num2;
}
let result = add(5,6)
console.log(result)

// arrow functions 2
let add_new = (num1,num2)=>{
    return num1+num2;
}
let res = add_new(10,5)
console.log(res)

// arrow functions 3
let add_nums = (num1,num2)=>num1+num2;      // if there is only one statement no need braces and return statement
let res_new = add_nums(10,25)
console.log(res_new)