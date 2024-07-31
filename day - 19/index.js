// ============= Activity 1 : Basic Regular Expressions ============= //

// --> task - 1 <-- //
const matchJavaScript = (str) => {
    const regex = /JavaScript/g;
    const match = str.match(regex);
    return match;
}
console.log(matchJavaScript("I love JavaScript, JavaScript is fun"));

// --> task - 2 <-- //
const matchDigits = (str) => {
    const regex = /\d+/g;
    const match = str.match(regex);
    return match;
}
console.log(matchDigits("My USN number is 1AM23MC009"));

// ============= Activity 2 : Character Classes and Quantifiers ============= //

// --> task - 3 <-- //
const matchAllCapitalWord = (str) => {
    const regex = /\b[A-Z][a-z]*\b/g;
    const match = str.match(regex);
    return match
}
console.log(matchAllCapitalWord("The Quick Brown Fox Jumps Over The Lazy Dog."));

// --> task - 4 <-- //
const matchAllDigits = (str) => {
    const regex = /\d+/g;
    const match = str.match(regex);
    return match;
}
console.log(matchAllDigits("My USN number is 1AM23MC009"));

// ============= Activity 3 : Grouping and Capturing ============= //

// --> task - 5 <-- //
const captureUSNumberFormat = (str) => {
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const match = str.match(regex);
    return match;
}
console.log(captureUSNumberFormat("US number:- (123) 456-7890"));

// --> task - 6 <-- //
const captureUsernameAndDomain = (str) => {
    const regex = /(\w+)@(\w+\.\w+)/;
    const match = str.match(regex);
    return match ? match.slice(1) : [];
}
console.log(captureUsernameAndDomain("My email id is: beleanirudha8@gmail.com"));

// ============= Activity 4 : Assertions and Boundaries ============= //

// --> task - 7 <-- //
const matchOnlyWordAtBeg = (str) => {
    const regex = /^\w+/;
    const match = str.match(regex);
    return match;
}
console.log(matchOnlyWordAtBeg("Hello World"));

// --> task - 8 <-- //
const matchOnlyWordAtEnd = (str) => {
    const regex = /\w+$/;
    const match = str.match(regex);
    return match;
}
console.log(matchOnlyWordAtEnd("Hello World"));

// ============= Activity 5 : Practical Applications ============= //

// --> task - 9 <-- //
const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const match = pwd.match(regex);
    return match;
}
console.log(validatePassword("AnirudhaBele@3710"));

// --> task - 10 < -- //
const validateURL = (url) => {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?(\?[^\s]*)?$/;
    const match = url.match(regex);
    return match;
}
console.log(validateURL("https://www.google.com"));
