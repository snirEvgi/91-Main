console.log("hi im working");
const DOM = {
  pName: null,
  pPrice: null,
  catagory: null,
  link: null,
  tableBody: null,
};
let productArr = [];
function init() {
  DOM.pName = document.querySelector("#pName");

  DOM.pPrice = document.querySelector("#pPrice");

  DOM.catagory = document.querySelector("#catagory");

  DOM.link = document.querySelector("#link");

  DOM.tableBody = document.querySelector("#idTable tbody");

  DOM.filter = document.querySelector("#filterBar");

  const addBtn = document.querySelector("#myButton");

  const clearTableBtn = document.querySelector("#myClearButton");

  addBtn.addEventListener(`click`, addNewProduct);

  clearTableBtn.addEventListener("click", clearTable);
}
function addNewProduct() {
  if (DOM.pName.value === "") {
    return alert("Please enter a Full Name of your product");
  }
  if (DOM.pPrice.value === "") {
    return alert("Please enter the correct Price of your product");
  }
  if (DOM.catagory.value === "") {
    return alert("Please enter the correct catagory of your product");
  }
  if (DOM.link.value === "Choose:" || DOM.link.value === "") {
    return alert("Please enter the correct link of your product");
  }
  productArr.push(
    new Product(
      DOM.pName.value,
      DOM.pPrice.value,
      DOM.catagory.value,
      DOM.link.value
    )
  );
  draw(productArr);
  //clear function for cleaning the inputs after ordering
  clearInputs();
}
function clearInputs() {
  //Works Fine
  // arr of inputs made by class
  const arrOfClass = Array.from(document.getElementsByClassName("myInput"));
  // console.log(arrOfClass);// check
  // for the arr length the input value = to empty string => reseted inputs
  for (let index = 0; index < arrOfClass.length; index++) {
    arrOfClass[index].value = "";
  }
}
function clearTable() {
  DOM.tableBody.innerHTML = "";
}
function draw(array) {
  if (Array.isArray(array) === false) return;
  clearTable();
  for (let index = 0; index < array.length; index++) {
    const currentProduct = array[index];

    const newTableRow = document.createElement("tr");

    const qRdata = document.createElement("td");
    qRdata.innerText = currentProduct.productQrNumber;

    const pNameData = document.createElement("td");
    pNameData.innerText = currentProduct.pName;

    const pPriceData = document.createElement("td");
    pPriceData.innerText = currentProduct.pPrice;

    const catagoryData = document.createElement("td");
    catagoryData.innerText = currentProduct.catagory;
    const linkData = document.createElement("td");
    const changingImg = document.createElement("img");
    changingImg.src = currentProduct.link;
    // changingImg.src = DOM.link.value;
    changingImg.height = 50;
    changingImg.width = 50;
    linkData.appendChild(changingImg);

    // delete btn
    const tdAction = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    // Fuctioinallity
    buttonDelete.addEventListener("click", function () {
      const indexToDelete = productArr.findIndex(function (cp) {
        return currentProduct.productQrNumber === cp.productQrNumber;
      });
      productArr.splice(indexToDelete, 1);
      console.log(productArr);
      draw(productArr);
    }); // deleting by the index

    tdAction.append(buttonDelete);
    newTableRow.append(
      qRdata,
      pNameData,
      pPriceData,
      catagoryData,
      linkData,
      tdAction
    );
    DOM.tableBody.append(newTableRow);
  } //end of draw for
} //end of draw

init();
