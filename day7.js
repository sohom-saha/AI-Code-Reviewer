// ==========================================
// TRACK 1: OBJECT LITERALS & FREEZING (Video 16)
// ==========================================
console.log("--- Objects Part 1 ---");

// Interview Trick: Using a Symbol as an object key
const mySym = Symbol("key1");

const jsUser = {
    name: "Sohom",
    "full name": "Sohom Saha", // Key with a space must be a string
    [mySym]: "mykey1", // Correct syntax to reference a Symbol key
    age: 20,
    location: "Kolkata",
    isLoggedIn: false
};

// Two ways to access data
console.log(jsUser.name); // Standard dot notation
console.log(jsUser["full name"]); // Square bracket notation (Required for keys with spaces!)
console.log(jsUser[mySym]); // Accessing the Symbol correctly

// Modifying values and freezing an object
jsUser.location = "Bengaluru"; 
Object.freeze(jsUser); // Locks the object down permanently!

jsUser.location = "Mumbai"; // This change will be quietly ignored because it's frozen
console.log("Location after freeze:", jsUser.location); // Still prints: Bengaluru


// ==========================================
// TRACK 2: COMBINING OBJECTS (Video 17)
// ==========================================
console.log("\n--- Objects Part 2 ---");

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Merging objects using the modern Spread Operator (...)
const obj3 = { ...obj1, ...obj2 };
console.log("Merged Object:", obj3);

// Handling data coming from a database (An array of objects)
const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" }
];
console.log("User 2 Email:", users[1].email);

// Getting all keys or values as arrays (Crucial for loops later)
console.log("All Keys:", Object.keys(jsUser)); // Returns an array of keys
console.log("All Values:", Object.values(jsUser)); // Returns an array of values