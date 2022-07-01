// Creating object using constructor Function.

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

// this is a refrence to the object that is executing the piece of code.
// Something like const x = {} happens internally.
const circle = new Circle(13);

// We can always add new properties bcoz of Dynamic Nature.
circle.color = 'red';

circle.draw = function(){}

//  We can delete the properties as well.
delete circle.draw;

console.log(circle);

// Constructor is function used to create objects.
const circle2 = new Circle(12);
console.log(circle2.constructor);


// Factory Function Concept (OL Syntax).
// When we use Object Literal Syntax to create objects.
// internally the JS Engine uses its default constructor to create objects
// Some built in constructors.
// new String() new Boolean() new Number

// Every object has a constructor property.
// And that references a function that was used to create that object.
