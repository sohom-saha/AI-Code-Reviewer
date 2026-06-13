// ==================================================
// TRACK 1: OBJECT DE-STRUCTURING (Video 18)
// ==================================================
console.log("--- Object De-structuring ---");

const course = {
    courseName: "JS in Hindi",
    price: "free",
    courseInstructor: "Hitesh"
};

// Old, tedious way to print a value:
// console.log(course.courseInstructor);

// Modern Engineering Way: De-structuring the object
const { courseInstructor } = course;
console.log("Extracted Instructor:", courseInstructor); // Prints: Hitesh

// Advanced Trick: De-structuring and renaming the variable for shorter code
const { courseName: title } = course;
console.log("Renamed Variable:", title); // Prints: JS in Hindi


// ==================================================
// TRACK 2: THE JSON API CONCEPT (Video 18)
// ==================================================
console.log("\n--- JSON API Concept ---");

// This is a mental model of how data arrives from an external server or an AI API.
// JSON is essentially an object but keys and strings MUST use double quotes ("").

/* This is what a standard JSON object looks like:
{
    "name": "Sohom",
    "coursename": "JS foundation",
    "price": "free"
}
*/

// Sometimes APIs send back an array full of JSON objects:
/*
[
    {},
    {},
    {}
]
*/
console.log("JSON is fundamentally text structured like a JS Object for universal communication.");