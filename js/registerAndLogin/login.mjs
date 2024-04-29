//user can login
// diff from register, deal with token and send user to profile. 

//URL
import { baseURL } from "../endpoints.mjs";
import { login } from "../endpoints.mjs";
const url = baseURL + login ;
console.log("url:", url)

const publishForm = document.querySelector("#register-form");
publishForm.addEventListener("submit", collectFormInput);

const alertElement = document.querySelector("#formHelp");
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

async function collectFormInput(event) {
  event.preventDefault();

  alertElement.innerHTML = "";
  localStorage.clear();

  const form = event.target;
  const formData = new FormData(form);
  const informationPutIn = Object.fromEntries(formData.entries());

  console.log(informationPutIn);

  try {
    await loginUser(informationPutIn);
  } catch (error) {
    console.log(error);
  }
}

//////////////////
import { loginSuccess } from "./loginsuccess.mjs";
import { errorMessage } from "./errorMessage.mjs";

//made contact , I get relevant error message
//errormessages show up :)

// what happens if I try a valid one? 
//bamse_mums@noroff.no didn't work, maybe it actually needs to be my email??
async function loginUser(userInput) {
    const optionsForRegistering = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const response = await fetch(url, optionsForRegistering);
    const json = await response.json();
  
    console.log("json:",json);
  
    try{

        //if success, just send user to profile?? 
/*         successMessage(response, alertElement);
 */        

loginSuccess(json, response);
errorMessage(json, response, alertElement);
    }
    catch (error){
      console.log("error:", error)
    }
  }

  // oops, make this separate file?
/*   function loginSuccess (json, response) {
    if(response.ok){

        console.log("this is the loginSuccess func saying hi")
        console.log("do we have a token?:", json.data.accessToken)

        localStorage.setItem("token", json.data.accessToken);

        console.log ("local storage holds:", localStorage)

        function takeUserToProfile() {
            window.location.href = "profile.html";
        }
        takeUserToProfile();
    }
  }; */