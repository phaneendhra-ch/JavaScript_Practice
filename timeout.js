/*
    a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
*/

function x(){

    // Here we are writing a function to print the value of i for every 1second
    // But the output will be 6
    // because since it is a closure the copy of the function will refer to the same memory
    // and thus the output will be 6.
    for (var i=0;i<=5;i++){
        setTimeout(function(){
            console.log("Value of i is : ",i,"\n");  // to get equalent value of i we can use let instead var
                                                // let refers to a block
        },1000)
    }
}

function y(){

    for (let i=0;i<=5;i++){
        setTimeout(function(){
            console.log("Value of i is : ",i);  // to get equalent value of i we can use let instead var
                                                // let refers to a block
        },1000)
    }
}

function z(){

    for (var i=0;i<=5;i++){

        // creating a new function and passing current value of i as a parameter
        function close(x){
        setTimeout(function(){
            console.log("\nValue of i is : ",x);  
                                                
        },1000)
    }
    close(i);   
    }
}

x();    // Present in Global Execution Stack
y();    // Present in Global Execution Stack
z();    // Present in Global Execution Stack