// console.log("Hello, world!")
// console.log( ( (4 + 5) > 10) && !("a" == "b")) // we'll see what all this means soon
// let string = "hi"
// let num = 4
// console.log(51 !== 52)
// let startPosition 
// let newPosition = (startPosition || 0) + 10

// console.log(newPosition)
// let numGoalsAchieved = 83
// numGoalsAchieved += 1
// console.log(numGoalsAchieved)

// let word = "music"
// let result = word + " is the best thing ever"
// console.log(result)
// console.log(word+" is the best thing ever")

// let password = "shalom"
// let confirmPassword = "shalom"
// console.log(password == confirmPassword)

// console.log(432*12)
// console.log(802/2)
// console.log((5+6) *3)
// console.log((undefined || null))

// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// console.log(a)
// console.log(b)
// console.log(c)


// let enoughMoneyInBank = false
// let hasJob = true

// if (enoughMoneyInBank) {
//     console.log("buy a gift")
// } else {
//     if (hasJob) {
//         console.log("go to work")
//     } else {
//        console.log("find a job") 
//     }
// }


// let color = "orange"

// if(color == "green"){
//     console.log("Vroom.")
// } else if(color == "orange"){
//     console.log("Release breaks")
// } else {
//     console.log("Slam breaks and jump out of car")
// }

// let username = prompt("What is your username?")
// console.log(username)

// let number = prompt("what's your age bruh?")
// console.log(number)

// let numChildren = 3
// let isCareful = false

// if (isCareful) {
//     console.log(numChildren)
// } else {
//    numChildren++
//     console.log(numChildren)
// }

// let silverwareCount = 808
// silverwareCount++
// silverwareCount++

// if (silverwareCount % 2 == 0) {
    
// } else {
// console.log("there is something missing")
// }

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// if (performance == "stellar") {
//     salary += stellarBonus
// } else {
//     salary += goodBonus
// }
// console.log(salary)

// const isVIP = false
// let cash = 500

// if (cash > 300 || isVIP ) {
//     console.log("come on in superstar")
// } else {
//     console.log("gtfo biatch")
// }

// const a = 3
// let b = 2
// let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }

// d = a + (b * c)
// d++
// b += 2

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const gender = null
// let profession = "business"

// if (gender == "man") {
//     console.log(profession+"man")
// } else if (gender == "woman") {
//     console.log(profession+"woman")
// } else {
//     console.log(profession+"person")
// }

let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("would you like to upgrade?")
    } else {
        console.log("are you satisfied with your car?")
    }
} else if (boughtTesla && !isUSCitizen) {
    console.log("would you like to move to the US?")
} else if (!boughtTesla) {
    console.log("interested in buying one?")
}
