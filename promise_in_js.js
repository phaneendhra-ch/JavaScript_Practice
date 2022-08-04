/*
    Promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function too).
    Callback function takes two arguments, resolve and reject
    Perform operations inside the callback function and if everything went well then call resolve.
    If desired operations do not go well then call reject.

    link : https://www.geeksforgeeks.org/javascript-promises/
*/

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks"
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();  // returns resolve
    } else {
        reject();   // else reject
    }
    });
    
    promise.
        then(() => console.log('Success, You are a GEEK')).
        catch(() => console.log('Some error has occurred'););
    