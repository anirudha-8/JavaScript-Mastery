// ============= Activity 1 : Understanding LocalStorage ============= //

// --> task - 1 <-- //
localStorage.setItem("goal", "JavaScript Master");
const completeGoal = localStorage.getItem("goal");
console.log(completeGoal);

// --> task - 2 <-- //
localStorage.setItem("obj", JSON.stringify({ name: "Anirudha", age: 22 }));
const getObj = localStorage.getItem("obj")
console.log(JSON.parse(getObj));
console.log(JSON.parse(getObj).name);
console.log(JSON.parse(getObj).age);

// ============= Activity 2 : Use LocalStorage ============= //

// --> task - 3 <-- //
const form = document.querySelector("#localStorageForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const userInfo = { name, email };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    getUserInfo();
})
const getUserInfo = () => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    if (info) {
        console.log(`Username: ${info.name}, Email: ${info.email}`);
    }
}

// --> task - 4 < -- //
const removeItem = (key) => {
    console.log("Removed Item: ", JSON.parse(localStorage.getItem(key)));
    localStorage.removeItem(key);
}
removeItem("obj");

// ============= Activity 3 : Understanding SessionStorage ============= //

// --> task - 5 <-- //


// --> task - 6 <-- //