// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const album = document.querySelector('#main-classes');
const albumCred = document.querySelector('#main-credits');
//Some Navigations const
const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//Constant of temples
const classes = [
	{
		className: "CSE 110",
		type: "CSE",
		credits: 2,
		completed: true
	},
	{
		className: "WDD 130",
		type: "WDD",
		credits: 2,
		completed: true
	},
	{
		className: "CSE 111",
		type: "CSE",
		credits: 2,
		completed: true
	},
	{
		className: "CSE 210",
		type: "CSE",
		credits: 2,
		completed: true
	},
	{
		className: "WDD 131",
		type: "WDD",
		credits: 2,
		completed: true
	},
	{
		className: "WDD 231",
		type: "WDD",
		credits: 2,
		completed: false
	}
];

//Function to give a design to the class card
function classButton(classes) {
	let button = "";
	if(classes.completed == true){button = `<button class="button-aprov" title="Completed">${classes.className}</button>`;}
	else if(classes.completed == false){button = `<button class="button-pend" title="Pending">${classes.className}</button>`;}
	return button;
}

//Templating all temples
function renderAllClasses(classes) {
	const html = classes.map(classButton);
	album.innerHTML = html.join("");
	showCredits(classes);
}

//Showing all CSE classes
function renderCSEClasses(classes) {
	let list = classes.filter(function (dat) { return dat.type == "CSE"; });
	const html = list.map(classButton);
	album.innerHTML = html.join("");
	showCredits(list);
}

//Showing all WDD classes
function renderWDDClasses(classes) {
	let list = classes.filter(function (dat) { return dat.type == "WDD"; });
	const html = list.map(classButton);
	album.innerHTML = html.join("");
	showCredits(list);
}

//Show total of credits depending of list
function showCredits(list){
	const suma = list.reduce(function (resultado, dat) {
		return resultado + dat.credits;
	  }, 0);
	let string = `Total of credits: ${suma}`;
	albumCred.innerHTML = string;
}

//Showing results of array
renderAllClasses(classes);

//Show all temples
all.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderAllClasses(classes);
});

//Show old builded temples
cse.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderCSEClasses(classes);
});

//Show new builded temples
wdd.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderWDDClasses(classes);
});


/* ******************************************************************* */

function displayCourseDetails(course) {
	courseDetails.innerHTML = '';
	courseDetails.innerHTML = `
	<button id="closeModal">❌</button>
	<h2>${course.subject} ${course.number}</h2>
	<h3>${course.title}</h3>
	<p><strong>Credits</strong>: ${course.credits}</p>
	<p><strong>Certificate</strong>: ${course.certificate}</p>
	<p>${course.description}</p>
	<p><strong>Technologies</strong>: ${course.tecnology.join(', ')}</p>
	`;
	courseDetails.showModal();

	closeModal.addEventListener("click", () => {
		courseDetails.close();
	})
}

courseDiv.addEventListener('click', () => {
	displayCourseDetails(course);
})