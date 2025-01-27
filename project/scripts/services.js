// Store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const album = document.querySelector('#services');
//Some Navigations const
const all = document.querySelector('#all');
const simples = document.querySelector('#simples');
const advanced = document.querySelector('#advanced');
const full = document.querySelector('#full');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//Constant of service
const services = [
    {
        serviceName: "Web Page",
        description: "I help you to desing, build and upload your personal or commercial web site",
        category: "Web",
        type: "Simple",
        cost: 500
    },
    {
        serviceName: "Web Software",
        description: "Let's transform your site into a proffessional site to manage your company",
        category: "Web",
        type: "Advanced",
        cost: 2000
    },
    {
        serviceName: "Web Full Desing and Implementation",
        description: "Building an entire web site wich works as a normal site, as a company softre and you can connect with any state service.",
        category: "Web",
        type: "Full",
        cost: 5000
    },
    {
        serviceName: "Web Hosting",
        description: "Help you fin perfect hosting services",
        category: "Hosting",
        type: "Simple",
        cost: 100
    },
    {
        serviceName: "Hosting for many services",
        description: "Help you find the bes option for all your projects",
        category: "Hosting",
        type: "Advanced",
        cost: 2000
    },
    {
        serviceName: "Full Hosting",
        description: "Transform your hosting into a plataform where you can manage everything.",
        category: "Hosting",
        type: "Full",
        cost: 5000
    },
    {
        serviceName: "Simple Database",
        description: "Help you understand and create simple database",
        category: "Database",
        type: "Simple",
        cost: 100
    },
    {
        serviceName: "Control Database",
        description: "You rceive Database intruction and help you to manage your DB in the best ways",
        category: "Database",
        type: "Advanced",
        cost: 2000
    },
    {
        serviceName: "Full Database Manager",
        description: "You will be prepared to take control of your databases, and a team will work for you for a short time to handle any problem.",
        category: "Database",
        type: "Full",
        cost: 5000
    }
];

//Function to template a service
function serviceCard(service) {
    return `<div class="service">
	  <div class="service-element service-title">${service.serviceName}</div>
	  <div class="service-element"><span class="service-desc">${service.description}</span></div>
	  <div class="service-element"><span class="service-desc">${service.category}</span></div>
	  <div class="service-element"><span class="service-desc">${service.type}</span></div>
      <div class="service-element"><span class="service-desc">${service.cost} $USD</span></div>
	  </div>`
}

//Templating all service
function renderAllservices(services) {
    const html = services.map(serviceCard);
    album.innerHTML = html.join("");
}

//showing all simple services
function renderSimpleServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Simple'; });
	const html = list.map(serviceCard);
	album.innerHTML = html.join("");
}

//showing all simple services
function renderAdvancedServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Advanced'; });
	const html = list.map(serviceCard);
	album.innerHTML = html.join("");
}

//showing all simple services
function renderFullServices(services) {
	let list = services.filter(function (dat) { return dat.type == 'Full'; });
	const html = list.map(serviceCard);
	album.innerHTML = html.join("");
}

//Showing results of array
renderAllservices(services);

//Some actions

//Show all temples
all.addEventListener('click', function () {
    // Code to execute when the button is clicked
    renderAllservices(services);
});

simples.addEventListener('click', function () {
    // Code to execute when the button is clicked
    renderSimpleServices(services);
});

advanced.addEventListener('click', function () {
    // Code to execute when the button is clicked
    renderAdvancedServices(services);
});

full.addEventListener('click', function () {
    // Code to execute when the button is clicked
    renderFullServices(services);
});