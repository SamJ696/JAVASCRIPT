const numbers = [1,2,3,1,4];

// FINDING PRIMITIVES.

// This function return the index if element is present.
// Otherwise it returns -1.
// As a string is passed here it will return -1.

// We can pass two parameters also in this function.
// In that case the first argument will be the index from where the search will start.
// And second argument is the element we want to search.
console.log(numbers.indexOf('1'));


// Last index of an element occurring multiple times.
console.log(numbers.lastIndexOf(1));


// This will tell whether the element is present or not.
// Returns a boolean value.
console.log(numbers.indexOf(1) !== -1);
// Another method for achieving the same thing.
// Also returns boolean value.
console.log(numbers.includes(1));




// FINDING REFERENCES.
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];


// If the course is found then it will return that whole property.
// Returns the first element that matches the criteria.
// If not then it will return undefined.
const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);


// We can write the above code for course in a more cleaner way.
// By using Arrow Functions.

const course2 = courses.find(course => course.name === 'a');
// Same as course code.