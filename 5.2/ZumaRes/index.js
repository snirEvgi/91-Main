let counter;
function init() {
    counter = 1;
}

init();
let newArr = [];
console.log(newArr);

// // object in JS
// // const order = { numOfSeats: 6, outside: false............ }

// // function constructor - model
// Onclick is an event


function Order(email, numberOfSeats, credit, allergens = [], comments = "no comment", outside = false, date, time) {
    this.orderNumber = `order_${counter++}`;
    this.email = email;
    this.numberOfSeats = +numberOfSeats;
    this.credit = credit;
    this.allergens = allergens;
    this.comments = comments;
    this.outside = outside;
    this.date = date;
    this.time = time;
}



// }
// instanced of the function constructor Order
// const order1 = new Order(`1`, `1`, `1`, '1', `4`, `4`, `3`);
// const order2 = new Order();
// const order3 = new Order();
// console.log(order1, order2, order3);

function orderReservasion() {


    // ///////////////////////////////////////

    function orderButton() {
        const orderBtn = document.getElementById("orderBtn")
        orderBtn.onclick = function () {
            const insertToThisDiv = document.getElementById("newContent")
            const table = document.getElementById("dynamicTable");
            const createTableRow = document.createElement("tr");
            createTableRow.classList.add("table", "myRow")

            table.append(createTableRow)
            insertToThisDiv.append(table)

            function updateValue() {


                const orderEmailInputV = document.getElementById("orderEmail").value
                const numberOfSeatsInputV = document.getElementById("numberOfSeats").value
                const nallergensInputV = document.getElementById("allergens").value
                const creditInputV = document.getElementById("credit").value
                const additionalCommentsInputV = document.getElementById("additionalComments").value
                const dateInputV = document.getElementById("date").value
                const outsideInputV = document.getElementById("outside").value
                const timeInputV = document.getElementById("time").value

                // const arrOfOrders = []

                // Order.email = orderEmailInputV;
                // Order.numberOfSeats = +numberOfSeatsInputV;
                // Order.credit = nallergensInputV;
                // Order.allergens = creditInputV;
                // Order.comments = additionalCommentsInputV;
                // Order.outside = dateInputV;
                // Order.date = outsideInputV;
                // Order.time = timeInputV;
                const newOrder = new Order(orderEmailInputV, numberOfSeatsInputV, creditInputV, nallergensInputV, additionalCommentsInputV, outsideInputV, dateInputV, timeInputV)
                // arrOfOrders.push(newOrder);
                newArr.push(newOrder);
                // console.log(arrOfOrders);
                // return arrOfOrders

            } updateValue()


            function orderReservasionInfo() {
                const orderEmailInput = document.getElementById("orderEmail")
                const numberOfSeatsInput = document.getElementById("numberOfSeats")
                const nallergensInput = document.getElementById("allergens")
                const creditInput = document.getElementById("credit")
                const additionalCommentsInput = document.getElementById("additionalComments")
                const dateInput = document.getElementById("date")
                const outsideInput = document.getElementById("outside")
                const timeInput = document.getElementById("time")


                const arrOfClass = Array.from(document.getElementsByClassName("inputClass"))


                const deleteBtn = document.createElement("button")
                deleteBtn.classList.add("btn", "btn-dark", "myBtn")
                deleteBtn.innerText = "Delete"
                deleteBtn.onclick = function () {
                    createTableRow.remove()
                }

                for (let index = 0; index < arrOfClass.length; index++) {
                    const tableInfo = document.createElement("td")
                    tableInfo.classList.add("newTd")
                    tableInfo.innerText = arrOfClass[index].value
                    createTableRow.append(tableInfo, deleteBtn)

                }
                // function Order(email, numberOfSeats, credit, allergens, comments, outside, date, time) {
                //     this.orderNumber = `order_${counter++}`;
                //     this.email = orderEmailInputV;
                //     this.numberOfSeats = +numberOfSeatsInputV;
                //     this.credit = creditInputV;
                //     this.allergens = nallergensInputV;
                //     this.comments = additionalCommentsInputV;
                //     this.outside = outsideInputV;
                //     this.date = dateInputV;
                //     this.time = timeInputV;
                // }

            }
            orderReservasionInfo()


            function deleteAll() {
                const arrOfClass = Array.from(document.getElementsByClassName("inputClass"))

                for (let index = 0; index < arrOfClass.length; index++) {
                    // arrOfClass[index].value = ""

                }
            } deleteAll()
            function clearBtn() {
                const deleteBtn = document.getElementById("deleteBtn")
                const arrOftd = Array.from(document.getElementsByClassName("myRow"))

                deleteBtn.onclick = function () {
                    for (let index = 0; index < arrOftd.length; index++) {
                        arrOftd[index].innerHTML = ""

                    }

                }
            } clearBtn()




        }
    } orderButton()
} orderReservasion()

