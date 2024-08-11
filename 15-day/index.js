// ========== Activity 1 - Understanding Closures ========== //

const { functions } = require("lodash");

// --> task - 1 <-- //
function greet() {
    const hello = "hello";
    return function world() {
        return hello + " world";
    }
}
const helloWorld = greet();
console.log(helloWorld());
console.log(greet()());

// --> task - 2 <-- //
function privateCounter() {
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        getCounter() {
            return `Counter is ${counter}`;
        }
    }
}
const counter = privateCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCounter());

// ========== Activity 2 - Practical Closures ========== //

// --> task - 3 <-- //
function uniqueIdGenerator() {
    let id = 0;
    return () => ++id;
}
const getId = uniqueIdGenerator();
console.log("Id is: ", getId());
console.log("Id is: ", getId());
console.log("Id is: ", getId());
console.log("Id is: ", getId());

// --> task - 4 <-- //
function greetUser(username) {
    return () => `Hello ${username}, have a great day!`;
}
const userOne = greetUser("Anirudha")();
console.log(userOne);
const userTwo = greetUser("Rohit")();
console.log(userTwo);

// ========== Activity 3 - Closures in Loops ========== //

// --> task - 5 <-- //
function createArrayOfFunctions() {
    const functions = [];
    for (let i = 1; i <= 8; i++) {
        functions.push(
            function logIndex(index) {
                return () => index;
            }(i)
        );
    }
    return functions;
}

const functionArray = createArrayOfFunctions();
// this will give array of functions
console.log(functionArray);
// calling each function in array
for (const fn of functionArray) {
    console.log(fn());
}

// ========== Activity 4 - Module Pattern ========== //

// --> task - 6 <-- //
// i.e. "I I F E" (Immediately Invoked Function Expression)
const collectionManager = (() => {
    let items = [];
    return {
        add(...item) {
            items.push(...item);
        },
        remove() {
            items.pop();
        },
        listItems() {
            return items;
        }
    };
})();
collectionManager.add("item1");
collectionManager.add("item2", "item3", "item4", "item5");
collectionManager.remove();
console.log(collectionManager.listItems());

// ========== Activity 5 - Memoization ========== //

// --> task - 7 <-- //
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

// --> task - 8 <-- //
function getFactorial() {
    const cache = {};

    return function factorial(num) {
        if (num in cache) {
            return cache[num];
        } else {
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            cache[num] = fact;
            return fact;
        }
    };
}

const factorial = getFactorial();

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(7));
console.log(factorial(2)); // Output: 2 (retrieved from cache)
