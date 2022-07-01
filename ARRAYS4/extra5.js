const numbers = [1,2,3];


// This method returns a string.
// In the argument pass the string with which elements have to be joined.
const joined = numbers.join(',');
console.log(joined);



const message = 'This is my message';

// This method returns an array.
// In the argument pass the string on the basis of which string has to be splitted.
const split = message.split(' ');
console.log(split);



// Sorting is same -> sort function. Nothing in argument.
// BUt for objects we have to pass a function and then write the comparison code.


// every function runs through every elements and checks for the condition given.
// If an element is found which violates the condition then it will stop running.
// Retuns a boolean value.
const allPositive = numbers.every(function(value) {
    return value >= 0;
});

// Similarly there is some function which checks for at least one.
// So if an array has 1000 elements and if we want to check whether it contains a negative number or not.
// Then we can use some function.
// Pass a function as argument with desired condition.
// And even if one element is found then it will return true;



// If we want a seperate array which has only positive elements.
// Then we can use filter method same as every and some.
// Function is passed as an argument.




// Another way of calculating the sum of elements of an array.
// In other words reducing an array.
// In reduce function two arguments are passed here.
// First is the callback function.
// And second is the initial value of accumulator.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);