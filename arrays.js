var personObject = {
    name: 'balu',
    age: 24,
    hobbies: ['sports', 'cooking']
};
var array1;
array1 = ['sports1', 2];
for (var arrayEl in array1) {
    console.log(arrayEl.toUpperCase());
}
console.log(personObject.hobbies);
for (var hobby in personObject.hobbies) {
    console.log(personObject.hobbies[hobby].toUpperCase());
}
