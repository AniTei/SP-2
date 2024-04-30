
/* User stories to happen on profile:
- able to log out
- able to edit avatar
- able to view total credit
(- able to create listing)

A registered user may logout
A registered user may update their avatar
A registered user may view their total credit
 */

// make relevant info show up:
// user name
// credit
// avatar image


// documentation
/* https://docs.noroff.dev/docs/v2/auction-house/profiles
 */
console.log("hello profile :))");

//pass profile by querystring?? 

/// CREATE KEY ///
import { createApiKey } from "./createApiKey.mjs";
import { apiKey } from "../endpoints.mjs";
const keyUrl = baseURL + apiKey;
console.log("keyUrl:",keyUrl);

const token = localStorage.getItem('token');

const keyOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },  
    body: JSON.stringify({
        "name": "My API Key name" 
      }),
}

await createApiKey(keyUrl, keyOptions );

// shouldnt make api key again, I should just get it from locale storage


///////////////////////// GET PROFILE, now we have token and key

import { baseURL } from "../endpoints.mjs";
import { exampleProfile } from "../endpoints.mjs";
const url = baseURL + exampleProfile;

/* const token = localStorage.getItem('token');*/
console.log("token:", token);

const key = localStorage.getItem('key');
console.log("key:", key);

async function getProfile (url, token, key){

    const options = {
   headers: {
     Authorization: `Bearer ${token}`,
     "X-Noroff-API-Key": key
     // so i need to make apiKey from response, or data, to refer to it?
   }
 }

 const response = await fetch(url, options)
 const data = await response.json()

 console.log("response:", response)
 console.log ("data:", data)
 console.log("name:", data.data.name)

 return data

}


// i get bamse_mums, w 1000 credit :)))
////////////////DISPLAY USER//////////////////////////

const h1 = document.querySelector("h1");
const profileContent = document.querySelector(".profile-content")

async function displayUser () {
    const profileGotten = await getProfile(url, token, key);
    console.log("profileGotten:", profileGotten)
    h1.innerHTML = `HELLO ${profileGotten.data.name}`
    profileContent.innerHTML = `<img src="${profileGotten.data.avatar.url}" alt="${profileGotten.data.avatar.alt}"> <p>Total credit: ${profileGotten.data.credits}<p>`;
};
displayUser();

