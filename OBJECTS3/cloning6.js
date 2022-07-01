const circle = {
    radius: 1,

    draw() {
        console.log('Draw');
    }
};

const another = {};

// Using for in loop..
// Old Approach
for (let key in circle){
    another[key] = circle[key];
}

console.log(another);


// New Approach.
// Using assing operator.
// First argument is the object in which the properties of source object is to copied.
// Second argument is the source object from where the properties have to be copied.
// It is not necessary to pass on an empty object in 1st argument.
// We can pass an object having few parameters.
const another2 = Object.assign({}, circle);
console.log(another);



// Another Method.
// Using spread Operator.
// Easiest method of cloning.
const another3 = {...circle};
