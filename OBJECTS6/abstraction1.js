// ALL THE BASICS ARE LISTED IN OBJECTS3 FOLDER.
// COMPLETE THAT AND THEN CONTINUE WITH THIS.



function Circle(radius){
    this.radius = radius;

    // default and computeOpti are not private functions.
    // But from the point of OOP they can be said as one.

    let defaultLocation = { x: 0, y: 1};

    // let computeOptimumLocation = function(value) {
    //     // ...
    // }

    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function() {
        computeOptimumLocation();

        console.log('Draw');
    };

    // First argument is the object to which we want to add a new property.
    // Second argument is the name of the property which we want to add.
    // Third Argument is an object in which we add key value pair
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y){
                throw new Error('Invalid Location');
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(13);

circle.draw();

// Abstraction -> Hide the details and show the essentials.
// Default Location and computeOptimumLocation are declared as variables instead.
// So their scope is limited to that constructor function only.

// So an object created cannot access them as they are no longer the properties of Circle constructor function.


// Closure of an inner functions has access to all the variables defined in its scope as well as the parent function scope.
// Main function has scope.
// And Inner Function has closure.


// WE DONT WANT TO CALL THIS AS A FUNCTION. INSTEAD WE WANT TO CALL IT DIRECTLY.
// So we will use defineProperty.
// circle.getDefaultLocation();

circle.defaultLocation();
