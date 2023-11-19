
// Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example

function findSum(...nums) {
    return nums.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0);
}

const arr = [23,53,234,62,61];
const sum = findSum(...arr);
console.log(sum);