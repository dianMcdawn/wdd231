/* TimeStamp for hidden input */

const todayMark = new Date();
const yearMark = todayMark.getFullYear();
let monthMark = todayMark.getMonth() + 1;
let dayMark = todayMark.getDate();
let hourMark = todayMark.getHours();
let minuteMark = todayMark.getMinutes();
let secondsMark = todayMark.getSeconds();

let timeStamp = `${yearMark}-${monthMark}-${dayMark} ${hourMark}:${minuteMark}:${secondsMark}`;

const dateMark = document.querySelector("#timestamp");
dateMark.value = timeStamp;

/* Using json for membership */
//Fetching JSON to be displayed
const url = 'data/membership.json';

async function getMembershipData() {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data.membership);
}

getMembershipData();

/* ******************************************************************* */
const membershipCards = document.querySelector('#membership');
const membershipDetails = document.querySelector('#membership-desc');
const membershipDetailsTitle = document.querySelector('#membership-desc h2');
const membershipDetailsInfo = document.querySelector('#membership-desc p');
const membershipDetailsClose = document.querySelector('#membership-desc #dialog-close');
membershipDetailsClose.addEventListener("click", () => membershipDetails.close())

function displayItems(data) {
    data.forEach(x => {
        let card = document.createElement('div');
        card.classList.add("membership-section");
        card.setAttribute("id", `member${x.id}`);
        let fullName = document.createElement('h3');
        fullName.textContent = `${x.membershipName} Membership`;

        let buttonRead = document.createElement('button');
        buttonRead.textContent = `Read more`;
        buttonRead.classList.add("membership-link");
        buttonRead.addEventListener('click', () => showStuff(x));

        //Appending data to main cards
        card.appendChild(fullName);
        card.appendChild(buttonRead);
        membershipCards.appendChild(card);
    })
}

function showStuff(x) {
    membershipDetailsTitle.innerHTML = `${x.membershipName} Membership`;
    membershipDetailsInfo.innerHTML = x.description;
    membershipDetails.showModal();
}

/* ******************************************************************* */