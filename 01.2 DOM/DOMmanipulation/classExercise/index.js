// Changing the text content of an element:///////
// document.getElementById("elementId").innerHTML = "New Text Content";

// Modifying an element's style://////
// document.getElementById("elementId").style.backgroundColor = "red";

// Adding a new element to the page://///
// var newElement = document.createElement("p");
// newElement.innerHTML = "This is a new paragraph.";
// document.body.appendChild(newElement);

// Removing an element from the page:////////
// var elementToRemove = document.getElementById("elementId");
// elementToRemove.parentNode.removeChild(elementToRemove);

// Adding an event listener to an element://////
// document.getElementById("elementId").addEventListener("click", function() {
// alert("Element was clicked!");
//   });


// function init() {

//     const allListItems = document.getElementsByTagName("li");
//     allListItems[0].style.background = "lightblue"
//     console.log(allListItems);

//     for (let index = 0; index < allListItems.length; index++) {
//         allListItems[index].style.backgroundColor = "lightblue"
//         allListItems[index].onclick = function () {
//             const spanContainer = document.getElementById("selectedSpan");
//             spanContainer.innerText = this.innerText
//         }
//     }



// } init()
// function addStudent() {

// }

function init() {
    // gets all the elements by a tag name, return [] HTMLCollection
    const arrayOfH1 = window.document.getElementsByTagName("h1");
    console.log(arrayOfH1);
    console.log(arrayOfH1[0].innerText);
    console.log(arrayOfH1[0].innerHTML);

    const allListItems = document.getElementsByTagName("li");
    console.log(allListItems[0].style);
    //   allListItems[0].style.background = "yellow";

    const allButtons = document.getElementsByClassName("button_main");
    for (let index = 0; index < allButtons.length; index++) {
        allButtons[index].style.backgroundColor = "lightblue";
        allButtons[index].onclick = function () {
            const spanContainer = document.getElementById("selectedSpan");
            // spanContainer is equal to <span id="selectedSpan"> </span>
            // this refers to the LI item
            // spanContainer  refers to the element we catch from the dom by id
            spanContainer.innerText = this.innerText;
        };
    }
}

function changeColor() {
    const sheader = document.getElementById("secondHeader");
    if (sheader.style.backgroundColor === "red") {
        sheader.style.backgroundColor = "white";
    } else {
        sheader.style.backgroundColor = "red";
    }
}

function showAllText() {
    const mainHeader = document.getElementById("mainHeader");
    mainHeader.classList.remove("hiddenText");
}

function hideText() {
    const mainHeader = document.getElementById("mainHeader");
    mainHeader.classList.add("hiddenText");
}

function addStudent() {
    const ulStudents = document.getElementById("studentsList"); //ul
    const studentInput = document.getElementById("studentName"); // input
    const studentName = studentInput.value;
    const newLi = document.createElement("li"); // creating new elem

    newLi.classList.add("list-group-item");// adding class
    const newButton = document.createElement("button"); // creating element
    newButton.classList.add("btn", "btn-primary"); // adding btn BS
    newButton.innerText = studentName;
    newLi.append(newButton);
    ulStudents.append(newLi);
    studentInput.value = "";

    // class Exercise

    const badgeInnerText = 1
    const badgeName = document.createElement("span")
    badgeName.classList.add("badge", "bg-secondary")
    badgeName.innerText = badgeInnerText
    badgeName.innerText = Math.ceil(Math.random() * 999)
    newLi.append(badgeName) // add to the HTML

}

init();

