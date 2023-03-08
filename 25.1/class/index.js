// switch case


// function Ex4SwitchCase() {
//     // counters
//     let forCounter = 0
//     let againstCounter = 0
//     let abstainCounter = 0
//     let voteLostCounter = 0
//     // constants
//     const numberOfVoters = 8
//     const forString = "for"
//     const againstString = "against"
//     const abstainString = "abstain"


//     for (let index = 0; index < numberOfVoters; index++) {
//         let userVote = prompt(`Enter your choise`)
//         const userVoteToLower = userVote.toLowerCase()


//         if (isVeto(userVoteToLower)) {
//             console.log(`there is a veto vote : ${index}`)
//             return;
//         }
//         switch (userVoteToLower) {
//             case forString: {
//                 forCounter++;
//                 break
//             }

//             case againstString: {
//                 againstCounter++
//                 break
//             }

//             case abstainString: {
//                 abstainCounter++
//                 break
//             }

//             default: {
//                 voteLostCounter++
//             }

//         }
//     }
//     console.log(`number of votes is ${numberOfVoters} ,
//      vote ${forString}: ${forCounter} ,
//      vote ${againstString}: ${againstCounter} ,
//      vote ${abstainString}: ${abstainCounter} ,
//      vote error  ${voteLostCounter} `)
// }

// // Ex4SwitchCase()

// function isVeto(v) {
//     if (v === "veto") {
//         return true;
//     } else {
//         return false;
//     }
// }

// // class exercise

// function cartCalculator() {
//     // products price list
//     let productPriceOne = 4
//     let productPriceTwo = 3
//     let productPriceThree = 2
//     let productPriceFour = 5
//     let productPriceFive = 1
//     let defaultPrice = 10


//     const products = []

//     // sum
//     let priceTotal = 0

//     // products

//     let productOne = `apple`
//     let productTwo = `orange`
//     let productThree = `milk`
//     let productFour = `bread`
//     let productFive = `tomato`

//     const numberOfVoters = parseInt(prompt(`Enter the number of products`))


//     for (let index = 0; index < numberOfVoters; index++) {
//         let currentProduct = prompt(`Enter the name of the product`)
//         const currentProductLowerCase = currentProduct.toLowerCase()

//         switch (currentProductLowerCase) {
//             case productOne: {
//                 priceTotal += productPriceOne
//                 products.push(currentProductLowerCase)
//                 break
//             }

//             case productTwo: {
//                 priceTotal += productPriceTwo
//                 products.push(currentProductLowerCase)
//                 break
//             }

//             case productThree: {
//                 priceTotal += productPriceThree
//                 products.push(currentProductLowerCase)
//                 break
//             }
//             case productFour: {
//                 priceTotal += productPriceFour
//                 products.push(currentProductLowerCase)
//                 break
//             }
//             case productFive: {
//                 priceTotal += productPriceFive
//                 products.push(currentProductLowerCase)
//                 break
//             }

//             default: {
//                 console.log(`You have been charged with default value for this product ${defaultPrice} `);
//                 priceTotal += defaultPrice
//             }

//         }

//     }


// console.log(` The total amount of the cart is: ${priceTotal}  for these products ${products.join(" & ")}`);

// }
// cartCalculator()


// ///////////////////////////////////////////////////////////////


// function findTheHighest() {


//     const numbers = [1, 2, 55, 4, 6, 7787, 3, 4, 5, 2, 33, 4]
//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] === 7787) { alert(`the highest number is ${numbers[index]}`) }
//     }



// } findTheHighest()

// ///////////////////////////////////////////////////////////////


// function numOfValinArray() {
//     const numbers = ['oranges', 'grapefruits', 'grapefruits', 'mandarins', 'bananas', 'bananas']
//     const relevantFruit = 'grapefruits'
//     let counter = 0

//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index].includes(relevantFruit)) {
//             counter++
//         }
//     }

//     alert(`the number of shows the ${relevantFruit} have is ${counter}`)

// } numOfValinArray()


// ///////////////////////////////////////////////////////////////


// function discount20Fo() {
//     const prices = [32, 42, 22, 33, 231, 44]
//     const discount = 0.8
//     let afterDiscountPrice = []
//     for (let index = 0; index < prices.length; index++) {

//         let priceChange = prices[index]
//         priceChange = priceChange * discount
//         afterDiscountPrice.push(priceChange)
//     }
//     alert(afterDiscountPrice)

// } discount20Fo()

// //////////////////////////
//  Array  //
// [][][] //

// concat: combines two or more arrays into a single array
// join: joins all elements of an array into a string
// pop: removes the last element of an array
// push: adds one or more elements to the end of an array
// shift: removes the first element of an array
// unshift: adds one or more elements to the beginning of an array
// slice: extracts a portion of an array into a new array
// sort: sorts the elements of an array in place


// function doubleArray() {
//     const prices = [[32, 42, 22, 33, 231, 44], []]
//     let sum = 0
//     let contain = 0
//     for (let index = 0; index < prices[0].length; index++) {
//         contain = prices[0][index]
//         sum = (contain / 2)
//         prices[1].push(sum)
//     }
//     console.log(prices);
// } doubleArray()


