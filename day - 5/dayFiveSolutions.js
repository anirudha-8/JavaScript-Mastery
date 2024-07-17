// ============ Activity 1: Function Declaration ============ //

// --> task - 1 <--
function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return "Even number!";
    }
    return "Odd number!";
}
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(1));

// --> task - 2 <--
function getSquare(n) {
    // return n * n;
    // OR
    return n ** 2;
}
console.log(getSquare(8));
console.log(getSquare(1));

// ============ Activity 2: Function Expression ============ //

// --> task - 3 <--
const maxOfTwo = function (n1, n2) {
    if (n1 > n2) {
        return n1 + " is maximum.";
    } else if (n2 > n1) {
        return n2 + " is maximum.";
    }
    return `${n1} and ${n2} are equal.`;
};
console.log(maxOfTwo(20, 80));
console.log(maxOfTwo(80, 80));

// --> task - 4 <--
const concatenateTwoStrings = function (str1, str2) {
    // return `${str1}${str2}`;
    return str1 + str2;
};
console.log(concatenateTwoStrings("ani", "rudha"));

// ============ Activity 3: Arrow Function ============ //

// --> task - 5 <--
const getSum = (n1, n2) => n1 + n2;
console.log(getSum(70, 10));
console.log(getSum(10, -2));

// --> task - 6 <--
const checkString = (str, char) => {
    for (const letter of str) {
        if (letter === char) return true;
    }
    return false;
};
console.log(checkString("rohit", "r"));
console.log(checkString("rohit", "a"));

// ============ Activity 4: Function Parameters and Default Values ============ //

// --> task - 7 <--
function getProduct(a, b = 1) {
    return a * b;
}
console.log(getProduct(10, 8));
console.log(getProduct(8));

// --> task - 8 <--
function greet(name, age = 18) {
    return `Hello ${name}, Good Morning! You are ${age} years old right, aren't you?`;
}
console.log(greet("Anirudha", 22));
console.log(greet("Rohit"));

// ============ Activity 5: Higher-Order Functions ============ //

// --> task - 9 <--
function helloWorld() {
    return "Hello World";
}
function callNTimes(fn, n) {
    if (n === 0) return;
    console.log(fn());
    return callNTimes(fn, --n);
}
callNTimes(helloWorld, 8);


// --> task - 10 <--
function hOF(fn1, fn2, val) {
    return fn2(fn1(val));
}
console.log(hOF(getSquare, checkEvenOdd, 7));
console.log(hOF(getSquare, checkEvenOdd, 8));