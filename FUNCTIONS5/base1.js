// Two ways of declaring a function.

// 1. Function Declaration.
walk();


function walk() {
    console.log('Walk');
}


// 2. Anonymous Function Expression.
// Like we set a variable to a number string etc.
// We can also set it to function.
let run = function() {
    console.log('Run');
}

run();


// Advantage of Function Declaration method is that we can call the function even before the declaration.
// But we cannot do it in the Function Expression method.
// This is done by process of Hoisting.

// Hoisting is the process of moving function declarations to the top of the file.
// And this is done automatically by the JS Engine that is executing this code.
