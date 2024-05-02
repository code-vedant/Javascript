// let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let newDate = new Date(2024, 2,11,8,3)

// console.log(newDate.toDateString());

// let createdDate = new Date("03-14-2015")

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('Default',{
    weekday: "long",
})