// ==========================================
// TRACK 1: FUNCTIONS & REST PARAMETERS (Videos 19-20)
// ==========================================
console.log("--- Functions Part 1 ---");

// Basic Function with parameters and a return statement
function calculateTotal(num1, num2) {
    return num1 + num2;
}
const result = calculateTotal(5, 10);
console.log("Basic Return Result:", result); // Prints: 15


// Interview Favorite: What if you don't know how many items a user will add to a shopping cart?
// We use the Rest Operator (...) to bundle multiple arguments into a single array.
function calculateCartPrice(...prices) {
    return prices; // Returns an array of all passed numbers
}
console.log("Rest Operator Array:", calculateCartPrice(200, 400, 600, 2000));


// Passing an object directly into a function
const userProfile = {
    username: "Sohom",
    college: "IEM"
};

function handleObject(anyobject) {
    console.log(`User is ${anyobject.username} studying at ${anyobject.college}.`);
}
handleObject(userProfile);


// ==========================================
// TRACK 2: GLOBAL VS LOCAL SCOPE (Video 21)
// ==========================================
console.log("\n--- Block Scoping ---");

let a = 100; // Global Scope (Available anywhere)

if (true) {
    let a = 10; // Local/Block Scope (Trapped inside this if-statement)
    const b = 20; // Block Scope
    var c = 30; // CRITICAL WARNING: 'var' completely ignores block scoping!
    console.log("Inside Block 'a':", a); // Prints: 10
}

console.log("Outside Block 'a':", a); // Prints: 100 (Global 'a' was protected from changes)
// console.log(b); // Throws an error! 'b' is safe and trapped inside the block.

console.log("The dangerous leakage of 'c':", c); 
// Prints: 30! This is why modern JS engineers NEVER use 'var'. It leaks out and breaks global values.

