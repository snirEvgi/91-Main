console.log("It Works");
const DOM = {
    taskDescription: null,
    date: null,
    time: null,
    mainDiv: null,
    priority: null,



}
const myListOfTasks = JSON.parse(localStorage.getItem("TaskList")) || [];

function init() {
    DOM.taskDescription = document.querySelector("#tDescript")
    DOM.date = document.querySelector("#date")
    DOM.time = document.querySelector("#time")
    DOM.mainDiv = document.querySelector("#containDynamics")
    DOM.priority = document.querySelector("#prioritySelect")



    window.onload = function () {
        draw(myListOfTasks)
        const darkModeSelect = document.querySelector("#darkTheme")
        darkModeSelect.value = window.localStorage.getItem('selectedOption');
    }



    const addTaskButton = document.querySelector("#myButton");
    addTaskButton.addEventListener("click", addNewTaskFn);

    const clearTasksButton = document.querySelector("#myClearButton")
    clearTasksButton.addEventListener("click", deleteTasks)


}
function addNewTaskFn() {
    if (DOM.taskDescription.value === "") {
        return alert("Please enter a full Description of your task")
    }
    if (DOM.date.value === "") {
        return alert("Please enter the correct due date of your task")
    }
    if (DOM.time.value === "") {
        return alert("Please enter the correct due time of your task")
    }
    if (DOM.priority.value === "Choose:" || DOM.priority.value === "") {
        return alert("Please enter the correct priority of your task")
    }

    myListOfTasks.push(new Todo(DOM.taskDescription.value,
        DOM.date.value, DOM.time.value, DOM.priority.value))
    draw(myListOfTasks)
    localStorage.setItem("TaskList", JSON.stringify(myListOfTasks))
    clearInputs()
}
function clearUl() {
    DOM.mainDiv.innerHTML = ""
}
function deleteTasks() {
    myListOfTasks.splice(0)
    window.localStorage.setItem("TaskList", JSON.stringify(myListOfTasks))
    draw(myListOfTasks)
}
function draw(arr) {
    if (Array.isArray === false) return;
    clearUl()
    for (let index = 0; index < arr.length; index++) {
        const currentTask = arr[index];

        const newDiv = document.createElement("div")
        newDiv.classList.add("stickyNotes", "fadeIn")

        const firstContentDiv = document.createElement("div")
        firstContentDiv.classList.add("contentArea")

        const taskId = document.createElement("span")
        taskId.innerText = currentTask.taskId
        // taken id for the deleteLoop
        const textUl = document.createElement("ul")
        textUl.classList.add("myFirstList")
        // textbox
        const textLi = document.createElement("li")
        textLi.innerText = currentTask.taskDescription

        const secondContentDiv = document.createElement("div")
        secondContentDiv.classList.add("secondContentArea")

        const dateAndTimeUl = document.createElement("ul")
        dateAndTimeUl.classList.add("mySecondList")

        const dateLi = document.createElement("li")
        dateLi.innerText = currentTask.date

        const timeLi = document.createElement("li")
        timeLi.innerText = currentTask.time

        // deleteBtn
        const deleteBtn = document.createElement("i")
        deleteBtn.classList.add("deleteIcon", "bi", "bi-x-square-fill")
        deleteBtn.addEventListener("click", function () {
            const indexToDelete = myListOfTasks.findIndex(function (ct) {
                return currentTask.taskId === ct.taskId;
            });
            myListOfTasks.splice(indexToDelete, 1);
            localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
            console.log(myListOfTasks);
            draw(myListOfTasks)
        })

        // darkmode Switch Case
        const body = document.body
        const headerDark = document.querySelector("#headerMode")
        const sheaderDark = document.querySelector("#sLblDark")
        const darkModeSelect = document.querySelector("#darkTheme")
        const selectedOption = window.localStorage.getItem('selectedOption');
        darkModeSelect.addEventListener("change", function () {
            switch (darkModeSelect.value) {
                case 'Dark': body.style.backgroundImage = "url(images/darkCork.jpg)"
                    headerDark.classList.add("mainHeaderDark")
                    newDiv.classList.add("stickyNotesDark");
                    firstContentDiv.classList.add("contentAreaDark")
                    deleteBtn.classList.add("deleteIconDark")
                    textUl.classList.add("myFirstListDark")
                    dateAndTimeUl.classList.add("mySecondListDark")
                    sheaderDark.classList.add("sLblDark")


                    break;
                case 'Light':
                    body.style.backgroundImage = "url(images/cork.jpg)"
                    newDiv.classList.remove("stickyNotesDark");
                    firstContentDiv.classList.remove("contentAreaDark")
                    deleteBtn.classList.remove("deleteIconDark")
                    textUl.classList.remove("myFirstListDark")
                    dateAndTimeUl.classList.remove("mySecondListDark")
                    headerDark.classList.remove("mainHeaderDark")
                    sheaderDark.classList.remove("sLblDark")

            }
        })
        window.localStorage.setItem('selectedOption', darkModeSelect.value);
        // // Priority attachment

        const prioritySelected = document.createElement("div")
        switch (currentTask.priority) {
            case `Low`:
                const lowPriorImg = document.createElement("img")
                lowPriorImg.src = "images/important.png"
                lowPriorImg.classList.add("priorImg")
                prioritySelected.append(lowPriorImg)
                break
            case `Medium`:
                const medPriorImg = document.createElement("img")
                medPriorImg.src = "images/somewhatImportant.png"
                medPriorImg.classList.add("priorImg")
                prioritySelected.append(medPriorImg)
                break
            case `High`:
                const highPriorImg = document.createElement("img")
                highPriorImg.src = "images/veryImportant.png"
                highPriorImg.classList.add("priorImg")
                prioritySelected.append(highPriorImg)
                break
        }
        // flying notes 
        const flyingNote = document.createElement("div")
        flyingNote.classList.add("flyingNote")
        flyingNote.innerText = `This priority is - ${currentTask.priority}`
        prioritySelected.addEventListener("mouseover", function () {
            newDiv.appendChild(flyingNote)
        })
        prioritySelected.addEventListener("mouseleave", function () {
            newDiv.removeChild(flyingNote)
        })
        textUl.append(textLi)
        dateAndTimeUl.append(dateLi, timeLi)
        firstContentDiv.append(textUl)
        secondContentDiv.append(dateAndTimeUl)
        newDiv.append(deleteBtn, firstContentDiv, secondContentDiv, prioritySelected)
        DOM.mainDiv.append(newDiv)
    }
}
function clearInputs() {
    const arrOfClass = Array.from(document.getElementsByClassName("myInput"))
    for (let index = 0; index < arrOfClass.length; index++) {
        arrOfClass[index].value = ""
    }
}


init()
