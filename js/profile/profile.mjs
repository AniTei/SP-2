
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


console.log("hello profile :))");

//pass profile by querystring?? 

/// CREATE KEY /// 
/* import { createApiKey } from "./createApiKey.mjs";
import { apiKey } from "../endpoints.mjs";
const keyUrl = baseURL + apiKey;
console.log("keyUrl:",keyUrl); */



/* const keyOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },  
    body: JSON.stringify({
        "name": "My API Key name" 
      }),
} */

// I should probably not call CREATE apiKey here? or should I ?
// Just use it from storage?
// If i log in, when is the first time the apiKey is needed?
// /when is the first time it is called
// should be put in storage then. 
/* await createApiKey(keyUrl, keyOptions );
 */
// shouldnt make api key again, I should just get it from locale storage


///////////////////////// GET PROFILE, now we have token and key

import { baseURL } from "../endpoints.mjs";
import { exampleProfile } from "../endpoints.mjs";
const url = baseURL + exampleProfile;

const token = localStorage.getItem('token');
console.log("token in profile, line 59:", token);
const key = localStorage.getItem('key');
console.log("key in profile, line 60:", key);

async function getProfile (url, token, key){

    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": key
     // so i need to make apiKey from response, or data, to refer to it?
     // maybe not make a new one?
        }
    }

 const response = await fetch(url, options)
 const data = await response.json()

 console.log("profile, getProfile, response:", response)
 console.log ("profile, getProfile, data:", data)
 console.log("profile, getProfile, name:", data.data.name)

 return data
};

////////////////DISPLAY USER//////////////////////////

// elements to fill, on profile
const h1 = document.querySelector("h1");
const profileContent = document.querySelector(".profile-content")

// I should do something to divide this? separate file?
async function displayUser () {
    const profileGotten = await getProfile(url, token, key);
    console.log("profileGotten, from getProfile:", profileGotten)
    h1.innerHTML = `HELLO ${profileGotten.data.name}`
    profileContent.innerHTML = `<img src="${profileGotten.data.avatar.url}" alt="${profileGotten.data.avatar.alt}"> <p>Total credit: ${profileGotten.data.credits}<p>`;
};
displayUser();

