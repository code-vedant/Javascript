// also known as logic flow


// if

// if(true condition){
//     statements 1
// }
// 
// else if(Another condition){
//     statements 2
// }
// else{
//     statements 3
// }


// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 101

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 10000

// if (balance > 5000) console.log("test"),console.log("test2");

// if (balance < 5000) {
//     console.log("less than 5000");
// } else if (balance < 7500) {
//     console.log("less than 7500");
    
// } else if (balance < 9000) {
//     console.log("less than 7500");
    
// } else {
//     console.log("less than 12000");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
