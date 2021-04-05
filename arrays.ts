const personObject = {
    name: 'balu',
    age: 24,
    hobbies: ['sports','cooking']
}

let array1: any[];

array1 = ['sports1',2];

for(const arrayEl in array1){
    console.log(arrayEl.toUpperCase());
}

console.log(personObject.hobbies);

for(const hobby in personObject.hobbies){
    console.log(personObject.hobbies[hobby].toUpperCase());
}