// function findTheHighest() {


//     const numbers = [1, 2, 55, 4, 6, 7787, 3, 4, 5, 2, 33, 4]
//     let max = 0
//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] > max) {
//             max = numbers[index]

//         }

//     }
//     alert(`the highest number is ${max}`)


// } findTheHighest()

// // ///////////////////////////////////////////////////////////////


// function numOfValinArray() {
//     const products = ['oranges', 'grapefruits', 'grapefruits', 'mandarins', 'bananas', 'bananas']
//     const relevantFruit = 'grapefruits'
//     let counter = 0

//     for (let index = 0; index < products.length; index++) {
//         if (products[index].includes(relevantFruit)) {
//             counter++
//         }
//     }

//     alert(`the number of shows the ${relevantFruit} have is ${counter}`)

// } numOfValinArray()


// ///////////////////////////////////////////////////////////////


// function discount20Fo(arrayOfPrices, discount) {

//     if (Array.isArray(arrayOfPrices) !== true) { return ` please insert an array` }

//     if (typeof discount !== "number") { return `please insert a number` }

//     let afterDiscountPrice = []

//     for (let index = 0; index < arrayOfPrices.length; index++) {

//         let priceChange = arrayOfPrices[index]
//         priceChange = priceChange * discount
//         afterDiscountPrice.push(priceChange.toFixed(1))
//     }
//     return `    The array after discount:

//     ${afterDiscountPrice}`

// }




// const prices = [32, 42, 22, 33, 231, 44]
// let discount = 0.8
// let result = discount20Fo(prices, discount)
// console.log(result)








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

// if > Array.isArray(p) === Term is a way to give a condition to array
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
//     console.log(prices[1].length);
//     console.log(prices[0].length);
// } doubleArray()







// function getPriceByProduct(product) {


//     if (typeof product !== "string") {
//         return `please enter a name of a product
//          hint: it contains only letters`
//         //  else if{ product == }
//     }

//     switch (product.toLowerCase()) {
//         case "apple": {
//             return 4;
//         }
//         case "bread": {
//         }
//             return 3;
//         case "tomato": {
//             return 2;
//         }
//         case "orange": {
//             return 2;
//         }
//         default: {
//             return 10;
//         }
//     }


// }

// let productName = parseInt(prompt(`enter the name of product`))
// let endResult = getPriceByProduct(productName)
// console.log(endResult)

// const milkBottle = {
//     shape: "Rectangle",
//     price: 5.2,
//     catagories: ["drinks", "Dairy", "Kosher"],
//     expirationDate: "2023-02-06",

// }

// console.log(milkBottle)

// // access properties

// console.log(milkBottle.expirationDate) // shows expi date
// console.log(milkBottle["shape"]) // shows the used for a dynamic uses (for asking from user (example : prompt)) also can be used with variables whitin the []

// //  modify your object 
// milkBottle.price *= 2
// console.log(milkBottle)




// const usersIdification = {
//     userList: {
//         snirEvgi: {
//             privateName: "Snir Evgi",
//             gender: "Male",
//             diet: "Carnivour",
//             age: 22,
//             job: "QA & Implementation, Depoint",
//             weight: 75,
//             height: 174,
//             favoriteFood: ["Hamburger", "Pizza", "Pasta"],
//             address: {
//                 street: "Dvora Hanevia",
//                 houseNumber: "9",
//                 city: "Gan Yavne",
//                 state: "Israel",
//                 zipCode: 7080000,
//                 loacation: "South - Center",
//             },



//         },

//     },
//     hiGreeting: function () {
//         console.log(`Hi how you doin my name is ` + usersIdification.userList.snirEvgi.privateName)

//     },
// }

// console.log(usersIdification);
// usersIdification.hiGreeting()


// you can refer in function to a var in the object with "this"


// //////////////////////////////////////////////////////////////////
// let movieList = {
// }

function moviesListing() {
    totalOfMovies = []
    const numOfMovies = parseInt(prompt("Please Enter Number of Movies"))
    if (typeof numOfMovies !== "number") return "Please Enter a Number";// validation

    for (let index = 0; index < numOfMovies; index++) {
        const movieName = prompt("Please Enter movie name")
        const movieRating = parseInt(prompt("Please Enter your rating"))
        if (typeof movieRating !== "number") return "Please Enter a Number"; // validation

        let movieList = {
            mName: movieName,
            mRating: movieRating,
            setRating: function (num) {
                this.mRating = num
            }

        }
        if (movieList.mRating > 7 || movieList.mRating < 0) {
            return "Please enter a rating  between 0 to 7"
        }
        totalOfMovies.push(movieList)
    }

    // console.log(totalOfMovies)
    return totalOfMovies
}
const resultExOne = moviesListing()
console.log(resultExOne)

// function getHighRatingMovies(arrayOfMovies, minRating) {
//     if (typeof minRating !== "number") return "Please Enter a Number";// validation
//     if (!Array.isArray(arrayOfMovies)) return"Please Enter an Array";// validation

//     let topRated = []


//     for (let index = 0; index < arrayOfMovies.length; index++) {
//         if (arrayOfMovies[index].mRating > minRating) {
//             topRated.push(arrayOfMovies[index])




//         }

//     } return topRated

// }

// const minRating = +prompt(`enter the minimum of the rating`)
// const resultExTwo = getHighRatingMovies(totalOfMovies, minRating)
// console.log(resultExTwo)




// function addToFavorites(arrayOfMovies) {

//     const favMovieArr = []
//     for (let index = 0; index < arrayOfMovies.length; index++) {
//         let favMovie = prompt(`Do you wish to add the movie:
//         ${arrayOfMovies[index].mName} to your favorites (Type yes/no)`)


//         if (favMovie === "yes") {
//             favMovieArr.push(arrayOfMovies[index].mName)
//         }
//         // console.log(favMovieArr)

//     }


//     return favMovieArr
// }
// const resultFav = addToFavorites(totalOfMovies)
// console.log(resultFav);




// function removeFromFav(arrayOfFavMovies) {
//     if (!Array.isArray(arrayOfFavMovies)) return;

//     for (let index = 0; index < arrayOfFavMovies.length; index++) {
//         let deleteThis = prompt(`Enter the name of the movie you would like to remove`)
//         if (arrayOfFavMovies[index].mName === deleteThis) {
//             arrayOfFavMovies.splice(index, 1)
//             // index--
//             console.log(`The movie deleted succesfully`)
//             console.log(arrayOfFavMovies)
//         }

//     }
//     return arrayOfFavMovies

// }
// const resultRemove = removeFromFav(totalOfMovies)
// console.log(resultRemove);

function ratingChange(arrayOfMovies) {
    for (let index = 0; index < arrayOfMovies.length; index++) {


        arrayOfMovies[index].mRating = parseInt(prompt(`Enter new rating for  ${arrayOfMovies[index].mName}`))

        if (typeof arrayOfMovies[index].mRating !== "number") return;// validation

        if (!Array.isArray(arrayOfMovies)) return; // validation

        if (arrayOfMovies[index].mRating > 7 || arrayOfMovies[index].mRating < 0) {// validation

            return "Please enter a rating  between 0 to 7"
        }
    }

    return arrayOfMovies


}
const resultFive = ratingChange(totalOfMovies)

console.log(resultFive);