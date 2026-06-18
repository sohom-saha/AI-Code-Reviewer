// ==========================================================
// TRACK 1: MODERN ITERATORS FOR OBJECTS & ARRAYS (Video 29)
// ==========================================================
console.log("--- Modern Array Iterators ---");

const numbers = [10, 20, 30, 40, 50];

// for...of loop: Perfect for grabbing values straight out of an array
for (const val of numbers) {
    console.log(`Value: ${val}`);
}

// Objects require a for...in loop to iterate through keys
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ==========================================================
// TRACK 2: FILTER & MAP TRANSFORMATIONS (Video 30)
// ==========================================================
console.log("\n--- Data Transformations ---");

const codingBooks = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 }
];

// .filter(): Returns a brand new array matching a specific logic test
// Arrow function with implicit return rule: No curly braces means automatic return!
const userBooks = codingBooks.filter( (book) => book.genre === 'Non-Fiction' );
console.log("Filtered Non-Fiction Books:", userBooks);

// .map(): Modifies every item in an array and passes it to a new array
const myNumbers = [1, 2, 3, 4, 5];
const updatedNumbers = myNumbers.map( (num) => num * 10 );
console.log("Mapped Array (Scaled by 10):", updatedNumbers);


// ==========================================================
// TRACK 3: THE ACCUMULATOR MECHANIC (.reduce) (Video 30)
// ==========================================================
console.log("\n--- Reduce Accumulator ---");

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "python course", price: 999 },
    { itemName: "data science course", price: 12999 }
];

// .reduce() takes an accumulator (acc), the current item (item), and an initial starting value (0)
// It is heavily used to sum totals or compile data shapes.
const totalCartPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(`Total Checkout Price: INR ${totalCartPrice}`); // Prints: 16997

