const numbers = [3,4];


// We can add new elements and remove existing elements.
// But we cannot reassign it to empty.
// numbers = []; -> This would give error.


// Add elements at the end of array.
// Multiple arguments can be passed.
// Push Function is used.
numbers.push(5,6);
console.log(numbers);



// Add elements at the beginning.
// Multiple arguments can be passed.
// Unshift Function.
numbers.unshift(1,2);


// Add elements in the middle.
// First argument is the starting index.
// Second argument is number of elements we want to delete. In this case 0.
// Then third are the elements which we want to add.
// Multiple can be added at a time.
numbers.splice(2,0,'a','b');
console.log(numbers);