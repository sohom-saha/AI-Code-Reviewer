// ==========================================
// TRACK 1: CONTROL FLOW & SHORTHANDS (Video 26)
// ==========================================
console.log("--- Control Flow Decision Making ---");

const balance = 1000;

// Implicit scope shorthand (Only use for single-line executions!)
if (balance > 500) console.log("Implicit Check: Balance is healthy");

// Standard Switch Case (Crucial for routing different API requests later)
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); // Execution lands here
        break; // If you forget this break, JS will execute ALL remaining cases down the line!
    default:
        console.log("Default case executed");
        break;
}


// ==========================================
// TRACK 2: TRUTHY VS FALSY & OPERATORS (Video 27)
// ==========================================
console.log("\n--- Truthy vs Falsy Quirks ---");

// FALSY VALUES: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// TRUTHY VALUES: Everything else! Including surprising ones like: "0", 'false', [], {}, function(){}

const userEmail = []; // Empty array is TRUTHY

if (userEmail) {
    console.log("Got email (Array evaluated as Truthy)");
}

// Correct engineering way to check if an array is truly empty:
if (userEmail.length === 0) {
    console.log("Array is verified empty using .length");
}

// Correct engineering way to check if an object is truly empty:
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is verified empty using Object.keys()");
}


// ==========================================
// TRACK 3: ADVANCED LOGICAL OPERATORS
// ==========================================
console.log("\n--- Advanced Operators ---");

// 1. Nullish Coalescing Operator (??): Safety net for fallback values (Handles null / undefined)
// Extremely important when pulling messy data from databases or external AI APIs.
let databaseValue;

// If the first value is null or undefined, use the second fallback value
let finalResult = databaseValue ?? "Fallback Default Value"; 
console.log(`Nullish Coalescing Result: ${finalResult}`); // Prints the fallback text

let specificValue = 45 ?? 100;
console.log(`Nullish Coalescing Result 2: ${specificValue}`); // Prints 45


// 2. Ternary Operator: Clean inline shorthand for a basic if/else check
// Syntax: condition ? true_execution : false_execution;
const serverStatusOnline = true;
serverStatusOnline ? console.log("Server status: Active") : console.log("Server status: Offline");
