// Here Output will be Samyak.
// The result of the logical expression is not always true or false.
// That depends on the value.

// Two types of Values -> Truthy and Falsey

// Falsey -> undefined null 0 false '' NaN



// When the types are not same and one of them is boolean.
// Then the answer is calculated according to Falsey Truthy convention.


// As string is not Falsey.
// Therefore the output is Samyak. 


console.log(false || 'Samyak');


// Short-Circuiting
// Output here will be 1.
// As soon as logical operand is found which is truthy.
// The value is calculated and answer is returned.
// It would not move afterwards to check for more.
// All the operators would be ignored.
console.log(false || 1 || 2);