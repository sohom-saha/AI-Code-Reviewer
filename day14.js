// ==========================================================
// 1. SELECTING BY ID & MANIPULATION (Video 31)
// ==========================================================
const pageTitle = document.getElementById('title');
if (pageTitle) {
    pageTitle.innerText = "DOM Manipulation Mastered! ✓";
    pageTitle.style.color = "#34d399"; // Changes color to vivid emerald green
}

// ==========================================================
// 2. MULTIPLE SELECTORS & NODELISTS (Video 32)
// ==========================================================
// querySelectorAll returns a 'NodeList', NOT a true array!
const descriptionParagraphs = document.querySelectorAll('.description');

// A NodeList allows .forEach() loops, but does NOT support .map() or .filter()
descriptionParagraphs.forEach((p, index) => {
    p.style.fontSize = "18px";
    console.log(`Paragraph ${index + 1} updated dynamically.`);
});

// ==========================================================
// 3. DYNAMIC ELEMENT CREATION (Video 33)
// ==========================================================
const parentContainer = document.getElementById('parent-box');
if (parentContainer) {
    // Create a brand new element in your laptop's memory
    const newTag = document.createElement('div');
    
    // Dressing up the element with Tailwind classes and text
    newTag.className = "mt-2 p-2 bg-emerald-500 text-gray-900 rounded font-bold text-center";
    newTag.innerText = "Dynamically injected via day14.js";
    
    // Glueing this new element securely into our live DOM tree
    parentContainer.appendChild(newTag);
}
