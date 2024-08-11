// ============ Activity 1: Understanding Promises ============ //

// --> task - 1 <--
const promiseOne = new Promise(function (resolve, _) {
    setTimeout(() => {
        resolve("Promise resolved successfully after 2-seconds.");
    }, 2000);
})

promiseOne.then(function (data) {
    console.log(data);
});

// --> task - 2 <--
const promiseTwo = new Promise(function (_, reject) {
    setTimeout(() => {
        reject("Promise rejected successfully after 2-seconds.");
    }, 2000);
})

promiseTwo.catch(function (error) {
    console.log(error);
});

// ============ Activity 2: Chaining Promises ============ //

// --> task - 3 <--
const fetchData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data: ${data}`);
        }, 1000);
    });
};

fetchData("Data 1")
    .then((message) => {
        console.log(message);
        return fetchData("Data 2");
    })
    .then((message) => {
        console.log(message);
        return fetchData("Data 3");
    })
    .then((message) => {
        console.log(message);
        return fetchData("Data 4");
    })
    .then((message) => {
        console.log(message);
    })

// ============ Activity 3: Using Async/Await ============ //

// --> task - 4 <--
function asyncFnOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("After 3 seconds...");
        }, 3000);
    });
}
const handleAsyncFnOne = async () => {
    const data = await asyncFnOne();
    console.log(data);
}
handleAsyncFnOne();

// --> task - 5 <--
function asyncFnTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Something went wrong");
        }, 3000);
    });
}
const handleAsyncFnTwo = async () => {
    try {
        const data = await asyncFnTwo();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
handleAsyncFnTwo();

// ============ Activity 4: Fetching Data from an API ============ //

// --> task - 6 <--
fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
        console.log(`Fetched data from cat's api using ".then"`);
        console.log("Fun fact about cat: ", data.fact);
    })
    .catch(error => {
        console.log("Error: ", error);
    })

// --> task - 7 <--
async function catFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        console.log(`Fetched data from cat's api using "async/await"`);
        console.log("Fun fact about cat: ", data.fact);
    } catch (error) {
        console.log("Error: ", error);
    }
}
catFact();

// ============ Activity 5: Concurrent Promises ============ //

// --> task - 8 <--
// --> task - 9 <--
const promiseX = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve("Inside Promise X");
    }, 1000);
})
const promiseY = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve("Inside Promise Y");
    }, 2000);
})
const promiseZ = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve("Inside Promise Z");
    }, 3000);
})
Promise.all([promiseX, promiseY, promiseZ])
    .then((values) => {
        console.log("Promise.all resolved all promises & their values are: ", values);
    });
Promise.race([promiseX, promiseY, promiseZ])
    .then(value => {
        console.log("Promise.race resolved value is: ", value);
    })
