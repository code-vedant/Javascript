const userEmail = []

// if(userEmail){
//     console.log(`Got user email: ${userEmail}`);
// }
// else{
//     console.log("No user email");
// }

// Falsy Values

// false, 0, -0, BigInt, "", null, undefined, NaN

// Truthy Values

// true, "0", 'false', " ", [], {}, function(){}, 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

// if (Object.keys(emptyObject).length===0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 30

// console.log(val1);

// Terniary Operator

// condition ? true : false

const price = 100

price <=50 ? console.log("less than 50") :console.log("more than 50");;