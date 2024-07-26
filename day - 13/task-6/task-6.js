// importing "lodash" module
const _ = require('lodash')

// using function from "lodash"
const numbers = [1, 3, 3, 4, 5, 6, 7, 8];
const shuffledNumbers = _.shuffle(numbers);

console.log(numbers);
console.log(shuffledNumbers);