// ============= Activity 1 : Understanding LocalStorage ============= //

// --> task - 1 <-- //
localStorage.setItem("goal", "JavaScript Master");
const completeGoal = localStorage.getItem("goal");
console.log(completeGoal);

// --> task - 2 <-- //
localStorage.setItem("obj1", JSON.stringify({ name: "Anirudha", age: 22 }));
const getObj = JSON.parse(localStorage.getItem("obj1"));
console.log(getObj);
console.log(getObj.name);
console.log(getObj.age);

// ============= Activity 2 : Use LocalStorage ============= //

// --> task - 3 <-- //
const localForm = document.querySelector("#localStorageForm");
localForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const localName = document.querySelector("#localName").value;
    const localEmail = document.querySelector("#localEmail").value;
    const userInfo = { localName, localEmail };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    getLocalStorageInfo();
})
const getLocalStorageInfo = () => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    if (info) {
        console.log(`Username: ${info.localName}, Email: ${info.localEmail}`);
    }
}

// --> task - 4 < -- //
const removeLocalStorageItem = (key) => {
    console.log("Removed Item: ", JSON.parse(localStorage.getItem(key)));
    localStorage.removeItem(key);
}
removeLocalStorageItem("obj1");

// ============= Activity 3 : Understanding SessionStorage ============= //

// --> task - 5 <-- //

sessionStorage.setItem("JsMaster", "Anirudha");
const master = sessionStorage.getItem("JsMaster");
console.log(master);

// --> task - 6 <-- //

sessionStorage.setItem("obj2", JSON.stringify({ jSMaster: "Anirudha", age: 22 }));
const me = JSON.parse(sessionStorage.getItem("obj2"));
console.log(me);
console.log(me.jSMaster);
console.log(me.age);

// ============= Activity 4 : Using SessionStorage ============= //

// --> task - 7 <-- //
const sessionForm = document.querySelector("#sessionStorageForm");
sessionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const sessionName = document.querySelector("#sessionName").value;
    const sessionEmail = document.querySelector("#sessionEmail").value;
    const sessionDetails = { sessionName, sessionEmail };
    sessionStorage.setItem("sessionInfo", JSON.stringify(sessionDetails));
    getSessionStorageInfo();
})

const getSessionStorageInfo = () => {
    const info = JSON.parse(sessionStorage.getItem("sessionInfo"));
    if (info) {
        console.log(`UserName: ${info.sessionName} and Email: ${info.sessionEmail}`);
    }
}

// --> task - 8 <-- //
const removeSessionStorageItem = (key) => {
    console.log("Removed Item is: ", sessionStorage.getItem(key));
    sessionStorage.removeItem(key);
}
removeSessionStorageItem("JsMaster");

// ============= Activity 5 : Comparing LocalStorage and SessionStorage ============= //

// --> task - 9 <-- //
const saveToBothStorage = (key, value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}
const retrieveData = (type, key) => {
    return type.getItem(key);
}
saveToBothStorage("JsMaster", "Anirudha Bele");
console.log("Local Storage Value => ", retrieveData(localStorage, "JsMaster"));
console.log("Session Storage Value => ", retrieveData(sessionStorage, "JsMaster"));

// --> task - 10 <-- //
const clearLocalAndSessionStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
}
clearLocalAndSessionStorage();