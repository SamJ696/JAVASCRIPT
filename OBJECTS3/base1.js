// This curly brackets syntax is Object Literal Syntax.
// In this object we can add anything.
// An array, other object, a function.
const Circle = {
    radius: 1,

    location: {
        x: 1,
        y: 0
    },

    isVisible: true,

    draw: function(){
        console.log('Draw');
    }
}

// We can access all properties by dot operator.

// Calling draw method. 
// Function inside an object is method.
Circle.draw();