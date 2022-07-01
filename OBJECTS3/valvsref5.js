let x = 10;
let y = x;


x = 20;

console.log(x);
console.log(y);


//  IF these are created as objects then.
// On updation of x y would also get updated.



// When we create an object it is stored in memory.
// And its address is stored in the variable.
// Both x and y are pointing to the same in memory.
// The reason why on x updation y is also updating.


// But primitives have their value stored in the variable.
// And they are copied by their value not by reference.
// So on updating x, y would still remain same.


let obj = {value: 10};

function increment(obj){
    obj.value++;
}

console.log(increment(obj));

// Here instead of object if normal number would have been passed then it would not get updated.
// As only the calue would have been passed not the reference.

// But as objects are used and they are passed by their reference.
// It got incremented by one.




// PRIMITIVES ARE COPIED BY THEIR VALUS.
// OBJECTS ARE COPUED BY THEIR REFERENCE.