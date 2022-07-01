// Every object in JS except the root object has a prototype or parent and inherit all functions defined in parent.

// Every Object has a link to another object.
// For reference purpose another object -> ObjectBase.

let x = {};
let y = {};

// They both have proto and they are linked to same ObjectBase.
// So, we have a single instance of objectBase in memory.

// To get prototype ->
Object.getPrototypeOf(x);

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// Another way of acccessing proto -> x.__proto__



// When we access a property or method on an object.
// JS Engine first looks for that property or method on the object itself.
// If it cant find it then it looks at the prototype for that object.
// This is PROTOTYPICAL INHERITANCE.

// Prototype is just a regular object.

