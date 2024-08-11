const circle = require('./module')

console.log("Constant PI value: ", circle.pi);
console.log("Radius of the circle: ", circle.radius);
console.log("Area of the circle: ", circle.areaOfCircle(circle.pi, circle.radius));
console.log("Diameter of the circle: ", circle.diameter(circle.radius));