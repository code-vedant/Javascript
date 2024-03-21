// String

const name = "oonoda"
const rcCount = 50

// console.log(`Hello my name is ${name} and my RC car count is ${rcCount}`);

const myName = new String('ProBot')

// console.log(myName[0]);
// console.log(myName.__proto__);

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(2));

// const nwStr = myName.substring(0,3)
// console.log(nwStr);

// const anotherStr = myName.slice(-6,4)
// console.log(anotherStr);

// const newStrOne = "    lalalalala   "
// console.log(newStrOne);
// console.log(newStrOne.trim());

const url = "http://aladja.com/sddscc%20asdwdddd"

console.log(url.replace('%20','-'));