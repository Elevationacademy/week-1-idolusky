// myStuff = ["guitar" , "books", "mac"]
// console.log(myStuff[1])

// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log("the first plant is " +plants[0]+" and the last plant is " + plants[plants.length-1])

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// companies[1] = "Twitter"
// console.log(companies)

// companies = ["Samsung", "Kellogg", "Coca-Cola", "J.P Morgan"]
// console.log(companies)

// companies.push("Blizzard Entertainment")
// console.log(companies[4])

// myStuff.unshift("mac")
// myStuff.push("guitar")
// console.log(myStuff)

// companies.push("Fox Entertainment", "Marvel Studios", "Rolex");
// console.log(companies)

// myStuff.pop("guitar")
// console.log(myStuff)
// myStuff.shift("mac")
// console.log(myStuff)

// myStuff.push(...myStuff)
// console.log(myStuff)

// let removedItem = myStuff.splice(3, 3)
// myStuff.splice(3, 3)
// console.log(removedItem)    
// console.log(myStuff)

// let things = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// console.log(things.length)
// things.splice(0,things.length - 1)
// console.log(things)

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

// let genes1 = []
// genes1 = [...genes]
// genes1[2] = genes1[4]
// console.log(genes1)
// genes1[4] = genes[2]
// genes1.splice(3,1)
// genes1.push(genes[3])
// genes1.push(genes[3])
// genes1.unshift("FXT")
// console.log(genes1)

// let car = {
//     color : "black",
//     numWheels : 6 ,
//     isFancy : false 
// }
// if (car.isFancy) {
//     console.log(`The ${car.color} car has ${car.numWheels} wheels. it is fancy`)
// } else {
//  console.log (`The ${car.color} car has ${car.numWheels} wheels. it is not fancy`)
// }

// let bag = {
//     item: "banana" ,
//     toBeginning: false ,
//     items : ["book", "cigarettes", "pen", "mac"]
// }
// if (bag.toBeginning) {
//     bag.items.unshift(bag.item)
// } else {
//     bag.items.push(bag.item)
// }
// console.log(bag.items)

// const human = {
//     age: 0
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"
// human[babyNameKey] = babyNameValue
// console.log(human)
// console.log(human.name)

// human["name"] = "Joe"
// console.log(human)

// let person = {
//     firstName: "Dopple",
//     lastName: "Ganger"
//   }

//   let p = person
//   p.firstName= "Chappy"

//   console.log(p)
//   console.log(person)

// let p1 = {
//     name : "ido" ,
//     age : 30 ,
//     city : "Tel aviv"
// }
// let p2 = {
//     name : "dana" ,
//     age : 25 ,
//     city : "Jerusalem"
// }

// if (p1.age == p2.age) {
//     if(p1.city == p2.city) {
//         console.log (p1.name + " wants to date " + p2.name)
//     } else {
//         console.log(p1.name + " wants to date " +p2.name + ", but couldn't")
//     }
// } else {
//     console.log("that sucks bro")
// }

// let inst = {
//     instrument : "piano"
// }
// let food = {
//     fruit : "banana"
// }
// let myList = [inst,food]
// console.log(myList)

// let myList = [{instrument : "piano"}, {fruit : "banana"}]
// myList[0].instrument = "guitar"
// myList.splice(1,1)

// console.log(myList)

// myBag = [{flower:"lily"}, {book:"1984"}]
// myList.push(...myBag)
// console.log(myList)

// let library = {
//     books : [{title : "1984" , author : "George Orwell"},
//      {title : "The myth of sysyphus", author : "Albert Camus"},
//      {title : "mechanical bird chronicles" , author : "haruki murakami"}]
// }

// myList.push(library.books)
// console.log(myList)

//Objects exercise 5

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

if (!reservations[name]) {
    console.log("no reservation")
} else if (reservations[name].claimed == false) {
    console.log(`welcome ,${name}`)
} else if (reservations[name].claimed == true) {
    console.log("Hmm, someone already claimed this reservation")
}




// if (reservations[name].claimed) {
//     if (reservations[name].claimed = false) {
//         console.log(`Welcome, ${name}` )
//     } else if (reservations.Ted.claimed = true) {
//         console.log("Hmm, someone already claimed this reservation")
//     }
// } else {
//     console.log("You have no reservation")
// }

