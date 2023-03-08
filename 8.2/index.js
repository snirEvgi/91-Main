

const DOM = {
    emailInput: null,
    numberOfSits: null,
    allergies: null,
    credit: null,
    comments: null,
    outside: null,
    date: null,
    time: null,
    ordersTableBody: null


}
let order = []
let allergArr = []
function init() {
    // const order = new Order("snirevg@gmail.com,", 5, 3242343243342, ["Penuts"], "i would like to sit next to Bebber", new Date().toString(), new Date().toString(), true)
    // console.log(order);
    DOM.emailInput = document.querySelector("#orderEmail")
    DOM.numberOfSits = document.querySelector("#numberOfSeats")
    DOM.allergies = document.querySelector("#allergens")
    DOM.credit = document.querySelector("#credit")
    // DOM.credit = //document.querySelector("#credit")
    DOM.comments = document.querySelector("#additionalComments")
    DOM.outside = document.querySelector("#outside")
    DOM.date = document.querySelector("#date")
    DOM.time = document.querySelector("#numberOfSeats")
    DOM.ordersTableBody = document.querySelector("#ordersTable tbody") // insertion point
    // DOM.ordersTableRow = document.querySelector("#ordersTable tr") // insertion point

    const addNewOrderBtn = document.querySelector("#myButton")
    // console.log(myButton);
    const clearTable = document.querySelector("#myClearButton")
    clearTable.addEventListener(`click`, clearTableFn)

    addNewOrderBtn.addEventListener(`click`, addNewOrder);
    function addNewOrder(e) {

        // console.log(DOM.emailInput.value)
        // console.log(DOM.numberOfSits.value)
        order.push(new Order(DOM.emailInput.value, DOM.numberOfSits.value, DOM.allergies.value, DOM.credit.value, DOM.comments.value, DOM.outside.value, DOM.date.value, DOM.time.value));
        console.log(order)
        draw(order)


    }
    function clearTableFn() {

        DOM.ordersTableBody.innerHTML = ""



    };
    function draw(ordersArray) {
        if (Array.isArray(ordersArray) === false) return; //validation
        clearTableFn()

        for (let index = 0; index < ordersArray.length; index++) {
            const currentOrder = ordersArray[index]
            const createTrow = document.createElement("tr")

            const tDataOrderId = document.createElement("td")
            tDataOrderId.innerText = currentOrder.orderNumber

            const tDataEmail = document.createElement("td")
            tDataEmail.innerText = currentOrder.email

            const tDataNumOfSits = getNumberOfSeatsTD(currentOrder.numberOfSeats)
            // tDataNumOfSits.innerText = currentOrder.numberOfSits

            // const tDataAllergies = document.createElement("td")
            // tDataAllergies.innerText = currentOrder.allergies
            const tDataAllergies = allergiIcon(currentOrder.allergies);



            const tDataCredit = document.createElement("td");
            tDataCredit.innerText = currentOrder.credit;

            const tDataComments = document.createElement("td");
            tDataComments.innerText = currentOrder.comments

            const tDataOutside = document.createElement("td");
            tDataOutside.innerText = currentOrder.outside

            const tDataDate = document.createElement("td");
            tDataDate.innerText = currentOrder.date

            const tDataTime = document.createElement("td");
            tDataTime.innerText = currentOrder.time

            const tdAction = document.createElement("td");
            const tdEditAction = document.createElement("td");
            const tdEditbtn = document.createElement("img");
            tdEditbtn.id = "editBtn"
            tdEditbtn.innerText = "Edit"
            tdEditbtn.src = "images/editing.png"
            tdEditbtn.height = 20
            tdEditbtn.width = 20
            tdEditbtn.classList.add("btn", "btn-light")

            // edit btn


            // tdEditbtn.addEventListener('click', function () {
            //     if (tdEditbtn.innerText === "Edit") {
            //         tdEditbtn.innerText = "Save"
            //         tDataEmail.contentEditable = true
            //         tDataNumOfSits.contentEditable = true
            //         tDataAllergies.contentEditable = true
            //         tDataCredit.contentEditable = true
            //         tDataComments.contentEditable = true
            //         tDataOutside.contentEditable = true

            //     } else {
            //         tdEditAction.src = "Edit"
            //         tDataEmail.contentEditable = false
            //         tDataNumOfSits.contentEditable = false
            //         tDataAllergies.contentEditable = false
            //         tDataCredit.contentEditable = false
            //         tDataComments.contentEditable = false
            //         tDataOutside.contentEditable = false

            //     }



            // })










            const buttonDelete = document.createElement("button")
            buttonDelete.classList.add("btn", "btn-danger")
            buttonDelete.innerText = "X"
            tdAction.append(buttonDelete)
            tdEditAction.append(tdEditbtn)
            createTrow.append(tDataOrderId, tDataEmail, tDataNumOfSits, tDataAllergies, tDataCredit
                , tDataComments, tDataOutside, tdAction, tdEditAction)
            DOM.ordersTableBody.append(createTrow)


            buttonDelete.addEventListener("click", function () {
                const idToDelete = currentOrder.orderNumber
                for (let index = 0; index < order.length; index++) {
                    if (order[index].orderNumber === idToDelete) {
                        order.splice(index, 1)
                    }


                }
                // order.splice(index, 1)
                console.log(order);
                draw(order)
            })


            function getNumberOfSeatsTD(numberOfSeats) {
                if (typeof numberOfSeats !== "number") return;
                const numberOfSeatsTd = document.createElement("td");
                for (let index = 0; index < numberOfSeats; index++) {
                    const person = document.createElement("i");
                    person.className = "bi-person";
                    numberOfSeatsTd.append(person);
                }
                numberOfSeatsTd.append(`(${numberOfSeats})`);
                return numberOfSeatsTd;
            }
            function allergiIcon(allerg) {
                const anotherTableDataForAllleries = document.createElement("td") // DT create
                const myOptionsElemnt = document.getElementById("allergens")



                switch (allerg) {
                    case `Eggs`:
                        const eggs = document.createElement("img");
                        eggs.src = "images/egg.png";
                        eggs.height = 20;
                        eggs.width = 20;
                        eggs.classList.add("myIcons")
                        anotherTableDataForAllleries.append(eggs);
                        anotherTableDataForAllleries.append(`(${myOptionsElemnt.value})`)
                        return anotherTableDataForAllleries
                    case `Gluten`:
                        const gluten = document.createElement("img");
                        gluten.src = "images/wheat.png";
                        gluten.height = 20;
                        gluten.width = 20;
                        gluten.classList.add("myIcons")
                        anotherTableDataForAllleries.append(gluten);
                        anotherTableDataForAllleries.append(`(${myOptionsElemnt.value})`)
                        return anotherTableDataForAllleries
                    case `Milk`:
                        const milk = document.createElement("img");
                        milk.src = "images/milk-bottle.png";
                        milk.height = 20;
                        milk.width = 20;
                        milk.classList.add("myIcons")
                        anotherTableDataForAllleries.append(milk);
                        anotherTableDataForAllleries.append(`(${myOptionsElemnt.value})`)
                        return anotherTableDataForAllleries
                    case `Nuts`:
                        const nuts = document.createElement("img");
                        nuts.src = "images/peanut.png";
                        nuts.height = 20;
                        nuts.width = 20;
                        nuts.classList.add("myIcons")
                        anotherTableDataForAllleries.append(nuts);
                        anotherTableDataForAllleries.append(`(${myOptionsElemnt.value})`)
                        return anotherTableDataForAllleries
                    case `Almond`:
                        const almond = document.createElement("img");
                        almond.src = "images/almond.png";
                        almond.height = 20;
                        almond.width = 20;
                        almond.classList.add("myIcons")
                        anotherTableDataForAllleries.append(almond);
                        anotherTableDataForAllleries.append(`(${myOptionsElemnt.value})`)
                        return anotherTableDataForAllleries


                    default: console.log("Somethings Wrong");


                }


                // function selecOptions() {

                //     const selectElement = document.querySelector("#allergens");
                //     const myOptions = selectElement.options;

                //     for (let index = 0; index < myOptions.length; index++) {
                //         if (myOptions[index].selected) {
                //             allergArr.push(myOptions[index].value);
                //         }



                //     }
                //     console.log(allergArr);
                //     return allergArr
                // } selecOptions()













            }








        }





    }
}
init()

//