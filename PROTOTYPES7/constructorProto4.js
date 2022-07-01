function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(12);

// Constructors also have a prototype property.


// This is the object used as parent for objects created by a Circle constructor.
Circle.prototype();




let obj = {};
// Parent for the object and the prototype for the constructor are equal.
obj.__proto__();
Object.prototype();
// These both are same.



// Same goes for array.
let array = [];
array.__proto__();
Array.prototype();
// These both will be same.





