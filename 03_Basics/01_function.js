function sayMyName() {
  console.log("Vedant");
}

// sayMyName()

// function addTwoNums(number1, number2) {
//     console.log(number1 + number2);
// }

// function addTwoNums(number1, number2) {
//     let result = number1 + number2
//     return result
//     // console.log(result);
//     // result ke baad  kuch bhi kaam nhi karta
// }

// function addTwoNums(number1, number2) {
//     return number1 + number2
//     // console.log(result);
//     // result ke baad  kuch bhi kaam nhi karta
// }

// const result = addTwoNums(10, 5)

// console.log("Result:",result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sunny"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calulateCartPrice(...num1) {
    return num1
}

// console.log(calulateCartPrice(200,400,500,2000));

const user = {
    username: "Veda",
    price: 199999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject({
    username: "Va",
    price: 199
});

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));