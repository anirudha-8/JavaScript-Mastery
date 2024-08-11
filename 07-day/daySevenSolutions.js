// ============ Activity 1: Object Creation and Access ============ //

// --> task - 1 <--
const book = {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 1998,
};
console.log(book);

// --> task - 2 <--
const bookTitle = book.title;
const bookAuthor = book.author;
console.log(`\nThe author of the book "${bookTitle}" is "${bookAuthor}".`);

// ============ Activity 2: Object Methods ============ //

// --> task - 3 <--
book.details = function () {
    return `Book Title: ${this.title}\nBook Author: ${this.author}`;
};
console.log("\n" + book.details());

// --> task - 4 <--
book.updateYear = function (newYear) {
    this.year = newYear;
};
console.log("\nBefore updating book's publish year is: ", book.year);
book.updateYear(2000);
console.log("After updating book's publish year is: ", book.year, "\n");

// ============ Activity 3: Object Methods ============ //

// --> task - 5 <--
const library = {
    name: "MyLibrary",
    books: [
        {
            title: "The 48 Laws of Power",
            author: "Robert Greene",
            year: 1998,
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
        },
    ],
};
console.log(library);

// --> task - 6 <--
const nameOfLibrary = library.name;
console.log("\nThe name of the library is: ", nameOfLibrary);

const libraryBookTitles = library.books.map(book => book.title)
console.log("\nTitles of all the books in the library are: ", libraryBookTitles);

// ============ Activity 4: The `this` keyword ============ //

// --> task - 7 <--
// ----------------- //
//  DONE IN TASK - 3 //
// ----------------- //

// ============ Activity 5: Object Iteration ============ //

// --> task - 8 <--
console.log("\nIterating over the properties of the book object using for...in");
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

// --> task - 9 <--
console.log("\nUsing Object.keys and Object.values methods to log all the keys and values of the book object.");
console.log("\nAll the keys of the book object are: ", Object.keys(book));
console.log("\nAll the values of the book object are: ", Object.values(book));
