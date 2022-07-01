function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

const another = new Circle(13);

// Every function is an object.
// And we can access the properties.

// Will return the name of the function
console.log(Circle.name);

// Will return the number of arguments.
console.log(Circle.length);

// Will return the function used to create that object.
console.log(Circle.constructor);

// This does the same work as const circle = new Circle(1);
// Here first argument is the reference to the object.
// And second is the argument required for creating object.
Circle.call({}, 1);


// If in general creation of object we remove the new operator.
// Then this operator would point to global that is window.

