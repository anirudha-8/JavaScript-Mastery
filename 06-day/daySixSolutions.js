// ============ Activity 1: Array Creation and Access ============ //

// --> task - 1 <--
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// --> task - 2 <--
const firstElement = arr[0];
const lastElement = arr[arr.length - 1];
console.log("First element of array is: ", firstElement);
console.log("Last element of array is: ", lastElement);

// ============ Activity 2: Array Methods (Basic) ============ //

// --> task - 3 <--
arr.push(6);
console.log("Add new element at the end of the array...", arr);

// --> task - 4 <--
arr.pop();
console.log("After deleting last element of the array...", arr);

// --> task - 5 <--
arr.shift();
console.log("After deleting first element of the array...", arr);

// --> task - 6 <--
arr.unshift(1);
console.log("Add new element at the start of the array...", arr);

// ============ Activity 3: Array Methods (Intermediate) ============ //

// --> task - 7 <--
const doubleArr = arr.map(n => n * 2);
console.log("Old array is:", arr, " After double the every element new array is:", doubleArr);

// --> task - 8 <--
const evenArr = arr.filter(n => n % 2 === 0);
console.log("Old array is:", arr, " After selecting only even numbers new array is:", evenArr);

// --> task - 9 <--
const totalSum = arr.reduce((sum, n) => sum + n);
console.log("Total sum of all the elements of the arr", arr, " is: ", totalSum);

// ============ Activity 4: Array Iteration ============ //

// --> task - 10 <--
console.log("Iterating over elements of array", arr, "using for loop...");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// --> task - 11 <--
console.log("Iterating over elements of array", arr, "using forEach loop...");
arr.forEach(n => console.log(n));


// ============ Activity 5: Multi-dimensional Array ============ //

// --> task - 12 <--
const twoDimArr = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false, true]
]
console.log(twoDimArr);

// --> task - 13 <--
console.log("Accessing second row, first column element from array:", twoDimArr[1][0]);