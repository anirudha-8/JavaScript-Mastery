// ============ Activity 1: Arithmetic Operations ============ //

// --> task - 1 <--
const addition = (a, b) => a + b;

// --> task - 2 <--
const subtract = (a, b) => a - b;

// --> task - 3 <--
const multiply = (a, b) => a * b;

// --> task - 4 <--
const division = (a, b) => a / b;

// --> task - 5 <--
const modulus = (a, b) => a % b;

function arithmeticOperations(a, b, logic) {
	return logic(a, b);
}
console.log(arithmeticOperations(20, 10, addition));
console.log(arithmeticOperations(20, 10, subtract));
console.log(arithmeticOperations(20, 10, multiply));
console.log(arithmeticOperations(20, 10, division));
console.log(arithmeticOperations(20, 10, modulus));

// ============ Activity 2: Assignment Operators ============ //

let num = 80;

// --> task - 6 <--
num += 20;
console.log(num);

// --> task - 7 <--
num -= 20;
console.log(num);

// ============ Activity 3: Comparison Operators ============ //

let n1 = 80;
let n2 = 10;
let res;

// --> task - 8 <--
res = n1 > n2;
console.log(res);
res = n1 < n2;
console.log(res);

// --> task - 9 <--
res = n1 >= n2;
console.log(res);
res = n1 <= n2;
console.log(res);

// --> task - 10 <--
res = n1 == n2;
console.log(res);
res = n1 === n2;
console.log(res);

// ============ Activity 4: Logical Operators ============ //

// --> task - 11 <--
// --> task - 12 <--
const leapYear = (year) => {
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
		return true;
	}
	return false;
};
console.log(leapYear(2024));
console.log(leapYear(2018));

// --> task - 13 <--
const isPositive = (num) => {
	if (!(num < 0)) {
		return true;
	}
	return false;
};
console.log(isPositive(8));
console.log(isPositive(-8));

// ============ Activity 5: Logical Operators ============ //

// --> task - 14 <--
const positiveOrNegative = (num) => {
	return num > 0 ? "Positive number!" : "Negative number!";
};

console.log(positiveOrNegative(8));
console.log(positiveOrNegative(-8));
