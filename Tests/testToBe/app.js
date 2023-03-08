console.log("It Works");
const DOM = {
  taskDescription: null,
  date: null,
  time: null,
  mainDiv: null,
  priority: null,
};
const myListOfTasks = JSON.parse(localStorage.getItem("TaskList")) || [];

function init() {
  DOM.taskDescription = document.querySelector("#tDescript");
  DOM.date = document.querySelector("#date");
  DOM.time = document.querySelector("#time");
  DOM.mainDiv = document.querySelector("#containDynamics");
  DOM.priority = document.querySelector("#prioritySelect");

  window.onload = function () {
    draw(myListOfTasks);
  };


  const addTaskButton = document.querySelector("#myButton");
  addTaskButton.addEventListener("click", addNewTaskFn);

  const clearTasksButton = document.querySelector("#myClearButton");
  clearTasksButton.addEventListener("click", deleteTasks);
  clearTasksButton.addEventListener("click", function(){
    location.reload();// restarts page
  });

}
function addNewTaskFn() {
  if (DOM.taskDescription.value === "") {
    return alert("Please enter a full Description of your task");
  }
  if (DOM.date.value === "") {
    return alert("Please enter the correct due date of your task");
  }
  if (DOM.time.value === "") {
    return alert("Please enter the correct due time of your task");
  }
  if (DOM.priority.value === "Choose:" || DOM.priority.value === "") {
    return alert("Please enter the correct priority of your task");
  }

  myListOfTasks.push(
    new Todo(
      DOM.taskDescription.value,
      DOM.date.value,
      DOM.time.value,
      DOM.priority.value
    )
  );
  draw(myListOfTasks);
  localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
  clearInputs();
}
function clearUl() {
  DOM.mainDiv.innerHTML = "";
}
function deleteTasks() {
  myListOfTasks.splice(0);
  window.localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
  draw(myListOfTasks);
}
function draw(arr) {
  if (Array.isArray === false) return;
  clearUl();
  for (let index = 0; index < arr.length; index++) {
    const currentTask = arr[index];

    const newDiv = document.createElement("div");
    newDiv.classList.add("stickyNotes", "fadeIn");

    const firstContentDiv = document.createElement("div");
    firstContentDiv.classList.add("contentArea");

    const taskId = document.createElement("span");
    taskId.innerText = currentTask.taskId;
    // taken id for the deleteLoop
    const textUl = document.createElement("ul");
    textUl.classList.add("myFirstList");
    // textbox
    const textLi = document.createElement("li");
    textLi.innerText = currentTask.taskDescription;

    const secondContentDiv = document.createElement("div");
    secondContentDiv.classList.add("secondContentArea");

    const dateAndTimeUl = document.createElement("ul");
    dateAndTimeUl.classList.add("mySecondList");

    const dateLi = document.createElement("li");
    dateLi.innerText = currentTask.date;

    const timeLi = document.createElement("li");
    timeLi.innerText = currentTask.time;

    // deleteBtn + Pop

    const deleteBtn = document.createElement("i");
    deleteBtn.style.cursor = "pointer";

    deleteBtn.classList.add("deleteIcon", "bi", "bi-x-square-fill");
    deleteBtn.addEventListener("click", function() {
      window.scrollTo(0, 0);
    });
    deleteBtn.addEventListener("click", function () {
      const popUpMainDiv = document.createElement("div");
      popUpMainDiv.classList.add("alertPop");
      const popUpTopBg = document.createElement("div");
      popUpTopBg.classList.add("topBar", "barText");
      popUpTopBg.innerText = `This Task Priority is  ${currentTask.priority}`;
      if (currentTask.priority === "High") {
        popUpTopBg.style.color = "red";
      }
      if (currentTask.priority === "Medium") {
        popUpTopBg.style.color = "coral";
      }
      if (currentTask.priority === "Low") {
        popUpTopBg.style.color = "green";
      }
      const popUpMessage = document.createElement("p");
      popUpMessage.classList.add("alertWriting");
      popUpMessage.innerText = "Are you sure you want delete?";
      const yesBtn = document.createElement("div");
      yesBtn.classList.add("yesBtn");
      yesBtn.innerText = "Yes";
      const noBtn = document.createElement("div");
      noBtn.classList.add("noBtn");
      noBtn.innerText = "No";
      deleteBtn.style.cursor = "not-allowed";

      popUpMainDiv.append(popUpTopBg, popUpMessage, yesBtn, noBtn);
      DOM.mainDiv.append(popUpMainDiv);

      // yesBtn and noBtn functionallity

      yesBtn.addEventListener("click", function () {
        const indexToDelete = myListOfTasks.findIndex(function (ct) {
          return currentTask.taskId === ct.taskId;
        });
        myListOfTasks.splice(indexToDelete, 1);
        localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
        console.log(myListOfTasks);
        draw(myListOfTasks);
        deleteBtn.style.cursor = "pointer";
        location.reload();// restarts page
          });
      noBtn.addEventListener("click", function () {
        DOM.mainDiv.removeChild(popUpMainDiv);
        deleteBtn.style.cursor = "pointer";
        location.reload();// restarts page
      });
    });

    // an if statement for the favIcon - if the array is not empty show a notificaton favIcon
    const topIcon = document.getElementById("headerIcon");
    if (myListOfTasks.length > 0) {
      topIcon.href = "/ProjectFebruary/images/notificaton.png";
    }

    // // Priority attachment

    const prioritySelected = document.createElement("div");
    switch (currentTask.priority) {
      case `Low`:
        const lowPriorImg = document.createElement("img");
        lowPriorImg.src = "images/important.png";
        lowPriorImg.classList.add("priorImg");
        prioritySelected.append(lowPriorImg);
        break;
      case `Medium`:
        const medPriorImg = document.createElement("img");
        medPriorImg.src = "images/somewhatImportant.png";
        medPriorImg.classList.add("priorImg");
        prioritySelected.append(medPriorImg);
        break;
      case `High`:
        const highPriorImg = document.createElement("img");
        highPriorImg.src = "images/veryImportant.png";
        highPriorImg.classList.add("priorImg");
        prioritySelected.append(highPriorImg);
        break;
    }
    // flying notes
    const flyingNote = document.createElement("div");
    flyingNote.classList.add("flyingNote");
    flyingNote.innerText = `This priority is - ${currentTask.priority}`;
    prioritySelected.addEventListener("mouseover", function () {
      newDiv.appendChild(flyingNote);
    });
    prioritySelected.addEventListener("mouseleave", function () {
      newDiv.removeChild(flyingNote);
    });
    textUl.append(textLi);
    dateAndTimeUl.append(dateLi, timeLi);
    firstContentDiv.append(textUl);
    secondContentDiv.append(dateAndTimeUl);
    newDiv.append(
      deleteBtn,
      firstContentDiv,
      secondContentDiv,
      prioritySelected
    );
    DOM.mainDiv.append(newDiv);
  }
}

function clearInputs() {
  const arrOfClass = Array.from(document.getElementsByClassName("myInput"));
  for (let index = 0; index < arrOfClass.length; index++) {
    arrOfClass[index].value = "";
  }
}

// function animatonCheck() {
//     const arrOfDiv = Array.from(document.getElementsByClassName("stickyNotes"))
//     console.log(arrOfDiv);
//     for (let index = 0; index < arrOfDiv.length; index++) {
//         const element = arrOfDiv[index];
//         // element.addEventListener("animationend", function () {
//         //     console.log("animaton is good for this div")

//         // })
//     }
// }
init();
