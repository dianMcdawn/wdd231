// checking if a parameters arrives

//Timestamp
const todayMark = new Date();
const msToDays = 86400000;
let miliMark = todayMark.getTime();

// Initialize display element variable
const guestDisplay = document.querySelector("#guest-visitor");

// Get the stored VALUE for the emailsCount-ls KEY in localStorage if it exists. If the emailsCount KEY is missing, then assign 0 to the emailsCount variable.
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || miliMark;
let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

//Some calculations
let diff = miliMark - lastVisit;

//1000 miliseconds = 1 second; 60 seconds = 1 minute; 60 minutes = 1 hour; 24 hours = 1 day / 86.400.000 miliseconds = 1 day
let message = "";

if (visitCount == 0) { message = "Welcome! Let us know if you have any questions."; }
else if (diff < msToDays) { message = "Back so soon! Awesome!"; }
else if (diff >= msToDays) {
    let daysDiff = diff / (1000 * 60 * 60 * 24);
    message = `You last visited ${daysDiff} days ago.`;
}
message = message;

//Visita
visitCount++;

// Show the reviews count on screen
guestDisplay.textContent = `${message}`;

// Store the new visit total into localStorage, key=emailsCount-ls
localStorage.setItem("lastVisit-ls", miliMark);
localStorage.setItem("visitCount-ls", visitCount);