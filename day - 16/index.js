// ============= Activity 1 : Basic Recursion ============= //

// --> task - 1 <-- //
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
    console.log(factorial(num));
}

// --> task - 2 <-- //
function nthFibonacci(n) {
    if (n === 1) return n;
    if (n === 0) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}
for (const num of numbers) {
    console.log(nthFibonacci(num));
}

// ============= Activity 2 : Recursion with Arrays ============= //

// --> task - 3 <-- //
function sumUpArray(array) {
    if (!array.length) return 0;
    return array[0] + sumUpArray(array.slice(1));
}
console.log("Sum of all array elements is:", sumUpArray(numbers));

// --> task - 4 <-- //
function maxNumArray(array, n = 0) {
    if (n === array.length - 1) return array[n];
    return Math.max(array[n], maxNumArray(array, n + 1));
}
console.log("Maximum number from the array is: ", maxNumArray(numbers));

// ============= Activity 3 : String Manipulation with Recursion ============= //

// --> task - 5 <-- //
function reverseString(str) {
    if (!str.length) return "";
    // return reverseString(str.substr(1)) + str.charAt(0);
    // return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
    // return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
    return str[str.length - 1].concat(reverseString(str.slice(0, str.length - 1)));
}
console.log(reverseString("anirudha"));

// --> task - 6 <-- //
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
    // return isPalindrome(str.substr(1, str.length - 2));
    return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true


// ============= Activity 4 : Recursive Search ============= //

// --> task - 7 <-- //
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0

// --> task - 8 <-- //

function countOccurrences(arr, target, n = 0) {
    if (n >= arr.length) return 0;
    return (arr[n] === target ? 1 : 0) + countOccurrences(arr, target, n + 1);
}
console.log(countOccurrences([1, 2, 3, 2, 1], 2)); // 2
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5


// ============= Activity 5 : Tree Traversal (Optional) ============= //

// --> task - 9 <-- //

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(node, result = []) {
    if (node === null) return result;
    inOrderTraversal(node.left, result);
    result.push(node.value);
    inOrderTraversal(node.right, result);
    return result;
}
let rootOne = new TreeNode(4);
rootOne.left = new TreeNode(2);
rootOne.right = new TreeNode(5);
rootOne.left.left = new TreeNode(1);
rootOne.left.right = new TreeNode(3);

console.log(inOrderTraversal(rootOne)); // [1, 2, 3, 4, 5]

// --> task - 10 <-- //

function treeDepth(node) {
    if (node === null) return 0;
    return Math.max(treeDepth(node.left), treeDepth(node.right)) + 1;
}
let rootTwo = new TreeNode(4);
rootTwo.left = new TreeNode(2);
rootTwo.right = new TreeNode(5);
rootTwo.left.left = new TreeNode(1);
rootTwo.left.right = new TreeNode(3);

console.log(treeDepth(rootTwo)); // 3
