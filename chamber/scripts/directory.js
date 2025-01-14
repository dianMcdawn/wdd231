// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ******************************************************************************** */

//Fetching JSON to be displayed
const url = 'data/members.json';
const cards = document.querySelector('#business');

async function getMemberData() {
	const response = await fetch(url);
	const data = await response.json();
	//console.table(data.members);
	displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
	members.forEach((member) => {
		// Creating main card
		let card = document.createElement('div');
		card.classList.add("member-section");
		let fullName = document.createElement('h3');
		let line = document.createElement('hr');
		//Creating secundary card
		let portrait = document.createElement('img');

		let address = document.createElement('p');
		address.textContent = `Adrress: ${member.address}`;
		let phone = document.createElement('p');
		phone.textContent = `Phone: ${member.phone}`;
		let website = document.createElement('p');
		website.textContent = `Website: ${member.website}`;
		let membershiplevel = document.createElement('p');
		membershiplevel.textContent = `Level: ${member.membershiplevel}`;
		let birthday = document.createElement('p');
		birthday.textContent = `Birthday: ${member.birthdaydate}`;
		let active = document.createElement('p');
		active.textContent = `Is Active: ${member.active}`;

		// Build the h2 content out to show the prophet's full name
		fullName.textContent = `${member.name}`;
		// Build the image portrait by setting all the relevant attributes
		portrait.setAttribute('src', member.imageurl);
		portrait.setAttribute('alt', `Portrait of ${member.name}`);
		portrait.setAttribute('loading', 'lazy');

		// Appending sections
		card.appendChild(fullName);
		card.appendChild(line);
		card.appendChild(portrait);
		card.appendChild(address);
		card.appendChild(phone);
		card.appendChild(website);
		card.appendChild(membershiplevel);
		card.appendChild(birthday);
		card.appendChild(active);

		cards.appendChild(card);
	}); // end of arrow function and forEach loop
}

/* ******************************************************************************** */

//Grid to List buttons action
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#business");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}