

const DOM = {
    name: null,
    price: null,
    guideName: null,
    startDate: null,
    endDate: null,
    coursesTableBody: null,
    filterBar: null,

    // first section of creating a dom that interact to the contructor

}

let courses = JSON.parse(localStorage.getItem("Courses")) || []; // declaring that courses [] will be a parse of the string that come from the ls that was created on the system

function init() {
    // declaring the origins of the dom propretys
    DOM.name = document.querySelector("#courseName")
    DOM.price = document.querySelector("#coursePrice")
    DOM.guideName = document.querySelector("#guideName")
    DOM.startDate = document.querySelector("#firstDate")
    DOM.endDate = document.querySelector("#lastDate")
    DOM.coursesTableBody = document.querySelector("#dynamicTable tbody")
    DOM.filterBar = document.querySelector("#filterBar")
    const addNewCourseBtn = document.querySelector("#myButton")
    const clearTable = document.querySelector("#myClearButton")
    // const fadeOut = () => {
    //     const loaderWrapper =
    //         document.querySelector(".wrapper")
    //     loaderWrapper.classList.add("fade")
    // }
    // window.addEventListener("load", fadeOut)

    window.onload = function () {
        draw(courses)
    }
    // adding event to input
    DOM.filterBar.addEventListener("input", function (event) {
        filterOrdersFn(event.target.value);
    });
    // adding clear table click event
    clearTable.addEventListener(`click`, clearTableFn);

    //add new order to the ui click event
    addNewCourseBtn.addEventListener(`click`, addNewOrder);

    // setting the array with the new object we get from the model (value adding)
    function addNewOrder() {
        courses.push(new Course(DOM.name.value, DOM.price.value,
            DOM.guideName.value, DOM.startDate.value, DOM.endDate.value));
        //setting it to the LS (LS recieves a string so we set it with stringify)
        localStorage.setItem("Courses", JSON.stringify(courses));
        //draw the new order
        draw(courses)
        //clear function for cleaning the inputs after ordering
        clearInputs()
    }
} // end of init (init function contains only the DOM settings and some eventts that contains funtions)






// FILTER FUNCTION

function filterOrdersFn(filterValue) {

    if (!filterValue) return draw(courses);// validation for filterVal if false return the draw
    //adding a filtering function on currentOrder and returning it if it icludes the filterValue (the input val)
    const filteredCourses = courses.filter(function (currentOrder) {
        return currentOrder.name.includes(filterValue);
    })
    //drawing to the ui ONLY the name including filtered courses
    draw(filteredCourses);
}


//CLEAR INPUTS

function clearInputs() {
    // arr of inputs made by class
    const arrOfClass = Array.from(document.getElementsByClassName("myInput"))
    // for the arr length the input value = to empty string => reseted inputs
    for (let index = 0; index < arrOfClass.length; index++) {
        arrOfClass[index].value = ""
    }


}

function clearTableFn() {
    // clearing thetable body 
    DOM.coursesTableBody.innerHTML = ""

};



// DRAW FUNCTION
function draw(coursesArray) {// function that draws an array
    if (Array.isArray(coursesArray) === false) return; //validation of array
    clearTableFn()//> dont know why here

    for (let index = 0; index < coursesArray.length; index++) {
        const currentOrder = coursesArray[index]

        const createTrow = document.createElement("tr") // a main row to contain data for the UI

        const tDataOrderId = document.createElement("td") //crating and inserting value
        tDataOrderId.innerText = currentOrder.courseNumber

        const tDataName = document.createElement("td")//crating and inserting value
        tDataName.innerText = currentOrder.name

        const tDataPrice = document.createElement("td")//crating and inserting value
        tDataPrice.innerText = currentOrder.price

        const tDataGuideName = document.createElement("td")//crating and inserting value
        tDataGuideName.innerText = currentOrder.guideName;


        const tDataStartDate = document.createElement("td");//crating and inserting value
        tDataStartDate.innerText = currentOrder.startDate

        const tDataEndDate = document.createElement("td");//crating and inserting value
        tDataEndDate.innerText = currentOrder.endDate
        //Delete btn
        const tdAction = document.createElement("td");//crating and inserting value to a btn
        const buttonDelete = document.createElement("button")
        buttonDelete.classList.add("btn", "btn-danger")
        buttonDelete.innerText = "X"
        buttonDelete.addEventListener("click", function () {
            const indexToDelete = courses.findIndex(function (co) {
                return currentOrder.courseNumber === co.courseNumber
            })
            courses.splice(indexToDelete, 1)
            localStorage.setItem("Courses", JSON.stringify(courses))
            filterOrdersFn(DOM.filterBar.value)

        });



        //edit btn
        const tdEditAction = document.createElement("td");
        const tdEditbtn = document.createElement("button");
        tdEditbtn.id = "editBtn"
        tdEditbtn.innerText = "Edit"
        // tdEditbtn.src = "images/editing.png"
        tdEditbtn.height = 20
        tdEditbtn.width = 20
        tdEditbtn.classList.add("btn", "btn-light")
        //Edit Btn Functionallity

        //  () here  <========== this go in
        tdEditAction.append(tdEditbtn)
        tdAction.append(buttonDelete)
        createTrow.append(tDataOrderId, tDataName, tDataPrice, tDataGuideName, tDataStartDate
            , tDataEndDate, tdAction, tdEditAction)
        //inserting the row to the DOM.tableBody
        DOM.coursesTableBody.append(createTrow)

    };// the for loop of draw - here is where all my yet to be elemnts will be declared


}




init()




