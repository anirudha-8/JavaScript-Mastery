// ============ Activity 1: Selecting and Manipulating Elements ============ //

// --> task - 1 <--
const title = document.getElementById("title");
title.innerHTML = "Day - 9 Tasks";

// --> task - 2 <--
const first = document.querySelector(".navbar");
first.style.backgroundColor = "aqua";

// ============ Activity 2: Creating and Appending Elements ============ //

// --> task - 3 <--
const para = document.createElement("p");
para.innerHTML = "There are total 10 tasks for day-9";
document.body.appendChild(para);

// --> task - 4 <--
const li = document.createElement("li");
li.innerHTML = "Help";
document.querySelector(".navbar").appendChild(li);
li.style.color = "red";

// ============ Activity 3: Removing Elements ============ //

// --> task - 5 <--
const removedElement = document.querySelector("#removedElement");
removedElement.remove();

// --> task - 6 <--
const navbar = document.querySelector(".navbar");
navbar.removeChild(navbar.lastChild);

// ============ Activity 4: Modifying Attributes and Classes ============ //

// --> task - 7 <--
const jsImage = document.querySelector(".jsImage");
jsImage.setAttribute('src', './image.png');

// --> task - 8 <--
const hide = document.querySelector(".hide");
hide.addEventListener("click", function () {
    jsImage.classList.toggle("toggleImage");
})

// ============ Activity 5: Event Handling ============ //

// --> task - 9 <--
const btn = document.querySelector(".btn");
const change = document.querySelector(".change");
btn.addEventListener('click', function () {
    change.innerHTML = "this is changed texts after, clicking the button.";
});

// --> task - 10 <--
const hoverMe = document.querySelector(".hoverMe");
hoverMe.addEventListener("mouseover", function () {
    hoverMe.style.borderColor = "blue";
})
hoverMe.addEventListener("mouseout", function () {
    hoverMe.style.borderColor = "red";
})