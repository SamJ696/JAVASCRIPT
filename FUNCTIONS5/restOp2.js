function sum(a,b) {
    return a + b;
}


// If only one argument is passed in there then NaN would be the output.
// If more than two are passed then only the first two would be considered.
// Rest all would be ignored.
let ans = sum(1,2);


// If we want to pass varying number of arguments onto a function.
// Then we use REST operator.
// Represented by 3 dots.
function sum2(...args){
    console.log(args);
    args.reduce((a,b) => a+b);
}

// Here we are printing args.
// As all 6 are passed so it will form an array consisting these 6 elements.
console.log(sum2(1,2,3,4,5));

