function start () { 
    for (var i = 0; i<5; i++){
        console.log(i);
    }

    console.log(i);
}

// Problem with declaring with var is that its scope is not limited to the block in which its defined.
// Whereas declaring with let the scope remains to the block where it was declared.

// let, const -> Create block-scoped variables.
// var -> Created function-scoped variables.


var color = 'red';
let age = 30;

// var keyword attaches the color variable to the window object.
// So in the console if we type window.color then red would be displayed.

// In contrast when declared with let it does'nt attach to window.
// And doing window.age it will show undefined.

// Problem with attaching to the window object is that it has single instance.
// So if we are using a third party library and it has a variable with same name.
// Then that variable can override our variable.


// The function which we declare by function hi() {} is also attached to window object.
// In order to prevent that encapsulation is done.