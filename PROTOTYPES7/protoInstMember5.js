function Circle(radius) {
    // Instance members
    this.radius = radius;
}



const circle1 = new Circle(12);
const circle2 = new Circle(11);

// If we check the properties of both the objects.
// Then they both will have draw function.
// Which means if we have lets say 100 objs then we will have 100 copies of draw method.
// Memory would be wasted in keeping these copies.


// Now we will take this draw method and put it in prototype.
// We will have a single instance of this prototype say CircleBase and also draw method.

// Prototype members.
Circle.prototype.draw = function(){
    console.log('Draw');
}

// Now if we check the properties of both objects.
// Then the draw method would be in the prototype.
// And we can call it directly bcoz of prototypical inheritance.
circle1.draw();
console.log(circle1);


// Overriding the toString() method by adding it in prototype.
Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
console.log(circle1.toString());
// The default toString method is present in the objectBase.
// As JS Engine would look first into the object itself.
// And then in its proto.
// So we added toString in the proto so that it overrides the default one.
