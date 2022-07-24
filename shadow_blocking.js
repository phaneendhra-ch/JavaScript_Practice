/* Shadowing in JavaScript*/

var a = 100;
let b = 12;
const c = 80;

{ // Block
    var a = 45;
    let b = 50;
    const c = 65;
    console.log("a : "+a);      // 45
    console.log("b : "+b);      // 50
    console.log("c : "+c);      // 65
}

console.log("a : "+a);  // 45   // Here a has been shadowed, a refers to gobal memory block
console.log("b : "+b);  // 12   // Variables with const and let doesnt change
console.log("c : "+c);  // 80   