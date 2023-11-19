
// Show an example where a function argument which is an object is destructured inside the parantheses of the function

function printPersonDetails({name, location, age}) {
    console.log(`Person name : ${name}`);
    console.log(`Person location : ${location}`);
    console.log(`Person age : ${age}`);
}

let person = {
    name: 'Harry Potter',
    location: 'London',
    age: 28
};
printPersonDetails(person);