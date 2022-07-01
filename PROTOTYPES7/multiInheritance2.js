let array = [];

// If we look at its properties it contains a proto object (As every other object in JS does).
// But in that proto it contains another proto.
// Justifying that the this array has a parent object from which it has inherited its properties or methods.
// Lets call that arrayBase.
// And the arrayBase itself has a proto object which is ObjectBase.
// array derives from arrayBase and arrayBase derives from objectBase.



function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('Draw');
    };
}

const circle = new Circle(14);
// Every time we call the circle constructor to create object.
// This constructor will create a new object and set its prototype properties to circleBase(say).
// In other words,
// OBJECTS CREATED BY A GIVEN CONSTRUCTOR WILL HAVE THE SAME PROTOTYPE.



