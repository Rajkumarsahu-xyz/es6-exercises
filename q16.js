
// Iterate through all values of an object using Object.values

let person = {
    name: 'Harry Potter',
    location: 'London',
    age: 28
};

const valuesArr = Object.values(person);

valuesArr.forEach((val) => {
    console.log(val);
})