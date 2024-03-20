// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BitInt


// Reference (Non primitive)

// Array, Objects, Functions

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const heros = ["Batman", "Superman", "ironman"]

let myObj = {
    name: "Batman",
    age: 18
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object