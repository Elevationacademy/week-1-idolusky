// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// for (let companyIndex in companies ) {
//     console.log(companies[companyIndex])
// } 

// for(let companyIndex in companies){
//     console.log(companyIndex)
//   }

//   for ( let x of companies) {
//       console.log("One day i will work at " + x)
//   }

//   for(let i = 80; i < 100; i+=2){
//     console.log(i)
//   }

// let names = ["ido", "oded", "roy", "golan"]
// let ages = [30, 63, 33, 32]

// for (let n = 0; n < names.length; n++) {
//     console.log(names[n] + " is " + ages[n])
// }

// const numbers = [1, 3, 5, 7, 8, 12]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum)
// console.log(sum / numbers.length);

// const nums = []

// for (let i = 1; i <= 100; i++) {
//     nums.push(i)
// }
// console.log(nums)

// for (let i = 0; i < nums.length; i++) {
//     if (i % 2 == 0) {
//     } else { console.log(i) }
// }

// exercise 6

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96,
//     260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491,
//     724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406,
//     661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754,
//     23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 709) {
//         console.log(i)
//     }
// }


// exercise 7

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (i = 0; i < names.length; i++) {
//     people.push({ name: names[i], age: ages[i] })
// }
// console.log(people);

// // exercise 8

// for (let i in people) {
//     console.log(`${people[i].name} is ${people[i].age} years old`)
// }


// exercise 8

// const posts = [
//     { id: 1, text: "Love this product" },
//     { id: 2, text: "This is the worst. DON'T BUY!" },
//     { id: 3, text: "So glad I found this. Bought four already!" }
// ]

// for (let i in posts) {
//     if (posts[i].id == 2) {
//         posts.splice(i, 1)
//     }
// }
// console.log(posts)