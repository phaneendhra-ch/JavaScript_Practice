/*

    Uses of let, const and var in JavaScript
    
    let and const were introduced in  JS6

*/ 
function inside(){

    let a = 45;     // same name inside block and global scope is allowed
    console.log("a inside : "+a);

    const b = 45;
    console.log("b inside : "+b);
}

let a = 100;
const b = 50;
var c = 78;

console.log(a);
console.log(b);
console.log(c);
inside();

a = 55;         // Allowed, this deals with global a 
console.log("Modified Value of a : "+a);

//b = 20;        // Error 
//let a = 45;     // Error again , identifier a already exists
//const b = 45;     // Error again , identifier b already exists