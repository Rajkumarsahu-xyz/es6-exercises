
// Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function

function calculateCircleArea(r = 5) {
    const area = (Math.PI) * (r * r);
    return area;
}

const area1 = calculateCircleArea();
console.log(area1);

const radius = 4;
const area2 = calculateCircleArea(radius);
console.log(area2);
