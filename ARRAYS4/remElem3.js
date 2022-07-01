const numbers = [1,2,3,4,5,6,7,8,9];


// Removing element from the end.
// Pop function is used.
// This will remove the last element from the array and return it.
numbers.pop();
console.log(numbers);


// Remove element from the beginning.
// Similar to unshift method but it removes first element.
numbers.shift();


// Remove elements in the middle.
// First argument is the index.
// Second argument is the number of elements we want to delete.
numbers.splice(2,2);

console.log(numbers);



// EMPTYING THE ARRAY.
let numbers2 = [1,2,3,4];
let another = numbers2;

// If we empty the numbers2 array then another array will also get emptied.

// Solution 1.
// Reassign the array to empty.
// numbers2 = [];


// Solution 2.
// Setting the length to zero.
// numbers2.length = 0;


// Solution 3.
// Using splice method and deleting all elements from index 0 to end.
// numbers2.splice(0,numbers2.length);


// Solution 4.
// Using pop method in while loop until array gets emptied.
