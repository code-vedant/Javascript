// Immediately Invoked Function Expressions (IIFE)

(function paani(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Paaniman')