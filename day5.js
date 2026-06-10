// ==========================================
// TRACK 1: NUMBERS & MATH (Videos 10-11)
// ==========================================
console.log("--- Math & Numbers ---");

const balance = new Number(400); // Explicitly defining a number object
console.log(balance.toFixed(2)); // Prints: 400.00 (Great for formatting prices!)

console.log(Math.abs(-5)); // Prints: 5 (Absolute value)
console.log(Math.round(4.6)); // Prints: 5 (Standard rounding)

// Generating a random number between 1 and 10 (Crucial logic for games/tokens)
const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number between 1 and 10: ${randomNum}`);


// ==========================================
// TRACK 2: DATES & TIMESTAMPS (Video 12)
// ==========================================
console.log("\n--- Dates & Timestamps ---");

let myDate = new Date();
console.log(myDate.toString()); // Prints full date text
console.log(myDate.toDateString()); // Prints cleaner version: e.g., "Wed Jun 10 2026"
console.log(myDate.toLocaleString()); // Prints date and time formatted to your timezone

// Creating a specific date
let createdDate = new Date(2026, 5, 10); // Note: Months start from 0 in JS (5 = June)
console.log(createdDate.toDateString());

// ==========================================
// ADVANCED DATE METHODS & TIMESTAMPS
// ==========================================
console.log("\n--- Advanced Dates ---");

// Quirk 1: Array-Style Months
// When passing numbers into Date, 0 = January, 1 = February, 5 = June!
let customDate = new Date(2026, 5, 10); 
console.log(`The month number is: ${customDate.getMonth()}`); // Prints: 5 (which means June)

// Quirk 2: Timestamps (Crucial for calculating durations or event timing)
let myTimeStamp = Date.now(); 
console.log(myTimeStamp); // Prints a giant number (Milliseconds passed since January 1, 1970)

// How to get a timestamp for a specific exact day to compare them
console.log(customDate.getTime()); 

// Interview Trick: How to convert the milliseconds timestamp into clean seconds
console.log(Math.floor(Date.now() / 1000));


// Quirk 3: Deep Customization of Date Display
let newDate = new Date();
let formattedDate = newDate.toLocaleString('default', {
    weekday: "long", // Options: "short", "narrow", "long"
    year: "numeric",
    month: "short"
});

console.log(formattedDate); // Prints something clean like: "Wednesday, Jun 2026"

