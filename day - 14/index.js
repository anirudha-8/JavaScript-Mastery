// ========== Activity 1 - Class Definition ========== //

// --> task - 1 <-- //
class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    // A 'set' accessor must have exactly one parameter.
    set fullName(newName) {
        const fullName = newName.split(" ");
        if (fullName.length === 2) {
            [this.fname, this.lname] = newName.split(" ");
        } else {
            console.error(`Invalid name format, Please provide only first and last name.`);
        }
    }

    greeting() {
        return `Hello, This is ${this.fullName} and I'm ${this.age} years old.`;
    }

    // method to update the age
    updateAge(newAge) {
        this.age = newAge;
    }

    // static method - can be called without any instance
    static genericGreeting() {
        return `Hello, from the "Person" class.`
    }
}
const person1 = new Person("Anirudha", "Bele", 22);
console.log(person1.greeting());

// --> task - 2 <-- //
person1.updateAge(20);
console.log(person1.greeting());

// ========== Activity 2 - Class Inheritance ========== //

// --> task - 3 <-- //
class Student extends Person {
    static studentCount = 0;
    constructor(fname, lname, age, sId) {
        super(fname, lname, age);
        this.sId = sId;
        Student.studentCount++;
    }
    getSId() {
        return `Student Id: ${this.sId}`;
    }
    greeting() {
        return `Hello, This is ${this.fullName} and I'm ${this.age} years old. My student id is: ${this.sId}`;
    }
}
const std1 = new Student("Anirudha", "Bele", 22, 9);
console.log(std1.getSId());

// --> task - 4 <-- //
console.log(std1.greeting());

// ========== Activity 3 - Static Methods and Properties ========== //

// --> task - 5 <-- //
console.log(Person.genericGreeting());

// --> task - 6 <-- //
const std2 = new Student("Rohit", "Bele", 20, 1);
console.log(Student.studentCount);

// ========== Activity 4 - Getters and Setters ========== //

// --> task - 7 <-- //
const person2 = new Person("Pratik", "Bele", 22, 8)
console.log(person2.fullName);

// --> task - 8 <-- //
person2.fullName = "Anya Bele";
console.log(person2.fullName);
// It'll give error, as we are assigning three words
person2.fullName = "Anya Ramachandra Bele";
console.log(person2.fullName);

// ========== Activity 5 - Private Fields (Optional) ========== //

// --> task - 9 <-- //
class Account {
    // In JavaScript, the # symbol is used to declare private fields within a class. Private fields are only accessible within the class they are defined in, meaning they cannot be accessed or modified from outside the class, even by subclasses. This helps in encapsulating the class's internal state and provides a way to restrict direct access to certain properties.
    // Property '#balance' is not accessible outside class 'Account' because it has a private identifier
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        return `Rs. ${amount} is deposited to your account. ${this.getBalance()}`;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            return `Insufficient Balance!`;
        } else {
            this.#balance -= amount;
            return `Rs. ${amount} withdrawn successfully. ${this.getBalance()}`;
        }
    }

    getBalance() {
        return `Your current balance is Rs. ${this.#balance}`;
    }
}
// It'll gives error, as we accessing private fields
// console.log(acc1.#balance);

// --> task - 10 <-- //
const acc1 = new Account(88888888);
console.log(acc1.getBalance());
console.log(acc1.deposit(888888));
console.log(acc1.deposit(8888));
console.log(acc1.getBalance());