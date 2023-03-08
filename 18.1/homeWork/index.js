// (===) is used for value and type (most commonnly used)
// (==) only checks the value
// (=) is for defining a var
// ex 13
// function digCount() {
//     var num = parseInt(prompt(`enter a number `))//1666
//     var dig = parseInt(prompt(`enter a number TO DEVIDE`))//6

//     var counter = 0
//     var newNum
//     var counter = 1
//     while (num / 10 > 1) {
//         newNum = num % 10
//         num = parseInt(num / 10)
//         if (newNum === dig) { counter++ }
//     }
//     console.log(`The number of appearences is : ${counter}`);
// }
// digCount()

// Ex7 again


// var num = parseInt(prompt(`enter a number `))
// var max = num
// while (num > 0) {
//     num = parseInt(prompt(`enter a number `))
//     if (num > max) { max = num }
// }
// console.log(max)



// Ex 14
// function stringReverter() {
//     var initialInput = parseInt(prompt(`Enter a number`))//      1234 123 s=40 12
//     var rightCharExtract = 0
//     var revertStringContainer = 0
//     var theAnswer = 0
//     while (initialInput / 10 > 0) {
//         rightCharExtract = initialInput % 10 //4
//         revertStringContainer = (revertStringContainer + rightCharExtract) * 10 //0+4*10 43*10
//         initialInput = parseInt(initialInput / 10)
//         // theAnswer = theAnswer + revertStringContainer / 10


//     }
//     console.log(revertStringContainer / 10)
// }
// stringReverter()


// ex15
// function isPalindrome() {
//     var num = prompt("Enter a number:");
//     var reversedNum = num.toString().split('').reverse().join('');
//     if (num == reversedNum) {
//         console.log(num + " is a palindrome")
//     } else {
//         console.log(num + " is not a palindrome")
//     }
// }


// isPalindrome()

// var firstNum = +prompt("Enter a number:");
// var secondNum = +prompt("Enter another number:");
// var calc = prompt("Enter an action (+ / - *) that you would like to take on your numbers");
// switch (calc) {
//     case "+":
//         alert(`The result is: ${num1 + num2}`);
//         break;
//     case "-":
//         alert(`The result is: ${num1 - num2}`);
//         break;
//     case "*":
//         alert(`The result is: ${num1 * num2}`);
//         break;
//     case "/":
//         alert(`The result is: ${num1 / num2}`);
//     default:
//         alert(`We can not calculare these chosen actions yet`)
// }





// videoEx loops 1


// var num = parseInt(prompt(`Enter a number:`));
// var reciver = 0
// var newNum = 0
// while (num / 10 > 1) {
//     newNum = num % 10;

//     num = num / 10;

//     reciver = +(reciver + newNum)
// }
// console.log(reciver)




// videoEx loops 2

// var initialNum = parseInt(prompt(`Enter a number:`));
// var counter = 0
// while (counter < initialNum) {
//     if (initialNum % 1 !== 0 && initialNum % initialNum
//         !== 0) { alert(`this is the wrong  number`) }

//     counter++
// }
// if (initialNum % 1 === 0 && initialNum % initialNum === 0) { alert(`this is the right number`) }

// var arr = [] // array

// ///////////////////////////////////////////////////

// HomeWork Ex 4



// function firstNamePlusLastName() {
//     var firstName = prompt(`Enter your first name`)
//     var lastName = prompt(`Enter your last name`)
//     return `${firstName}  ${lastName}`


// }
// var nameCombinerEngine = firstNamePlusLastName()
// console.log(nameCombinerEngine)




// HomeWork Ex 4

// function restaurantCapacityDisplay() {
//     var totalCapacity = 600;
//     var totalTables = 30;
//     // var tableCounter = 1
//     var tableNum = +prompt(`Enter number of tables`)
//     var guestNum = +prompt(`Enter number of guests`)

//     if (tableNum > totalTables) { return `We dont have enough tables for that much people` }
//     else if (guestNum > totalCapacity) { return `We dont have space for that much people` }
//     else { return `The total cpacity is ${totalCapacity}` }

// }
// var totalCapacityDisplay = restaurantCapacityDisplay()
// console.log(totalCapacityDisplay)



// HomeWork Ex 5


// function cartPriceCalculator() {
//     var numberOfProducts = +prompt(`Please Enter the number of Products`)
//     var productPriceSum = 0
//     var productCount = 1
//     var products = []
//     while (productCount <= numberOfProducts) {
//         var productName = prompt(`Please Enter the name of Product: ${productCount} `)
//         products.push(productName)
//         var productPrice = +prompt(`Please Enter the Price of Product: ${productCount}`)
//         alert(`The name and the price of the product number ${productCount} is: ${productName} priced at: ${productPrice}`)
//         productPriceSum = productPriceSum + productPrice
//         productCount++
//         return `Recipt in console`

//     }
//     alert(`The total items in cart is: ${numberOfProducts} and the total amout is ${productPriceSum}`)

// }
// var cartRecipt = cartPriceCalculator()
// alert(cartRecipt)




////////////////////////////////////////////////////////////////////






// function movieList() {
//     var numberOfMonvies = +prompt(`Enter The Number of movies`)
//     var movieLibrary = []
//     // var movieCounter = 1
//     while (numberOfMonvies > 0) {
//         var nameOfMonvie = prompt(`Enter The Name Movie Number `)
//         movieLibrary.push(nameOfMonvie)
//         numberOfMonvies--
//     }
//     console.log(movieLibrary)
// }
// movieList()




//////////////////////////////////////////////////



// function sumFunction() {
//     var num = parseInt(prompt(`enter a number`))//1234
//     var newNum
//     var sum = 1
//     while (num / 10 >= 1) {
//         newNum = num % 10;//2
//         sum = sum + newNum;//9
//         num = parseInt(num / 10);//1
//     }
//     return sum;
// }



// function wholeNumberSumInArray() {
//     var submittedNum = parseInt(prompt(`Please Enter A Number`))
//     var submittedNumDigitSum = 0

//     while (submittedNum > 0) {
//         var originalNum = submittedNum

//         while (submittedNum > 0) {
//             submittedNumDigitSum = submittedNumDigitSum + (submittedNum % 10)
//             submittedNum = parseInt(submittedNum / 10)


//         }
//         console.log(`the original number is ${originalNum} and the sum of it is ${submittedNumDigitSum}`);

//     }
//     submittedNum = parseInt(prompt(`Please Enter A Number`))

// }
// wholeNumberSumInArray()

// Ex 3  page 29

// function theBiggerValue() {
//     var initialValue = parseInt(prompt(`enter a number`))
//     var biggestNum = initialValue
//     for (var i = 1; i < 10; i++) {
//         initialValue = parseInt(prompt(`enter a number`))
//         if (initialValue > biggestNum) { biggestNum = initialValue }

//     }
//     console.log(biggestNum)
// }
// theBiggerValue()

// function rangeValue() {
//     var initialValue = parseInt(prompt(`enter the first number`))
//     var secondValue = parseInt(prompt(`enter the last number`))
//     var totalRange = []
//     for (var i = (initialValue); i <= secondValue; i++) {
//         totalRange.push(i)
//     }
//     console.log(totalRange);
// }
// rangeValue()
 const maarah = []

for (let index = 0; index < 5; index++) {
    const someNum = prompt(`enter num`)
    maarah.push(someNum)
}
console.log(maarah);