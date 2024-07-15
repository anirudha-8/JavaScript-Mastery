// ============ Activity 1: if-else statement ============ //

// --> task - 1 <--
function checkNumber(n) {
    if (n > 0) {
        return "Number is positive.";
    } else if (n < 0) {
        return "Number is negative.";
    } else if (n == 0) {
        return "Number is zero.";
    } else {
        return "NOT a number!";
    }
}
console.log(checkNumber(8));
console.log(checkNumber(-8));
console.log(checkNumber(0));
console.log(checkNumber(null));

// --> task - 2 <--
function checkVoteEligible(age) {
    if (age >= 18) {
        return "You are eligible for vote!";
    } else {
        return "You are not eligible for vote!";
    }
}

// ============ Activity 2: Nested if-else statement ============ //

// --> task - 3 <--
function largestOfThreeNumbers(n1, n2, n3) {
    if (n1 > n2) {
        if (n1 > n3) {
            return n1 + " is largest number.";
        } else {
            return n3 + " is largest number.";
        }
    } else {
        if (n2 > n3) {
            return n2 + " is largest number.";
        } else {
            return n3 + " is largest number.";
        }
    }
}
console.log(largestOfThreeNumbers(3, 5, 1));

// ============ Activity 3: Switch case ============ //

// --> task - 4 <--
function getDayOfWeek(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid Day!";
    }
}
console.log(getDayOfWeek(1));
console.log(getDayOfWeek(2));
console.log(getDayOfWeek(3));
console.log(getDayOfWeek(4));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(6));
console.log(getDayOfWeek(7));

// --> task - 5 <--
function calculateGrade(score) {
    switch (true) {
        case score >= 90:
            console.log("A");
            break;
        case score >= 80:
            console.log("B");
            break;
        case score >= 70:
            console.log("C");
            break;
        case score >= 60:
            console.log("D");
            break;
        default:
            console.log("F");
    }
}
calculateGrade(95);
calculateGrade(85);
calculateGrade(70);
calculateGrade(65);
calculateGrade(55);

// ============ Activity 4: Conditional (Ternary) Operator ============ //

// --> task - 6 <--
function checkEvenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(7));

// ============ Activity 5: Combining Conditions ============ //

// --> task - 7 <--
function checkLeapYear(year) {
    if ((year % 400 == 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    }
    return "Not leap year";
}
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2018));