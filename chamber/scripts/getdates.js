// select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");

// use the date object
const today = new Date();
var mod = new Date(document.lastModified);

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
lastMod.innerHTML = `<span class="highlight">${mod}</span>`;
