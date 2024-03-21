// Array

const arr = ["a", "b", "c", "d"];

// console.log(arr[0]);

const arr2 = new Array(1, 2, 3, 4, 5, 6);

// console.log(arr2[0]);

// Array methods

// arr2.push(7)
// console.log(arr2);

// arr2.pop()
// console.log(arr2);

// arr2.unshift(0)
// console.log(arr2);

// arr2.shift()

// console.log(arr2);

// console.log(arr2.includes(8));
// console.log(arr2.indexOf(4));

// // slice , splice

console.log("A ", arr2);

const myn1 = arr2.slice(1, 5);
console.log(myn1);
console.log("B ", arr2);

const myn2 = arr2.splice(1, 2);
console.log(myn2);
console.log("c ", arr2);