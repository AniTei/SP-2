console.log("hello editAvatar");

///// user story: able to edit avatar /////

// url
import { baseURL } from "../endpoints.mjs";
import { exampleProfile } from "../endpoints.mjs";
const url = baseURL + exampleProfile 

// token and key, for request
const token = localStorage.getItem('token');
const key = localStorage.getItem('key');
console.log("editAvatar, key", key)

//form 
const formForEditingAvatar = document.querySelector("#edit-avatar-form");
const alertElement = document.querySelector("#formHelp");
console.log(formForEditingAvatar);
console.log(alertElement);

// trigger request
formForEditingAvatar.addEventListener("submit", collectFormInput);

//func, collect 
async function collectFormInput(event) {
    event.preventDefault();
    alertElement.innerHTML = "";

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    // ok, form info is logged when update is pressed
    // men jeg får invalid api? unless i update? er det noe promise?
    console.log("fromForm:",informationPutIn);   
    console.log("what is the key? in locale S", key) 

    try {
      await editAvatar(informationPutIn);
    } catch (error) {
      console.log(error);
    }
};

// get token and key from locale storage


import { errorMessage } from "../registerAndLogin/errorMessage.mjs";

//make PUT request, 
async function editAvatar (userInput){

    const token = localStorage.getItem('token');
const key = localStorage.getItem('key');
console.log("editAvatar, key", key)



    const optionsForEdit = {
        method: "PUT",
        body: JSON.stringify({avatar: userInput}),

          // det funker!!! hvis jeg opdaterer :)
          // men det er veeeldig rotete nå

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": key
        },
    };

    console.log("test userInput:", userInput);

    const response = await fetch(url, optionsForEdit);
    const json = await response.json();
  
    console.log("edit, PUT json:", json)
    console.log("edit, PUT response:",response);

    reloadPage(response);
    errorMessage(json, response, alertElement);
}; 
  

// use response??. no it will change the info in server
// so if I update page, what is returned will be updated. 

// prøve å få tilbake error og vise den på siden
// det funker!! error message og bytte ut bilde. :))



function reloadPage (response){
    if(response.ok){
            location.reload(); 

    }
};

// I still have two diff keys in console???
// why does editAvatar func use an old key? 
// what does it mean that the key changes?
// the function for key is run more than once?

// key is null!!
// afer login, for some reason, 
// it is gotten for filling profile, but not saved? or?

// er det fordi den lager ny key hver gang jeg opdaterer siden?
// når et det jeg opdaterer siden?


// hva skjer??

/* Jeg logger inn
og hvis bruker er ok så henter profil brukeren
men dette skjer hver gang jeg kommer inn på profil,
som vil si at hver gang bruker blir lastet er det create api, not great
Det stemmer, hver gang jeg oppdaterer profil lager den ny key
CreateApi should not run every time you go to profile */
// nå får jeg ikke logge inn heller, rart 

//1009, edit funker ikke, 