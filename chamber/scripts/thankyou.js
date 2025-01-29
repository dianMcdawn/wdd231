// Variables declarations
/*const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('firstname');*/
const currentUrl = window.location.href;
const showInfo = document.querySelector("#submittion");

//Separating params from url
const paramAndUrl = currentUrl.split('?');
console.log(paramAndUrl);

//Separating each params
let formParams = paramAndUrl[1].split('&');
console.log(formParams);

//Function to show each element from submitted form on screen
function showFormData(search){
    formParams.forEach((param) => {
        if (param.startsWith(search)){
            result=param.split('=')[1].replace("%40","@");
            result=result.replace("+"," ");
            result=result.replace("%3A",":");
            result=result.replace("%3A",":");
            result=result.replace("%2B","+");
        }
    })
    return(result);
}

//Timestamp
let subDate = showFormData("timestamp").split(' ')[0];
let subStamp = showFormData("timestamp").split(' ')[1];

//Membership
let memberlevel = '';
if(showFormData("memberlevel") == 0) {memberlevel = 'NP';}
if(showFormData("memberlevel") == 1) {memberlevel = 'Bronze';}
if(showFormData("memberlevel") == 2) {memberlevel = 'Silver';}
if(showFormData("memberlevel") == 3) {memberlevel = 'Gold';}


let resultHTML = `
<span>Dear ${showFormData("firstname")} ${showFormData("lastname")},</span>
<p>Thank you for submitting your information, we received your submition on ${subDate}, at ${subStamp} hr.</p>
<p>We will send you to your email ${showFormData("email")} all the information about your ${memberlevel} membership.
We will also contact you to your phone number ${showFormData("phone")}.</p>`;

if(showFormData("organization") !== "" || showFormData("business") !== "" || showFormData("description") !== "")
{ resultHTML = resultHTML + `You also provided us te following information:</p>`;}

if(showFormData("organization") !== "") {resultHTML = resultHTML + `<p>Organization Title: ${showFormData("organization")}</p>`;}
if(showFormData("business") !== "") {resultHTML = resultHTML + `<p>Organization Name: ${showFormData("business")}</p>`;}
if(showFormData("description") !== "") {resultHTML = resultHTML + `<p>Descriptione: ${showFormData("description")}</p>`;}

showInfo.innerHTML = resultHTML;