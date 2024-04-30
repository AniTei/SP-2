console.log("avatar");

// user story: able to edit avatar

// url
import { baseURL } from "../endpoints.mjs";
import { exampleProfile } from "../endpoints.mjs";
const url = baseURL + exampleProfile 

const formForEditingAvatar = document.querySelector("#edit-avatar-form");
const alertElement = document.querySelector("#formHelp");

formForEditingAvatar.addEventListener("submit", collectFormInput);

async function collectFormInput(event) {
    event.preventDefault();
    alertElement.innerHTML = "";

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    // ok, form info is logged when update is pressed
    // men jeg får invalid api? unless i update? er det noe promise?
    console.log("fromForm:",informationPutIn);

    const objjj = {informationPutIn}
    
    console.log("objjj:", objjj)

    try {
      await editAvatar(informationPutIn);
    } catch (error) {
      console.log(error);
    }
  }


// get token and //key from locale storage:))

const token = localStorage.getItem('token');
const key = localStorage.getItem('key');

import { errorMessage } from "../registerAndLogin/errorMessage.mjs";
import { successMessage } from "../registerAndLogin/successMessage.mjs";

//make PUT request, 
async function editAvatar (userInput){

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

    console.log("test2:", userInput);

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