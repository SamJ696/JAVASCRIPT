// If we want to create multiple objects then we have to copy the code for different objects.
// Here factory functions are used.
// Used in creating obejcts.


// If the key and value is same then we can replace by the name itself.
// Not necessary to write function as a key value pair.
// We can write it directly also.
function createCircle(radius) {
    return {
        radius, 
        draw(){
            console.log('Draw');
        }
    };
}

const circle1 = createCircle(12);

// We can also use constructor functions to create objects.
// Not at all necessary to use factory functions.
