const DOM = {
    fName: null,
    lName: null,
    bDate: null,
    city: null,
    tableBody: null,
    filer: null
}
let idArr = JSON.parse(localStorage.getItem("Identification")) || [];

function init() {
    DOM.fName = document.querySelector("#fName")
    DOM.lName = document.querySelector("#lName")
    DOM.bDate = document.querySelector("#date")
    DOM.city = document.querySelector("#city")
    DOM.tableBody = document.querySelector("#idTable tbody")
    const addBtn = document.querySelector("#myButton")



    addBtn.addEventListener(`click`, function () {
        idArr.push(new Identification(DOM.fName.value, DOM.lName.value, DOM.bDate.value, DOM.city.value))
        localStorage.setItem("Identification", JSON.stringify(idArr));
        draw(idArr)

    })

    window.onload = function () {
        draw(idArr)
    }
}
function draw(arr) {
    if (Array.isArray(arr) === false) return;
    for (let index = 0; index < arr.length; index++) {
        const currentId = arr[index]
        const newTableRow = document.createElement("tr")


        const fnameData = document.createElement("td")
        fnameData.innerText = currentId.fName
        const lnameData = document.createElement("td")
        lnameData.innerText = currentId.lName
        const bDayData = document.createElement("td")
        bDayData.innerText = currentId.bDate
        const cityData = document.createElement("td")
        cityData.innerText = currentId.city
        const idData = document.createElement("td")
        idData.innerText = currentId.idNumber

        const tdAction = document.createElement("td")
        const buttonDelete = document.createElement("button")
        buttonDelete.classList.add("btn", "btn-danger")
        buttonDelete.innerText = "X"


        tdAction.append(buttonDelete)
        newTableRow.append(fnameData, lnameData, bDayData, cityData, cityData, idData, tdAction)
        DOM.tableBody.append(newTableRow)
    }
} init()
