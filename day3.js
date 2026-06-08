// ==========================================
// TRACK 1: VARIABLE DECLARATIONS (Videos 1-4)
// ==========================================

const studentName = "Sohom"; 
let currentScore = 90;
currentScore = 95; // Changing values works for 'let'
let userCity; 

console.log("--- Variables Output ---");
console.log(studentName);
console.log(currentScore);
console.log(userCity); // Will print: undefined

// ==================================================
// TRACK 2: DATA TYPE CONVERSION CONFUSIONS (Videos 5-6)
// ==================================================

console.log("\n--- Conversion Output ---");

let scoreStr = "33";
let valueInNumber = Number(scoreStr); 
console.log(typeof valueInNumber); // Should print: number
console.log(valueInNumber); // Should print: 33

let invalidScoreStr = "33abc";
let convertedInvalid = Number(invalidScoreStr);
console.log(typeof convertedInvalid); // Should print: number
console.log(convertedInvalid); // Should print: NaN