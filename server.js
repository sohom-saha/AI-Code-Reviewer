// ==========================================
// DAY 17: INITIALIZING THE BACKEND SERVER ENGINE
// ==========================================

// 1. Import the Express package we just downloaded
const express = require('express');

// 2. Initialize the server application instance
const app = express();

// 3. Define the network Port location (3000 is standard for local development)
const PORT = 3000;

// 4. Create a basic URL route handler
// When someone visits http://localhost:3000/, this function triggers automatically
app.get('/', (req, res) => {
    res.send("Backend Engine Status: ACTIVE. Ready to build the AI Reviewer! ✓");
});

// 5. Fire up the server to start listening for incoming network requests
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Server is successfully running live!`);
    console.log(`🔗 Click here to test: http://localhost:${PORT}`);
    console.log(`=================================================`);
});

