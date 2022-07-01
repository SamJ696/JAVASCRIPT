// String Primitive.
// typeof => string
const name = 'Samyak';


// Letters can be accessed using square brackets.


// String Object
// typeof => object
const another = new String('Hello');

// Some Functions.
const message = 'This is my first message';

console.log(message.includes('my'));

console.log(message.includes('not'));

console.log(message.startsWith('This'));

// This will return false. 
console.log(message.startsWith('this'));

console.log(message.endsWith('e'));



// To find index of a character/word.
console.log(message.indexOf('my'));


// This does not modifies the original string.
// Instead it creates a copy with mentioned changes.
// First argument is the word of the string which you want to replace with the new one.
// Second argument is the word with which it has to be replaced.
console.log(message.replace('first', 'second'));


// This also returns a new string.
console.log(message.toUpperCase());

// This removes extra spaces present in beginning and last.
console.log(message.trim());

// Using split method with desired character gives array.
// In the argument the character has to be passed as a base to split the string.
console.log(message.split(' '));






