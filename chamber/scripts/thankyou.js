// Variables declarations
/*const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('firstname');*/
const currentUrl = window.location.href;
const showInfo = document.querySelector("#reviews");

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
        }
    })
    return(result);
}
let memberlevel = '';
if(showFormData("membership") == 0) {memberlevel = 'NP';}
if(showFormData("membership") == 1) {memberlevel = 'Bronze';}
if(showFormData("membership") == 2) {memberlevel = 'Silver';}
if(showFormData("membership") == 3) {memberlevel = 'Gold';}

let resultHTML = `
<p>Thank you ${showFormData("firstname")} ${showFormData("lastname")}, we received your submition on ${showFormData("timestamp")} we will send you to your email ${showFormData("email")} all the information about your ${memberlevel} membership.
We will also contact you to your phone number ${showFormData("phone")}.`;

if(showFormData("organization") !== "" || showFormData("business") !== "" || showFormData("description") !== "")
{ resultHTML = resultHTML + `You also provided us te following information:</p>`;}

if(showFormData("organization") !== "") {resultHTML = resultHTML + `<p>Organization Title: ${showFormData("organization")}</p>`;}
if(showFormData("business") !== "") {resultHTML = resultHTML + `<p>Organization Name: ${showFormData("business")}</p>`;}
if(showFormData("description") !== "") {resultHTML = resultHTML + `<p>Descriptione: ${showFormData("description")}</p>`;}

showInfo.innerHTML = resultHTML;