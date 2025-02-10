/* ******************************************************************************** */

//Fetching JSON to be displayed
const membersUrl = 'data/services.json';
const services = document.querySelector('#services');
const servicesDetails = document.querySelector('#services-info');
const servicesDetailsTitle = document.querySelector('#services-info h2');
const servicesDetailsInfo = document.querySelector('#services-info #services-description');
const servicesDetailsClose = document.querySelector('#services-info #dialog-close');
servicesDetailsClose.addEventListener("click", () => servicesDetails.close())

async function getServiceData() {
	const response = await fetch(membersUrl);
	const data = await response.json();
	//console.table(data.members);
	renderRandomService(data.services);
}

getServiceData();

//showing all simple services
function renderRandomService(services) {
	let List = services.slice(0,3);
	list = shuffle(List);
	displayService(list);
}

//Function to template a service
function displayService(data) {
    services.innerHTML = "";
    data.forEach(service => {
        let card = document.createElement('div');
        card.classList.add("service");
        card.setAttribute("id", `${service.id}`);
        let cardTitle = document.createElement('div');
        cardTitle.classList.add("service-element");
        cardTitle.classList.add("service-title");
        cardTitle.textContent = `${service.serviceName}`;
        
        let cardCat = document.createElement('div');
        cardCat.classList.add("service-element");
        cardCat.classList.add("service-desc");
        cardCat.textContent = `Category: ${service.category}`;
        let cardType = document.createElement('div');
        cardType.classList.add("service-element");
        cardType.classList.add("service-desc");
        cardType.textContent = `Pack: ${service.type}`;
        let cardCost = document.createElement('div');
        cardCost.classList.add("service-element");
        cardCost.classList.add("service-desc");
        cardCost.textContent = `Cost: $${service.cost} CLP`;

        let buttonRead = document.createElement('button');
        buttonRead.textContent = `Read more`;
        buttonRead.classList.add("service-link");
        buttonRead.addEventListener('click', () => showStuff(service));

        //Appending data to main cards
        card.appendChild(cardTitle);
        card.appendChild(cardCat);
        card.appendChild(cardType);
        card.appendChild(cardCost);
        card.appendChild(buttonRead);
        services.appendChild(card);
    })
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

function showStuff(service) {
    servicesDetailsTitle.innerHTML = `${service.serviceName}`;
    servicesDetailsInfo.innerHTML = `Description: ${service.description}`;
    servicesDetails.showModal();
}
/* ******************************************************************************** */