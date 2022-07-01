// Used to iterate over properties if an object or elements of array.


// If wwe want to display all properties of an object then use for in loop.
const person = {
    name: 'Samyak',
    age: 18
};


// Properties and value both will be displayed.
for (let key in person){
    console.log(key, person[key]);
}


let colors = ['red', 'green', 'blue'];
for (let index in colors){
    console.log(index);
}

// It will display the index of the elements. 



// Each color will hold an item in the array.
// Here direct values of the properties would be displayed.
for (let color of colors){
    console.log(color);
}