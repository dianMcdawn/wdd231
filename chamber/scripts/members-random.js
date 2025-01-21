/* ******************************************************************************** */

//Fetching JSON to be displayed
const membersUrl = 'data/members.json';
const cards = document.querySelector('#members');

async function getMemberData() {
	const response = await fetch(membersUrl);
	const data = await response.json();
	//console.table(data.members);
	renderRandomMembers(data.members);
}

getMemberData();

//showing all simple services
function renderRandomMembers(members) {
	let list = members.filter(function (member) {return member.membershiplevel > 1; });
	let newList = list.slice(0,3);
	list = shuffle(newList);
	displayMembers(list);
}

function displayMembers(members) {
	members.forEach((member) => {
		// Creating main card
		let card = document.createElement('div');
		card.classList.add("member-section");
		let fullName = document.createElement('h3');
		let line = document.createElement('hr');
		//Creating secundary card
		let portrait = document.createElement('img');
		portrait.classList.add("potrait-img");
		let logo = document.createElement('img');
		logo.classList.add("logo-img");

		let company = document.createElement('p');
		company.textContent = `Company: ${member.companyname}`;
		let address = document.createElement('p');
		address.textContent = `Adrress: ${member.address}`;
		let phone = document.createElement('p');
		phone.textContent = `Phone: ${member.phone}`;
		let website = document.createElement('p');
		website.textContent = `Website: ${member.website}`;

		//Membership
		let membershiplevel = document.createElement('p');
		let membership = "Not member";
		if(member.membershiplevel == 1){membership = "Member";}
		else if(member.membershiplevel == 2){membership = "Silver Member";}
		else if(member.membershiplevel == 3){membership = "Gold Member";}
		membershiplevel.textContent = `Level: ${membership}`;

		// Build the h2 content out to show the prophet's full name
		fullName.textContent = `${member.name}`;
		// Build the image portrait by setting all the relevant attributes
		portrait.setAttribute('src', member.imageurl);
		portrait.setAttribute('alt', `Portrait of ${member.name}`);
		portrait.setAttribute('loading', 'lazy');
		// Build the image logo by setting all the relevant attributes
		logo.setAttribute('src', member.companylogo);
		logo.setAttribute('alt', `Portrait of ${member.name}`);
		logo.setAttribute('loading', 'lazy');

		// Appending sections
		card.appendChild(fullName);
		card.appendChild(line);
		card.appendChild(portrait);
		card.appendChild(company);
		card.appendChild(address);
		card.appendChild(phone);
		card.appendChild(website);
		card.appendChild(membershiplevel);
		card.appendChild(logo);

		cards.appendChild(card);
	}); // end of arrow function and forEach loop
}

//Shuffle function for JSON oject
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
/* ******************************************************************************** */