let first = [1,2,3, { id: 1 }];
let second = [4,5,6];


// Concatenation/ Combining two arrays.
const combined = first.concat(second);


// If we change the original arrays then the combined arrays wont change in case of primtives.
// But as there is an object present.
// So if the value of the object is changed then it would also get reflected in the combined array.
// Bcoz they are copied by their reference and not by the value.
first[3].id = 10;
first[0] = 5;

console.log(combined);

// Another method for combining is using spread operator.
// This method provides flexibility as we can add custom elements in between or at starting or ending of the arrays.
const combined2 = ['THIS', ...first,'IS','WHAT I', ...second, 'MEANT'];


// Using slice method to divide the array.
// First and second argument is the range of index which we want to slice off.
const slice = combined.slice(2,4); 
console.log(slice);


console.log(combined2);







