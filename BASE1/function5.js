// Not necessary to add semicolon at the end of the function
// Adding a name parameter to display.
// Can have multiple paramters. Seperated by commas.
function greet(name, lastName) {
    console.log('Hello' + " " + name + ' ' + lastName); // Body of Function
}

greet('Samyak');



// Parameter is what we have at the time of declaration.
// Here name is the parameter.

//  And argument is the actual value supplied for that parameter.
// Here Samyak is argument.



// If we dont pass the second argument here then it will show undefined.
greet('Sam');
// Output -> Hello Sam undefined.



// Function calculating a value.
function square(number){
    return number*number;
}

let answer = square(2);
console.log(answer);