// user can...

// make request, display user info

// possible to make listing. 

/* User stories to happen on profile:
- able to log out
- able to create listing
- able to edit avatar
- able to view total credit

A registered user may logout
A registered user may update their avatar
A registered user may view their total credit

 */

// make relevant info show up:
// user name


// documentation
/* https://docs.noroff.dev/docs/v2/auction-house/profiles
 */
console.log("hello profile :))");

//pass profile by querystring?? 
// or locale storage?


import { baseURL } from "../endpoints.mjs";
const exampleProfile =  "/auction/profiles/<bamse_mums>"

const token = localStorage.getItem('token');
console.log("token:", token)



////////////////////////////////API KEY//////////////////////////////////////

//error: Object { message: "No API key header was found" }

/* API Key
Create and use an API Key to access the Noroff API. 

https://docs.noroff.dev/docs/v2/auth/api-key

*/

const apiKey = "/auth/create-api-key"
const url = baseURL + apiKey;
console.log("url:",url)

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },  
    body: JSON.stringify({
        "name": "My API Key name" // Optional
      }),
    /* body: JSON.stringify(), */

    //documentation says: A successful response will return a 201 Created status code and the newly created API Key.
    ////// I GOT A 201 response OK???!!!! :)
}

async function createApiKey(url, options) {

    const response = await fetch(url, options);
    const data = await response.json();

    console.log("response:", response)
    console.log ("data:", data)

};
createApiKey(url, options);

//error in response, internal server error, 500

/* {
    "data": {
      "name": "My API Key name", // Or "API Key" if no name was provided
      "status": "ACTIVE",
      "key": "be4ab55c-d5b0-44c3-8a11-67a7dafddd10" // The API Key
    },
    "meta": {}
  } */