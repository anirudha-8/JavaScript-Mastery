// ============ Activity 1: Template Literals ============ //

// --> task - 1 <--
const personName = `Anirudha`;
const personAge = 22;
console.log(`Name of the person is "${personName}" and he is ${personAge} years old.`);

// --> task - 2 <--
const pain = `"feel pain accept pain know pain
those who do not know pain
will never understand true peace!"`
console.log(pain);

// ============ Activity 2: Destructuring ============ //

// --> task - 3 <--
const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...remaining] = numArr;
console.log("First element of the array is: ", first);
console.log("Second element of the array is: ", second);

// --> task - 4 <--
const book = {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 1998,
};

// ===================================== //
// const { title, author, year } = book; //
// console.log(title);                   //
// console.log(author);                  //
// ===================================== //

// ----------- OR ----------- // 

let { title: bookTitle, author: bookAuthor, year: bookYear } = book;
console.log(bookTitle);
console.log(bookAuthor);

// ============ Activity 3: Spread and Rest Operators ============ //

// --> task - 5 <--
const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6, 7, 8];
console.log("New array which includes all elements from this", arr, "array and some extra elements", newArr);

// --> task - 6 <--
function sumUpAllElements(...elem) {
    const res = elem.reduce((sum, val) => sum += val, 0);
    return res;
}
console.log(sumUpAllElements(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ============ Activity 4: Default Parameters ============ //

// --> task - 7 <--
const product = (a, b = 1) => a * b;
console.log(`Multiplication of 8 and 10 is: ${product(8, 10)}`);
console.log(`Multiplication of 8 with default value is: ${product(8)}`);

// ============ Activity 4: Enhanced Object Literals ============ //

// ============================================================== //
//          JavaScript(ES6) Object Literal Enhancement            //
// Object literal enhancement is used to group variables from the //
// global scope and form them into javascript objects. It is the  //
// process of restructuring or putting back together.             //
// ============================================================== //

// --> task - 8 <--
const name = "Anirudha";
const age = 22;
const status = "Unmarried";

const myDetails = { name, age, status };
console.log(myDetails);

// --> task - 9 <--
let x = 10;
let i = 0
const computedObjectProperties = {
    [`${x - x}`]: x * i,
    [`${x - x + (++i)}`]: x * i,
    [`${x - x + (++i)}`]: x * i,
}
console.log(computedObjectProperties);
