// ==========================================================
// TRACK 1: CONSUMING PROMISES WITH .THEN / .CATCH (Video 40)
// ==========================================================
console.log("--- Promise Engine Active ---");

// Simulating an API network request to an AI engine
const fetchAIDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let errorOccurred = false; // Simulate a stable connection
        
        if (!errorOccurred) {
            // Success: send back the data payload object
            resolve({ status: "Success", review: "Code has no logical syntax flaws." });
        } else {
            // Failure: send an explicit rejection trigger
            reject("ERROR: Connection to AI engine timed out.");
        }
    }, 1500);
});

// Consuming the promise pattern cleanly
fetchAIDataPromise
    .then((data) => {
        console.log("Consumed via .then():", data.review);
    })
    .catch((error) => {
        console.log("Consumed via .catch():", error);
    });


// ==========================================================
// TRACK 2: THE MODERN INDUSTRY STANDARD (async / await)
// ==========================================================
console.log("\n--- Modern Async / Await Execution ---");

// This is the EXACT code design pattern we will use to build the AI Code Reviewer next week!
async function consumeAIEngineDirectly() {
    try {
        console.log("Starting secure background API handshake...");
        
        // 'await' pauses this line execution until the promise completely finishes in the background
        const liveResponse = await fetchAIDataPromise; 
        
        console.log("Async/Await Result:", liveResponse.review);
    } catch (error) {
        // If the promise rejects, execution instantly jumps directly down into this block
        console.log("Async/Await Error Caught:", error);
    }
}

consumeAIEngineDirectly();

