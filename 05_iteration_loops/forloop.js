// for loop

for (let i = 10; i >= 1; i--) {
    let element = i;
    if (element == 1) {
        console.log(`over ${i}`);
    }
    console.log(element);
}

// for (let i = 1; i <= 5; i++) {
//     console.log(`outer loop value: ${i}`);
//    for (let j = 1; j <=5; j++) {
//     console.log(`inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }

let myArray = ["ironman", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

    // BREAK

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

    // Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//          console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }