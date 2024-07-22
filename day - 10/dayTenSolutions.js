// --> task - 1 <-- //
const taskOnePara = document.querySelector(".taskOnePara");
const taskOneChange = document.querySelector("#taskOneChange");
taskOneChange.addEventListener("click", function () {
    taskOnePara.innerHTML = "Text changed successfully, after clicking on the below button.<br>Please reload the page, to make it original."
    taskOnePara.style.color = "red";
})

// --> task - 2 <-- //
const taskOneImg = document.querySelector(".taskOneImg");
const imgContainer = document.querySelector(".imgContainer");
imgContainer.addEventListener('dblclick', function () {
    taskOneImg.classList.toggle("hidden");
});


// --> task - 3 <-- //
// --> task - 4 <-- //
const taskTwoDiv = document.querySelector(".taskTwoDiv");
taskTwoDiv.addEventListener("mouseover", function () {
    taskTwoDiv.style.backgroundColor = "yellow";
    taskTwoDiv.innerHTML = "Mouse out to get original color";
})
taskTwoDiv.addEventListener("mouseout", function () {
    taskTwoDiv.style.backgroundColor = "aqua";
    taskTwoDiv.innerHTML = "Mouse over to change the color";
})


// --> task - 5 <-- //
// --> task - 6 <-- //
const activityThree = document.querySelector("#activityThree");
const activityThreeRespond = document.querySelector("#activityThreeRespond");
activityThree.addEventListener("keydown", function () {
    activityThreeRespond.innerHTML = "Key Down";
})
activityThree.addEventListener("keyup", function () {
    activityThreeRespond.innerHTML = "Key Up";
})

// --> task - 7 <-- //
// --> task - 8 <-- //
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');
    const formInfo = document.querySelector('.formInfo');
    const choices = document.getElementById('choices');
    const paragraph = document.querySelector('.selectedValue');

    // Prevent the default form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Create a FormData object from the form element
        const formData = new FormData(form);

        // Convert FormData to an object for logging
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Log the form data to the console
        console.log(formObject);
        formInfo.innerHTML = `Name: ${formObject.name}<br>Email: ${formObject.email}<br>Post Graduation Degree: ${formObject.postDeg}`;
    });

    // Update the paragraph text with the selected value
    choices.addEventListener('change', () => {
        // Get the selected value
        const selectedValue = choices.value;

        // Display the selected value in the paragraph
        paragraph.innerHTML = `Selected Value: ${selectedValue}`;
    });
});




// --> task - 9 <-- //
// --> task - 10 <-- //
const parentList = document.getElementById('parentList');
const addItemButton = document.getElementById('addItem');
const listRespond = document.querySelector(".listRespond");

// Add event listener to the parent element
parentList.addEventListener('click', function (event) {
    // Check if the clicked element is an <li> tag
    if (event.target.tagName === 'LI') {
        // Log the text content of the clicked <li> element
        console.log('Clicked item:', event.target.textContent);
        listRespond.innerHTML = event.target.textContent;
    }
});

// Function to dynamically add a new list item
// Add event listener to the button to add new items
addItemButton.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item ' + (parentList.children.length + 1);
    parentList.appendChild(newItem);
});