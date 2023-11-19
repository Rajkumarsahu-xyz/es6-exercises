
// Create a string that prints the name and location of the person in below format using template literals: 
// "Harry Potter is located in London."

let person = {
    name: 'Harry Potter',
    location: 'London'
}

const personString = `${person.name} is located in ${person.location}`;
console.log(personString);