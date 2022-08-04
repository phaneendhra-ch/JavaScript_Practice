names = ["phani","chinta","phaneendhra chinta"]
console.log(names.join("--"));

let age = [];
for (var v= 0; v<3; v++){
    //const input = prompt("Enter Age : "); 
    age.push(names[v]);
}

console.log("List of ages : ",age
);

names.forEach(element => console.log(element));   // this way wew can recur through each element