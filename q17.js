
// Iterate through all the key / value pairs of an object using Object.entries

let person = {
    name: 'Harry Potter',
    location: 'London',
    age: 28
};

const entriesArr = Object.entries(person);

entriesArr.forEach((entry) => {
    console.log(entry);
})