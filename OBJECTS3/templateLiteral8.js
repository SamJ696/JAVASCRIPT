const message = 'This is my first message';
// Now if we want to add single inverted commas to a word.
// Or we want some content in the next line then the code would look uglier and complex.


// This is the reason template literals are used.
// Syntax is backticks. ``.
// The way would be writing the string inside the backticks.
// Same way it would be displayed.


const another = `This is my
'first' message. `

console.log(message);
console.log(another);


const name = 'Person1';

// We can format the string exactly we want it to look like.
// We can add the name dynamically also using placeholders.
// Syntax -> ${ref}
// We can also add mathematical expression and call functions inside the curly brackets after dollar sign.
const another2 = 
`Hi ${name},

Thank you for joining my mailing list.

Regards,
Samyak`;

console.log(another2);