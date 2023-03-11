const DOM = {
  taskDescription: null,
  date: null,
  time: null,
  mainDiv: null,
  priority: null,
};
const myListOfTasks = JSON.parse(localStorage.getItem("TaskList")) || [];

const arrOfInputs = Array.from(document.getElementsByClassName("myInput")); //used for clearing the inputs after every draw
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
  clearTasksButton.addEventListener("click", function () {
    location.reload(); // restarts page
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
  clearInputs(arrOfInputs);
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

    dateLi.innerText = currentTask.date.replace(
      /(\d{4})-(\d\d)-(\d\d)/,
      "$3-$2-$1"
    ); // regex - characters that forms a search pattern. It is used to match and manipulate text based on a defined pattern.

    const timeLi = document.createElement("li");
    timeLi.innerText = currentTask.time;

    // deleteBtn + Pop

    const deleteBtn = document.createElement("i");
    deleteBtn.style.cursor = "pointer";

    deleteBtn.classList.add("deleteIcon", "bi", "bi-x-square-fill");
    deleteBtn.addEventListener("click", function () {
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
        location.reload(); // restarts page
      });
      noBtn.addEventListener("click", function () {
        DOM.mainDiv.removeChild(popUpMainDiv);
        deleteBtn.style.cursor = "pointer";
      });
    });

    const topIcon = document.getElementById("headerIcon");
    const notIconlink = "/ProjectFebruary/images/notificaton.png";
    favIconSwap(myListOfTasks, topIcon, notIconlink);
    // // Priority attachment fn

    const prioritySelected = document.createElement("div");
    prioritySwitchFn(currentTask, prioritySelected);

    // flying notes fn

    flyingNote(currentTask, prioritySelected, newDiv);

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
function deleteOnUiFn(dBn, ct) {
  dBn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
  dBn.addEventListener("click", function () {
    const popUpMainDiv = document.createElement("div");
    popUpMainDiv.classList.add("alertPop");
    const popUpTopBg = document.createElement("div");
    popUpTopBg.classList.add("topBar", "barText");
    popUpTopBg.innerText = `This Task Priority is  ${ct.priority}`;
    if (ct.priority === "High") {
      popUpTopBg.style.color = "red";
    }
    if (ct.priority === "Medium") {
      popUpTopBg.style.color = "coral";
    }
    if (ct.priority === "Low") {
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
    dBn.style.cursor = "not-allowed";
    // appending
    popUpMainDiv.append(popUpTopBg, popUpMessage, yesBtn, noBtn);
    DOM.mainDiv.append(popUpMainDiv);
    // yesBtn and noBtn functionallity
    yesBtn.addEventListener("click", function () {
      const indexToDelete = myListOfTasks.findIndex(function (ctd) {
        return ct.taskId === ctd.taskId;
      });
      myListOfTasks.splice(indexToDelete, 1);
      localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
      console.log(myListOfTasks);
      draw(myListOfTasks);
      dBn.style.cursor = "pointer";
      location.reload(); // restarts page
    });
    noBtn.addEventListener("click", function () {
      DOM.mainDiv.removeChild(popUpMainDiv);
      dBn.style.cursor = "pointer";
    });
  });
}
function deleteTasks() {
  myListOfTasks.splice(0);
  location.reload();
  window.localStorage.setItem("TaskList", JSON.stringify(myListOfTasks));
  draw(myListOfTasks);
}
function clearInputs(arr) {
  for (let index = 0; index < arrOfClass.length; index++) {
    arrOfClass[index].value = "";
  }
}
function clearUl() {
  DOM.mainDiv.innerHTML = "";
}
function flyingNote(ctp, ps, div) {
  const flyingNote = document.createElement("div");
  flyingNote.classList.add("flyingNote");
  flyingNote.innerText = `This priority is - ${ctp.priority}`;
  ps.addEventListener("mouseover", function () {
    div.appendChild(flyingNote);
  });
  ps.addEventListener("mouseleave", function () {
    div.removeChild(flyingNote);
  });
}
function prioritySwitchFn(ctp, div) {
  switch (ctp.priority) {
    case `Low`:
      const lowPriorImg = document.createElement("img");
      lowPriorImg.src = "images/important.png";
      lowPriorImg.classList.add("priorImg");
      div.append(lowPriorImg);
      break;
    case `Medium`:
      const medPriorImg = document.createElement("img");
      medPriorImg.src = "images/somewhatImportant.png";
      medPriorImg.classList.add("priorImg");
      div.append(medPriorImg);
      break;
    case `High`:
      const highPriorImg = document.createElement("img");
      highPriorImg.src = "images/veryImportant.png";
      highPriorImg.classList.add("priorImg");
      div.append(highPriorImg);
      break;
  }
}
function favIconSwap(arr, icon, link) {
  // an if statement for the favIcon - if the array is not empty show a notificaton favIcon
  if (arr.length > 0) {
    icon.href = link;
  }
}
// a litle try of making a loader with jQuery
function jQueryLoad() {
  $(window).on("load", function () {
    $(".loaderContainer").fadeOut(1000); // time in miliseconds
  });
}
jQueryLoad();
init();
