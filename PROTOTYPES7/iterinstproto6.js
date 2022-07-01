function Circle (radius) {
    this.radius = radius;

    this.move = function(){
        console.log('Move');
    }
}



// Prototype Members.
// Creating draw as a prototype function.
// Now it will be shown in prototype members.
// And we can still directly call the function using object.
Circle.prototype.draw = function() {
    console.log('Draw');
}


// It is not necessary to declare an object before modifying prototype.
// We can declare the object before declaring draw function in prototype.
// And then also it could be called.


const circle = new Circle(12);


// Object.keys returns only instance members.
// Draw is a prototype now so it would not be visible.
console.log(Object.keys(circle));


// This method gives all instance and prototype members.
// For in loop returns all members.
for (let key in circle){
    console.log(key);
}
