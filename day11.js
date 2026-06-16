// ==========================================================
// THE JAVASCRIPT EXECUTION ENGINE & CALL STACK (Video 25)
// ==========================================================
console.log("--- The Call Stack Engine ---");

/* MIND MAP: How JavaScript runs this file under the hood:
1. Global Execution Context is created and assigned to 'this'.
2. Memory Creation Phase: 
   - val1 = undefined
   - val2 = undefined
   - addNum = definition of the function
   - result1 = undefined
3. Execution Phase:
   - val1 = 10
   - val2 = 5
   - addNum creates its own mini sandbox (Execution Context) when called!
*/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

// Every time a function finishes executing, its temporary execution context is completely deleted.
let result1 = addNum(val1, val2);
console.log(`Result 1: ${result1}`);


// ==========================================================
// VISUALIZING THE CALL STACK (LIFO: Last In, First Out)
// ==========================================================
console.log("\n--- LIFO Nesting Test ---");

function first() {
    console.log("first function executed");
    second(); // 'second' is pushed on top of 'first' in the stack
    console.log("first function cleared from stack");
}

function second() {
    console.log("second function executed");
    third(); // 'third' is pushed on top of 'second'
}

function third() {
    console.log("third function executed and instantly popped off");
}

// Execute the chain
first();

/* The Call Stack Order during 'third()' execution:
[ third() ] <-- Top of stack (Executing right now)
[ second() ]
[ first() ]
[ Global Context ] <-- Bottom of stack
*/