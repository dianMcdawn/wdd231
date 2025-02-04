/* ******************************************************************************** */

/* Using json for membership */
//Fetching JSON to be displayed
const url = 'data/places.json';

async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data.places);
}

getPlacesData();

/* ******************************************************************* */
const placeCards = document.querySelector('#places');
const placeDetails = document.querySelector('#places-dialog-desc');
const placeDetailsTitle = document.querySelector('#places-dialog-desc #places-dialog-title');
const placeDetailsInfo = document.querySelector('#places-dialog-desc #places-dialog-description');
const placeDetailsClose = document.querySelector('#places-dialog-desc #places-dialog-close');
placeDetailsClose.addEventListener("click", () => placeDetails.close())

function displayItems(data) {
    data.forEach(x => {
        let card = document.createElement('div');
        card.classList.add("places-section");
        card.setAttribute("id", `member${x.id}`);

		//Name
        let fullName = document.createElement('h2');
        fullName.textContent = `${x.name}`;

		//Image
		let figure = document.createElement('figure');
		let figcaption = document.createElement('figcaption');
		figcaption.textContent = ``;
		let image = document.createElement('img');
		image.classList.add("places-img");
		image.setAttribute('src', x.imageurl);
		image.setAttribute('alt', `Portrait of ${x.name}`);
		image.setAttribute('loading', 'lazy');
		figure.appendChild(figcaption);
		figure.appendChild(image);

		//Description
		let description = document.createElement('p');
        description.textContent = `${x.description}`;

		//Address
		let address = document.createElement('address');
        address.textContent = `${x.address}`;

        let buttonRead = document.createElement('button');
        buttonRead.textContent = `Learn more`;
        buttonRead.classList.add("places-link");
        buttonRead.addEventListener('click', () => showStuff(x));

        //Appending data to main cards
        card.appendChild(fullName);
		card.appendChild(figure);
		card.appendChild(description);
		card.appendChild(address);
        card.appendChild(buttonRead);
        placeCards.appendChild(card);
    })
}

function showStuff(x) {
    placeDetailsTitle.innerHTML = `${x.name}`;
    placeDetailsInfo.innerHTML = x.description;
    placeDetails.showModal();
}

/* ******************************************************************* */