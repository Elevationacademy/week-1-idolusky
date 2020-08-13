// const tellJoke = function () {
//     console.log("something funny")
// }
// tellJoke()

// const sayHello = function (name) {
//     console.log("hi " + name)
// }
// sayHello("Ido")

// const aba = "oded"
// sayHello(aba)

// let names = ["Danny", "yoni", "ben", "dror"]

// for (let name of names) {
//     sayHello(name)
// }

// const greet = function (name, timeOfDay) {
//     console.log(`good ${timeOfDay} ${name}`)
// }
// greet("ido", "morning")
// greet("danny", "afternoon")

// const createUser = function (name, age) {
//     const user = { name: name, age: age }
//     console.log(user)
// }
// createUser("Ido", 30)

// const growOld = function (user) {
//     user.age++
// }
// const aDude = { name: "Shay", age: 24 }
// growOld(aDude)
// console.log(aDude)

// const findSmallest = function (numbers) {
//     let smallest = numbers[0]

//     for (let num of numbers) {
//         if (num < smallest) {
//             smallest = num
//         }
//     }

//     return smallest
// }

// const ages = [17, 21, 9, 34]
// const youngest = findSmallest(ages)
// console.log(youngest)



// const getInterest = function (money) {
//     return money * 0.2
// }

// const getDebt = function (money) {
//     const interest = getInterest(money)
//     return money + interest
// }

// const borrowedMoney = 100
// const debt = getDebt(borrowedMoney)
// console.log(debt) // prints 120

// const person = {
//     name: "Julius",
//     speak: function (food) {
//         console.log("I like " + food)
//     }
// }
// console.log(person.name)
// person.speak("cheese toast")





// exercise 1 

// const calcAge = function (year, birthYear) {
//     return year - birthYear
// }
// age = calcAge(2017, 1989)
// console.log(age);




// exercise 2

// const calcAge = function (year, birthYear) {
//     return console.log(`you are either ${year - birthYear - 1} or ${year - birthYear}`)

// }
// const age = calcAge(2017, 1989)





// exercise 3

// const isEven = function (number) {
//     if (number % 2 == 0) {
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isEven(123))





// exercise 4

// const printOdd = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!isEven(arr[i])) {
//             console.log(arr[i])
//         }
//     }

// }
// let numbers = [2, 4, 15, 23, 45, 75, 36, 24, 66]
// printOdd(numbers)




// exercise 5

// const checkExist = function (arr, number) {
//     for (let n = 0; n < arr.length; n++) {
//         if (number == arr[n]) {
//             return true
//         }

//     }
//     return false
// }


// console.log(checkExist([1, 2, 3], 2))
// console.log(checkExist([1, 2, 3], 5))





// exercise 6

// let calculator = {
//     add: function (num1, num2) {
//         return num1 + num2
//     },
//     subtract: function (num1, num2) {
//         return num1 - num2
//     }
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) 





// exercise 7

// const makeRegal = function (name) {
//     return `His royal highness ${name}`
// }

// const increaseByNameLength = function (money, name) {
//     return money * name.length
// }

// const turnToKing = function (name, money) {
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) 

