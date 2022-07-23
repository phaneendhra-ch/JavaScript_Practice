function x(y){
    console.log("In in function x");
    y();    
}

function y(){
    console.log("In Function y");
}

x(y);       // callback in C