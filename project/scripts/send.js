// checking if a parameters arrives
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('name');

// Initialize display element variable
const visitsDisplay = document.querySelector(".emails");

// Get the stored VALUE for the emailsCount-ls KEY in localStorage if it exists. If the emailsCount KEY is missing, then assign 0 to the emailsCount variable.
let emailsCount = Number(window.localStorage.getItem("emailsCount-ls")) || 0;

if (product !== null) {
    // If submit is success increment the number of reviews by one.
    emailsCount++;
}

// Show the reviews count on screen
visitsDisplay.textContent = emailsCount;

// Store the new visit total into localStorage, key=emailsCount-ls
localStorage.setItem("emailsCount-ls", emailsCount);