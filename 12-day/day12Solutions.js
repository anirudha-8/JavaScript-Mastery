// ============ Activity 1: Basic Error Handling with Try-Catch ============ //

// --> task - 1 <--
const throwError = () => {
    throw new Error("Something went wrong...");
}
try {
    throwError();
} catch (error) {
    // console.log(error);
    console.log("Error Caught: ", error.message);
}

// --> task - 2 <--
const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
}
try {
    console.log(divide(20, 0));
} catch (error) {
    // console.log(error);
    console.log("Error Caught: ", error.message);
}

// ============ Activity 2: Finally Block ============ //

// --> task - 3 <--
try {
    console.log("hello world, with no error");
    throw new Error("Something is pissing me off here")
} catch (error) {
    // console.log(error);
    console.log(error.message);
} finally {
    console.log("no matter what, i execute always!");
}

// ============ Activity 3: Custom Error Objects ============ //

// --> task - 4 <--
class customError extends Error {
    constructor(message) {
        super(message);
        this.name = 'customError';
    }
}
function throwCustomError() {
    throw new customError('This is a custom error.');
}
try {
    throwCustomError();
} catch (error) {
    console.error('Custom error caught:', error.message);
}

// --> task - 5 <--
document.addEventListener("DOMContentLoaded", () => {
    const username = document.querySelector("#username");
    const submit = document.querySelector("#submit");
    const form = document.querySelector("form");

    const newPara = document.createElement("p");
    form.appendChild(newPara);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        usernameValue = username.value;
        try {
            if (usernameValue === '') {
                username.style.border = "2px solid red";
                throw new Error("Don't leave it empty!");
            }
            username.style.border = "1px solid black";
            newPara.innerHTML = "Username is: " + usernameValue;
        } catch (error) {
            newPara.innerHTML = error;
        }
    });
});

// ============ Activity 4: Error Handling in Promises ============ //

// --> task - 6 <--
const promiseOne = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Something wrong in the promise...");
    }, 2000);
})
promiseOne
    .then(() => {
        console.log("Promise resolved successfully!");
    })
    .catch((error) => {
        console.log("Error: ", error);
    })

// --> task - 7 <--
const handlePromise = async () => {
    try {
        const data = await promiseOne;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
handlePromise();

// ============ Activity 5: Graceful Error Handling in Fetch ============ //

// --> task - 8 <--
fetch("https://www.invalid.url.com/invalid-data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch the URL");
        }
        return response.json()
    })
    .then(data => console.log("Fetched Data: ", data))
    .catch(error => console.log(error));

// --> task - 9 <--
const fetchData = async () => {
    try {
        const response = await fetch("https://www.invalid.url.com/invalid-data");
        const data = await response.json();
        console.log("Fetched Data: ", data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();