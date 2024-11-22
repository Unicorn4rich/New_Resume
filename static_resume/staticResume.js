"use strict";
// Buttons
let objectiveBtn = document.getElementById('objectiveBtn');
let educationBtn = document.getElementById('educationBtn');
let skillsBtn = document.getElementById('skillsBtn');
let experienceBtn = document.getElementById('experienceBtn');
// Sections
let objectiveSec = document.getElementById("objectiveSec");
let educationSec = document.getElementById("educationSec");
let skillSec = document.getElementById("skillSec");
let experienceSec = document.getElementById("experienceSec");
// Events
// Objective button and section
objectiveBtn?.addEventListener('click', () => {
    if (objectiveSec.style.display == "block") {
        objectiveSec.style.display = "none";
    }
    else {
        objectiveSec.style.display = "block";
    }
});
// Education button and section
educationBtn?.addEventListener('click', () => {
    if (educationSec.style.display == "block") {
        educationSec.style.display = "none";
    }
    else {
        educationSec.style.display = "block";
    }
});
// Skills button and section
skillsBtn?.addEventListener("click", () => {
    if (skillSec.style.display == "block") {
        skillSec.style.display = "none";
    }
    else {
        skillSec.style.display = "block";
    }
});
// Experience button and section
experienceBtn?.addEventListener("click", () => {
    if (experienceSec.style.display == "block") {
        experienceSec.style.display = "none";
    }
    else {
        experienceSec.style.display = "block";
    }
});
