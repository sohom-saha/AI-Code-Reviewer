// ==========================================================
// DAY 18: ADVANCED EXPRESS ROUTING & MIDDLEWARE CONFIGURATION
// ==========================================================

const express = require('express');
const app = express();
const PORT = 3000;

// 1. MIDDLEWARE: This configuration line tells Express to automatically
// intercept incoming data packets and parse them into a clean JavaScript Object.
// Without this line, req.body will read as 'undefined'!
app.use(express.json());


// ROUTE 1: The Main Home Page (GET Method)
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the AI Code Reviewer Home Page</h1>");
});


// ROUTE 2: System Health Check Endpoint (GET Method)
app.get('/status', (req, res) => {
    // Sending data back as a structured JSON object instead of raw text
    res.json({
        status: "Healthy",
        uptime: "100%",
        engine: "V8 Express"
    });
});


// ROUTE 3: The Code Processing Channel (POST Method)
// We use POST because the user is submitting/posting their raw code to our server.
app.post('/review', (req, res) => {
    // Pulling the user's submitted code directly out of the request body
    const userCode = req.body.code;

    if (!userCode) {
        return res.status(400).json({ error: "No code block was provided for analysis." });
    }

    console.log(`\n📬 Code received for review:\n${userCode}`);

    // Sending back a temporary dummy response. Next week, this is where Gemini's analysis will sit!
    res.json({
        message: "Code successfully received by the backend engine.",
        preview: userCode.substring(0, 30) + "..."
    });
});


// 2. Turn the server on
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Day 18 Server running live on port ${PORT}`);
    console.log(`🔗 Main Link: http://localhost:${PORT}`);
    console.log(`🔗 Status Link: http://localhost:${PORT}/status`);
    console.log(`=================================================`);
});

