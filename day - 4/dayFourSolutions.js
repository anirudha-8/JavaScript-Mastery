// ============ Activity 1: For loop ============ //

// --> task - 1 <--
console.log("\nPrinting numbers from 1 to 10 using for loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// --> task - 2 <--
console.log("\nPrinting multiplication table of 5 using for loop");
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}


// ============ Activity 2: While loop ============ //

// --> task - 3 <--
console.log("\nSum of numbers from 1 to 10 using while loop");
let n = 1;
let sum = 0;
while (n <= 10) {
    sum += n;
    n++;
}
console.log(sum);

// --> task - 4 <--
console.log("\nPrinting numbers from 10 to 1 using while loop");
let x = 10;
while (x > 0) {
    console.log(x);
    x--;
}

// ============ Activity 3: Do...While loop ============ //

// --> task - 5 <--
console.log("\nPrinting numbers from 1 to 5 using do-while loop");
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);

// --> task - 6 <--
console.log("\nCalculate factorial of number using do-while loop");
let fact = 1;
let num = 5;
do {
    fact *= num;
    num--;
} while (num > 0);
console.log(fact);

// ============ Activity 4: Nested loops ============ //

// --> task - 7 <--
console.log("\nPrinting star patterns using nested for loops");
let limit = 4;
for (let i = 0; i < limit; i++) {
    // to prevent from printing stars on new line in each iteration
    let stars = ""
    for (let j = 0; j <= i; j++) {
        stars += "* "
    }
    console.log(stars);
}

// ============ Activity 5: Loop Control Statements ============ //

// --> task - 8 <--
console.log("\nPrinting numbers from 1 to 10, but skipping number 5");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

// --> task - 9 <--
console.log("\nPrinting numbers from 1 to 10, but stop number 7");
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) break;
}
