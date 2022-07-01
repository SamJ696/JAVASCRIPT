let person = { name: 'Samyak' };


// Only key that will be printed is name.
// None of the properties and methods defined in ObjectBase are visible.
// Even if we call Object.keys(person) then also name will be shown.
for (let key in person){
    console.log(key);
}

// for (let key of person){
//     console.log(key);
// }

// We cannot iterate over the properties of ObjectBase bcoz.
// In JS properties have attributes attached to them.
// Sometimes these properties prevent a property from being enumerated.



let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyNames(objectBase, 'toString');

// console.log(descriptor);


// We can change the attributes also.
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
});

// As writable is set to false therefore person is now read only.
// Even if here name is changed to Random this will not be implemented.
person.name = 'Random';
console.log(person.name);

// Same goes for enumerable -> Set to false.
// Now name property will not be shown in Object.keys.
// On contrast if it were true then properties would be displayed.


// If configurable is set to false the we cant delete a property.
delete person.name;
console.log(person.name);
// Even if delete command is passed it wont get deleted.



