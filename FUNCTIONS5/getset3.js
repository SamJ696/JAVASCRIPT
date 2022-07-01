const person = {
    firstName: 'Samyak',
    lastName: "Jain",

    get fullName () {
        return `${firstName} ${lastName}`;
    },

    set fullName (value) {
        if (typeof value !== 'string'){
            throw new Error('Value is not a String');
        }
        const parts = value.split(' ');

        if (parts.length !== 2){
            throw new Error('Enter first and last Names');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


// There are couple of problems with this approach.
// 1. We cannot set the persons fullName to something only. Meaning that this read only.
// 2. Syntax -> We cannot call it directly. We've to do it through a function.


// This is where getters and setters are used.
// Getters => Access Properties. We can read person fullName
// Setters => Change (Mutate) them. We can set the person fullName and simultaneously the firstName and lastName would also get updated.

// Also we should for the input to be string.
// So we will add an error check for the input we are getting.
// Added above -> Go through. 
// Also we will add a try catch block for catching the error.

try {
    person.fullName = 'Random Person';
    
} catch (e) {
    alert(e);
}

// When we throw an exception lines after that would not be executed.
// And the code jumps to catch block and take required steps as provided.


console.log(person);

