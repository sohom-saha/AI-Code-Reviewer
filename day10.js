// ==========================================
// TRACK 1: MINI HOISTING QUIRKS (Video 22)
// ==========================================
console.log("--- Hoisting Quirks ---");

console.log(addOne(5)); // Works perfectly! Prints: 6
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5)); // CRASHES! Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
};
console.log(addTwo(5)); // Works only AFTER the function expression is declared.


// ==========================================
// TRACK 2: THE 'THIS' KEYWORD & ARROW FUNCTIONS (Video 23)
// ==========================================
console.log("\n--- 'this' & Arrow Functions ---");

const user = {
    username: "Sohom",
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the console.`);
        console.log(this); // 'this' refers to the current object context
    }
};
user.welcomeMessage();

// Crucial Interview Concept: 'this' inside a standard function vs an Arrow function
function standardFunc() {
    let name = "Sohom";
    console.log(this.name); // Prints: undefined (standard functions hold global contexts, not local variable contexts)
}
standardFunc();

// Modern Arrow Function Syntax (Used heavily in React)
const addNumbers = (num1, num2) => {
    return num1 + num2; // Explicit return
};

// Implicit Return shorthand (Incredibly useful for short data mappings)
const multiplyNumbers = (num1, num2) => num1 * num2; 
console.log("Implicit Arrow Result:", multiplyNumbers(3, 4)); // Prints: 12


// ==========================================
// TRACK 3: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (Video 24)
// ==========================================
console.log("\n--- IIFE ---");

// An IIFE is used to execute a function immediately and shield it from global scope pollution.
// Syntax: (Function Definition)(Execution Call)
(function connectDB() {
    // Named IIFE
    console.log("DATABASE CONNECTED SECURELY");
})(); // MUST use a semicolon here to end execution, or the next code block will crash!

((name) => {
    // Unnamed/Arrow IIFE with parameters
    console.log(`API ENDPOINT INITIALIZED FOR ${name}`);
})("Sohom");

