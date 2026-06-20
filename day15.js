// ==========================================
// TRACK 1: SYNCHRONOUS VS ASYNCHRONOUS FLOW (Video 37)
// ==========================================
console.log("--- Execution Sequence Starts ---"); // Executes 1st

// setTimeout pushes this execution block into the background waiting room for 2000 milliseconds (2 seconds)
setTimeout(() => {
    console.log("Async Task: 2 seconds have passed. Data retrieved! ✓"); // Executes LAST
}, 2000);

console.log("--- Execution Sequence Ends ---"); // Executes 2nd

// Notice when you run this file: "Sequence Ends" prints BEFORE the "Async Task" finishes!
// The main execution stream did not freeze to wait for the timer.


// ==========================================
// TRACK 2: CLEARING TIMERS DYNAMICALLY (Video 38)
// ==========================================
console.log("\n--- Interval Tracking ---");

let counter = 0;

// setInterval runs a function repeatedly after a set interval spacing
const intervalId = setInterval(() => {
    counter++;
    console.log(`Interval Heartbeat Tick: ${counter}`);
    
    // Safety break: Once it ticks 3 times, destroy the interval loop so it doesn't run forever
    if (counter === 3) {
        clearInterval(intervalId);
        console.log("Interval cleared securely.");
    }
}, 1000);