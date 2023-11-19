
// Iterate through all keys of an object using Object.keys

let person = {
    name: 'Harry Potter',
    location: 'London',
    age: 28
};

const keysArr = Object.keys(person);
keysArr.forEach((key) => {
    console.log(key);
})