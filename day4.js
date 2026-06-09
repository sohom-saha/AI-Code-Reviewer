// ==========================================
// TRACK 1: THE MEMORY QUIRKS (Video 8)
// ==========================================

// --- STACK MEMORY (Primitive Types: String, Number, Boolean) ---
// You get a COPY of the value. Original remains unchanged.

let originalName = "Sohom";
let copyName = originalName; // copyName gets a direct copy of "Sohom"
copyName = "Sohom Saha"; // Changing the copy doesn't hurt the original

console.log("--- Stack Memory Test ---");
console.log("Original:", originalName); // Prints: Sohom
console.log("Copy:", copyName); // Prints: Sohom Saha


// --- HEAP MEMORY (Non-Primitive Types: Arrays, Objects) ---
// You get a REFERENCE (pointer) to the exact same memory box. 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne; // userTwo points to the EXACT same memory block as userOne

userTwo.email = "sohom@google.com"; // Changing userTwo directly updates the source!

console.log("\n--- Heap Memory Test ---");
console.log("User One Email:", userOne.email); // Prints: sohom@google.com
console.log("User Two Email:", userTwo.email); // Prints: sohom@google.com


// ==========================================
// TRACK 2: COMPARISONS & STRINGS (Videos 7 & 9)
// ==========================================

console.log("\n--- Comparisons & Strings ---");

// Strict Check (===) checks both value AND data type
console.log("2" == 2); // Prints: true (JavaScript converts types automatically)
console.log("2" === 2); // Prints: false (checks type of both objects)

//concatenation
console.log(1+"1") //prints 11(concat)
console.log("1"+2+2) //prints 122(uses string type to concatenate as string is there at 1st)
console.log(1+2+"2") //prints 32 (1st numbers there so adds then concatenate string)

// Modern String Interpolation (Backticks ``)
const repoName = "AI-Code-Reviewer";
const dayCount = 4;

// Instead of old concatenation ("Day " + dayCount + " of " + repoName)
console.log(`Hello, this is Day ${dayCount} of working on the ${repoName} project.`);