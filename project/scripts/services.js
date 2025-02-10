//Services div and dialog
const services = document.querySelector('#services');
const servicesDetails = document.querySelector('#services-info');
const servicesDetailsTitle = document.querySelector('#services-info h2');
const servicesDetailsInfo = document.querySelector('#services-info #services-description');
const servicesDetailsClose = document.querySelector('#services-info #dialog-close');
servicesDetailsClose.addEventListener("click", () => servicesDetails.close())

//Some Navigations const
const all = document.querySelector('#all');
const simples = document.querySelector('#simples');
const advanced = document.querySelector('#advanced');
const full = document.querySelector('#full');

/* *********************** */

//Fetching JSON to be displayed
const url = 'data/services.json';

async function getServicesData(option) {
	const response = await fetch(url);
	const data = await response.json();

    if(option == 1) {renderAllservices(data.services);}
    if(option == 2) {renderSimpleServices(data.services);}
    if(option == 3) {renderAdvancedServices(data.services);}
    if(option == 4) {renderFullServices(data.services);}
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

//Templating all service
function renderAllservices(services) {
    displayService(services);
}

//showing all simple services
function renderSimpleServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Simple'; });
    displayService(list);
}

//showing all simple services
function renderAdvancedServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Advanced'; });
    displayService(list);
}

//showing all simple services
function renderFullServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Full'; });
    displayService(list);
}

//Showing results of array
try {
    getServicesData(1);
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
}

//Some actions

//Show all temples
all.addEventListener('click', function () {
    // Code to execute when the button is clicked
    getServicesData(1);
});

simples.addEventListener('click', function () {
    // Code to execute when the button is clicked
    getServicesData(2);
});

advanced.addEventListener('click', function () {
    // Code to execute when the button is clicked
    getServicesData(3);
});

full.addEventListener('click', function () {
    // Code to execute when the button is clicked
    getServicesData(4);
});

function showStuff(service) {
    servicesDetailsTitle.innerHTML = `${service.serviceName}`;
    servicesDetailsInfo.innerHTML = `Description: ${service.description}`;
    servicesDetails.showModal();
}