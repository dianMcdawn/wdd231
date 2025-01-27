// checking if a parameters arrives
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('firstname');

// Initialize display element variable, selecting an element by it style class
const visitsDisplay = document.querySelector(".reviews");

// Get the stored VALUE for the reviewsCount-ls KEY in localStorage if it exists. If the reviewsCount KEY is missing, then assign 0 to the reviewsCount variable.
let reviewsCount = Number(window.localStorage.getItem("reviewsCount-ls")) || 0;

if (product !== null) {
    // If submit is success increment the number of reviews by one.
    reviewsCount++;
}

// Show the reviews count on screen
visitsDisplay.textContent = reviewsCount;

// Store the new visit total into localStorage, key=reviewsCount-ls
localStorage.setItem("reviewsCount-ls", reviewsCount);