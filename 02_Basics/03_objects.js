// singleton constructor se banega
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "John",
    "full name" : "John Smith",
    [mySym]: "mykey1",
    age: 30,
    job: "Software-Engineer",
    location: "bangluru",
}

// console.log(JsUser.name);
// console.log(JsUser["job"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.location = "Delhi"
// Object.freeze(JsUser)
// JsUser.location = "Mumbai"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());