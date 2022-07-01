// this refers to the object that is executing the current function.

// Rule 1 ->
// If the function is part of a object we call that a method.
// So if that function is a method in an object, this references that object itself.

// Rule 2 ->
// Otherwise, if it is a regular function.
// Then, this references the global object which is the window object in browsers and global in node.



// Example of Rule 1
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

video.stop = function(){
    console.log(this);
}

video.stop();




// Example Of Rule 2.
function playVideo() {
    console.log(this);
}
playVideo();




// Whenever we use new operator it creates an empty object and sets this to the object created.
// So if a constructor function in written and new object is declared.
// And then console.log(this) is run then the output would be the object created with the passed argument.
