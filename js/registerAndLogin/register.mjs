// User story: a user can register with a noroff email


import { baseURL } from "../endpoints.mjs";
import { register } from "../endpoints.mjs";

import { errorMessage } from "./errorMessage.mjs";
import { successMessage } from "./successMessage.mjs";

const url = baseURL + register;

console.log("url:", url); 

const publishForm = document.querySelector("#register-form");
publishForm.addEventListener("submit", collectRegisterInput);

const alertElement = document.querySelector("#registerHelp");
console.log("alertElement:", alertElement);

/**This function selects input from form on submit, 
 * creates an object
 * and passes that object into another function that makes use of it
 * 
 * @param {*} event 
 * @example
 * ```js
 * // prevents refresh
    event.preventDefault();

// collects form input and turns it into an object
    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());
    
    try {
// passes new object into function to make use of it
        await registerUser(informationPutIn)

 * ```
 */

async function collectRegisterInput(event) {
  event.preventDefault();

  alertElement.innerHTML = "";

  const form = event.target;
  const formData = new FormData(form);
  const informationPutIn = Object.fromEntries(formData.entries());

  console.log(informationPutIn);

  try {
    await registerUser(informationPutIn);
  } catch (error) {
    console.log(error);
  }
}



/**Function makes use of an object to create a user in the api
 * 
 * @param {object} userInput objest with required information to create user
 * @example 
 * ```js
 * //options contains object to create user
    const optionsForRegistering = {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json",
        },
    };
// makes contact with api
    const response = await fetch(url, optionsForRegistering);
    const json = await response.json();

    console.log(response);
 * ```
 */
async function registerUser(userInput) {
  const optionsForRegistering = {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, optionsForRegistering);
  const json = await response.json();

  console.log("response:",response);

  try{
      successMessage(response, alertElement);
      errorMessage(json, response, alertElement);
  }
  catch (error){
    console.log("error:", error)
  }
}

