// ==========================================
// TRACK 1: BASIC METHODS & COPIES (Video 14)
// ==========================================
console.log("--- Array Part 1 ---");

const myArr = [0, 1, 2, 3, 4];
myArr.push(5); // Adds to the end
myArr.pop();  // Removes from the end

myArr.unshift(9); // Adds to the very front (Heavy operation because it shifts all indexes!)
myArr.shift();   // Removes from the front

// The Interview Favorite: slice vs splice
console.log("Original Array:", myArr);

const myNewArr1 = myArr.slice(1, 3); 
console.log("Slice (1,3):", myNewArr1); // Prints indexes 1 and 2. Original array is UNCHANGED.
console.log("Array after Slice:", myArr);

const myNewArr2 = myArr.splice(1, 3); 
console.log("Splice (1,3):", myNewArr2); // Rips indexes 1, 2, and 3 out of the array!
console.log("Array after Splice:", myArr); // The original array has been permanently MUTATED.


// ==========================================
// TRACK 2: COMBINING ARRAYS (Video 15)
// ==========================================
console.log("\n--- Array Part 2 ---");

const marvelHeroes = ["Thor", "Ironman", "Spider-Man"];
const dcHeroes = ["Superman", "Batman", "Flash"];

// The Modern Way: Spread Operator (...) - Think of dropping a glass and it spreading out
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log("Spread Operator Result:", allNewHeroes);

// Handling messy nested arrays (Great for handling raw data feeds)
const messyArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const cleanArray = messyArray.flat(Infinity); // Flattens all nested arrays into a single line
console.log("Flattened Array:", cleanArray);
