
// Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax

function findSum(...nums) {
    return nums.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0);
}

const sum = findSum(23,53,234,62,61);
console.log(sum);
