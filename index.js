//task 1
let age = prompt("Enter your age:")
if (age > 18){
    console.log("you are old enough to drive")
} else {
    let ageLeft = 18 - age
    console.log(`you are left with ${ageLeft} years to drive`)
}

// task 2
let age_2 = prompt("Enter your age:")
if (age_2 < 25){
    let yearOldYounger = 25 - age_2
    console.log(`I'm ${yearOldYounger} years older than you`)
} else {
    let yearOldOlder = age_2 - 25
    console.log(`you are ${yearOldOlder} years older than me`)
}

//task 3
let a = 4
let b = 3
a > b
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

//task 4
let num = prompt("Enter a number:")
if (num % 2 == 0){
    console.log(`${num} is an even number`)
} else { 
    console.log(`${num} is an odd number`)
}

//task 1
let score = prompt("Enter your score")
switch (true){
    case -1 < score < 49:
        console.log("you got an F")
        break
    case 49 < score < 59:
        console.log("you got a D")
        break
    case 59 < score < 69:
        console.log("you got a C")
        break
    case 69 < score < 89:
        console.log("you got a B")
        break
    case 89 < score <101:
        console.log("you got an A")
        break
}

