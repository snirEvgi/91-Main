// (===) is used for value and type (most commonnly used)
// (==) only checks the value
// (=) is for defining a var


// function digitSum() {
//     let digitNumSum = parseInt(prompt(`enter a number`))
//     let sum = 0
//     while (digitNumSum > 1) {
//         sum += digitNumSum % 10;
//         sum = parseInt(sum)
//         digitNumSum = (digitNumSum / 10);
//     }
//     console.log(sum);
// }
// digitSum()
// 15 (1 + 2 + 3 + 4 + 5)
// class work ex 2

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



// ///////////////////////////////////////////////////////////////////////////


// Page 29 Ex 5 Or Ex 6

function acceptOnlyWholeNumbers() {
    let firstNum = 1
    let secondNum = 1
    let fibonArr = []
    let fibon
    while (i != 0) {
        let i = parseInt(prompt(`Enter a number`))

    }
}






















////////////////////////////////////////////////////////////////////////////////

//Page 31 EX 2

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

// //////////////////////////////////////////////////////////////



//Page 31 EX 3

// function factorialFunction() {

//     let num = parseInt(prompt(`Enter a number`))
//     let numA = 1
//     for (let i = 1; i <= num; i++) {
//         numA *= i

//     }

//     console.log(`${numA} Is the final number after factorial`)
// }
// factorialFunction()

// //////////////////////////////////////////////////////////////

// Page 31 Ex 4
// function divisibleByThree() {
//     let num = parseInt(prompt(`Enter a number`))
//     let result = [];
//     let resultSum;
//     for (let i = 1; i <= num; i++) {

//         //     result.push(i);

//         if (i % 3 === 0) {
//             result = i;
//             resultSum = (result + i)
//         }

//     }
//     // console.log(result);
//     console.log(resultSum);


// }
// divisibleByThree()


// // /////////////////////////////////////////////////////////////////////



//  Page 31 Ex 5
// function JumpByThree() {
//     let resultSum = 0;
//     for (let i = 1; i <= 9; i++) {

//         num = parseInt(prompt(`Enter a number`))
//         console.log("this is the number you entered: " + num)
//         if (i % 3 === 0) { resultSum += num }
//         console.log(resultSum)
//     }

//     // console.log(result);
//     console.log("the final sum is: " + resultSum);

// }

// JumpByThree()


// //////////////////////////////////////////////////////////////////////




//  Page 31 Ex 6


// function numberFactorItself() {
//     let num = parseInt(prompt(`Enter a number`))
//     let numSum = 0
//     for (let i = 0; i <= num; i++) {
//         numSum = numSum + (2 ** i)

//     }

//     console.log(`${numSum} Is the final number after factorial`)
// } numberFactorItself()


// /////////////////////////////////////////////////////////////////////////////


//  Page 31 Ex 7

// function arrayAndArraymultiplyByTwo() {
//     let num = parseInt(prompt(`Enter a number`))
//     let result = [];
//     let resultByTwo = [];
//     let iterationAnswer = 0;
//     for (let i = 1; i <= num; i++) {
//         result.push(i);
//         iterationAnswer = Number(i * 2);
//         resultByTwo.push(iterationAnswer);
//     }
//     // console.log(result);
//     console.log(result);
//     console.log(resultByTwo);

// } arrayAndArraymultiplyByTwo()



// /////////////////////////////////////////////////////////////////////////////


// //  Page 31 Ex 8
// function divisibleByThreeAndSeven() {
//     let num = parseInt(prompt(`Enter a number`))
//     let resultSum = 0;
//     let arr = [];
//     let number;

//     for (let i = 1; i <= num; i++) {



//         if (i % 4 === 0 || i % 7 === 0) {

//             resultSum = resultSum + i
//             number = i
//             arr.push(number)
//         }

//     }
//     // console.log(result);
//     console.log(resultSum);
//     console.log(arr);



// }
// divisibleByThreeAndSeven()


// ////////////////////////////////////////////////////////////////////


// page 32 Ex 9

// function numberSkippingBy() {
//     let y = []
//     for (let i = 5; i < 13; i += 2) {

//         num = i ** 2 + 5
//         y.push(num)
//     }
//     console.log(y)
// } numberSkippingBy()



// /////////////////////////////////////////////////////////////////

// Ex 10
// this function will jump by minus two on that number they have putted (let i = 15) and it will reach -10 buy the jusmps of minus two


/////////////////////////////////////////////////////////////////

// page 32 ex 11
// function forwardAndReverse() {
//     let initialValue = parseInt(prompt(`enter the first number`))
//     let secondValue = parseInt(prompt(`enter the last number`))
//     let totalRange = []
//     let counter = []
//     let final = []
//     for (let i = (initialValue); i <= secondValue; i++) {
//         totalRange.push(i);
//     }
//     for (let index = (secondValue); index >= initialValue; index--) {
//         counter.push(index);
//     }
//     final.push(totalRange, counter)

//     // console.log(totalRange);
//     console.log(final);
//     // console.log(totalRange.reverse());
// } forwardAndReverse()


// // /////////////////////////////////////////////////////////////////////



//  Page 32 Ex 12



// function dividedByTwo() {
//     let resultSum = 0;
//     for (let i = 0; i <= 9; i++) {
//         num = parseInt(prompt(`Enter a number`));
//         console.log("this is the number you entered: " + num)
//         if (num % 2 === 0) { resultSum = resultSum + num };
//         console.log(resultSum)
//     }

//     // console.log(result);
//     console.log("the final sum is: " + resultSum);

// }

// dividedByTwo()



// // /////////////////////////////////////////////////////////////////////



//  Page 32 Ex 13


// function evenSerialNumber() {
//     let resultSum = 0;
//     for (let i = 1; i <= 10; i++) {
//         num = parseInt(prompt(`Enter a number`));

//         if (i % 2 === 0) { console.log("the serial number is: " + i + " this is the number you have entered: " + num) };

//     }

// }

// evenSerialNumber()