// checking if a parameters arrives

//Timestamp
const todayMark = new Date();

let yearMark = todayMark.getFullYear();
let monthMark = todayMark.getMonth();
let dayMark = todayMark.getDate();
let hourMark = todayMark.getHours();
let minuteMark = todayMark.getMinutes();
let secondsMark = todayMark.getSeconds();

let now = new Date(yearMark, monthMark, dayMark, hourMark, minuteMark, secondsMark);

// Initialize display element variable
const guestDisplay = document.querySelector("#guest-visitor");

// Get the stored VALUE for the emailsCount-ls KEY in localStorage if it exists. If the emailsCount KEY is missing, then assign 0 to the emailsCount variable.
let lastVisit = Date(window.localStorage.getItem("lastVisit-ls")) || now;

let dateSegment = lastVisit.split(" GMT");
let dateStamp = lastVisit.split(" ");
let yearDat = dateStamp[3];
let monthNameDat = dateStamp[1];
let monthDat = 0;
if (monthNameDat == "Feb") { monthDat = 1; }
else if (monthNameDat == "Mar") { monthDat = 2; }
else if (monthNameDat == "Apr") { monthDat = 3; }
else if (monthNameDat == "May") { monthDat = 4; }
else if (monthNameDat == "Jun") { monthDat = 5; }
else if (monthNameDat == "Jul") { monthDat = 6; }
else if (monthNameDat == "Ago") { monthDat = 7; }
else if (monthNameDat == "Sep") { monthDat = 8; }
else if (monthNameDat == "Oct") { monthDat = 9; }
else if (monthNameDat == "Nov") { monthDat = 10; }
else if (monthNameDat == "Dic") { monthDat = 11; }
let dayDat = dateStamp[2];
let timeDat = dateStamp[4].split(":");
let hourDat = timeDat[0];
let minuteDat = timeDat[1];
let secondsDat = timeDat[2];

let date = new Date(yearDat, monthDat, dayDat, hourDat, minuteDat, secondsDat);

//Some calculations
//let diff = 0;
let diff = now.getTime() - date.getTime();

//1000 miliseconds = 1 second; 60 seconds = 1 minute; 60 minutes = 1 hour; 24 hours = 1 day / 86.400.000 miliseconds = 1 day
let message = "";

if (diff == 0) { message = "Welcome! Let us know if you have any questions."; }
else if (diff < 86400000) { message = "Back so soon! Awesome!"; }
else if (diff >= 86400000) {
    let daysDiff = diff / (1000 * 60 * 60 * 24);
    message = `You last visited ${daysDiff} days ago.`;
}
message = message + ` ${diff}`;
// Show the reviews count on screen
guestDisplay.textContent = `${message}`;

// Store the new visit total into localStorage, key=emailsCount-ls
localStorage.setItem("lastVisit-ls", now);