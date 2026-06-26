// ==========================================================
// DAY 19: CONFIGURING SECURE ENVIRONMENT MANAGEMENT
// ==========================================================

// 1. Load the dotenv library at the absolute top of the file.
// This reads the contents of your .env file and injects them into system memory before anything else boots!
require('dotenv').config();

const express = require('express');
const app = express();

// 2. Instead of hardcoding 3000, read it out of the secure environment.
// If it's missing for any reason, default safely to 3000 using the || (OR) operator.
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Secure Server Engine: ONLINE. Vault initialized successfully. ✓");
});

// A dummy verification channel to test if your server can see your secret API key string
app.get('/test-vault', (req, res) => {
    const hiddenApiKey = process.env.GEMINI_API_KEY;
    
    res.json({
        message: "Environment verification complete.",
        // Pulling the hidden variable out of system memory dynamically
        vault_key_detected: hiddenApiKey ? "SUCCESS: Secret key found inside memory." : "FAILED: Key not detected."
    });
});

app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Day 19 Secure Server booted successfully.`);
    console.log(`🔗 Main Link: http://localhost:${PORT}`);
    console.log(`🔗 Vault Verification: http://localhost:${PORT}/test-vault`);
    console.log(`=================================================`);
});