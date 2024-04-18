// User story: a user can register with a noroff email

/* What needs to happen? 
1a. user can put relevant information into form
1b. find out what is relevant information
1c. update register form.
1d. make information into object, collectFormInput
2a. write function for contacting server
3a. if successful, send user to profile.html
3b. if failed, give user relevant error masssges.

*/

/* note? Make an object, maybe do it backwards,
first make the function, then make the params, params being, url and?

url is probably ok

the infor object is also probably ok, 

first make object, and make object be the return og harvestFunction, harvest value :)*/

/* next make contact w server, and get error, work on error handling */

/* _______________________KOPI fra js2_________________________ */

/* URL */
const url = "https://v2.api.noroff.dev/auth/register";

const publishForm = document.querySelector("#register-form");
publishForm.addEventListener("submit", collectLoginInput);

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

async function collectLoginInput(event) {
  event.preventDefault();

  alertElement.innerHTML = "";

  const form = event.target;
  const formData = new FormData(form);
  const informationPutIn = Object.fromEntries(formData.entries());

  /* lager objekt :) */
  console.log(informationPutIn);

  try {
    await registerUser(informationPutIn);
  } catch (error) {
    console.log(error);
  }
}

const alertElement = document.querySelector("#registerHelp");
console.log("alertElement:", alertElement);

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



  // error messages works fine, now work on success
/*   console.log("json:", json);
  console.log("errormessage:", json.errors[0].message);

  if (!response.ok) {
    console.log("response is not ok :(");

    for (let i = 0; i < json.errors.length; i++) {
      alertElement.innerHTML += `
          <div  class="form-text alert alert-danger">
            <p>Server says: ${json.errors[i].message}</p>
          </div>`;
    }
  } */




  // denne funker når den if-statement for errors er commented out :) 
  if (response.ok) {

    // prøv deg litt fram med response

    console.log("response is ok :)");

    alertElement.innerHTML = `
            <div  class="form-text alert alert-success">
            <p>You successfully registered, go to Login to log in</p>
          </div>`;

    // tror det er grenser for hvor mange if jeg kan ha etter hverandre??. try catch??
  }
}
