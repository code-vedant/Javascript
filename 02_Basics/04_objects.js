// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "154abhs"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sunny@gmail.com",
    fullname: {
        userfullname: {
            firstName: "sunny",
            lastName: "christ"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b" , 3: "c"}
const obj2 = {4: "d" , 5: "e"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "user@example.com",
    },
    {
        id: 2,
        email: "user2@example.com",
    },
    {
        id: 3,
        email: "user3@example.com",
    }
]

users[1].email

// keys values entries

// hasOwnProperty('name)
