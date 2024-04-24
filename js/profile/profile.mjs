// Kopiere inn det som ligger på github
// ok now i get response ok igjen

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
import { exampleProfile } from "../endpoints.mjs";
const url = baseURL + exampleProfile;

const token = localStorage.getItem('token');
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


////// i get bamsemums back!!!, w 1000 credit :)))

////////////////DISPLAY USER//////////////////////////
// I feel like I have ssooooo much left to learn :))
// HELLO USERNAME 

const h1 = document.querySelector("h1");

async function displayUser () {


h1.innerHTML ="trudeluuu"

const profileGotten = await getProfile(url, token, key);

console.log("profileGotten:", profileGotten)

h1.innerHTML = `HELLO ${profileGotten.data.name}😍`

/* console.log("inni getProfile:", data) */

    // how was it i used return 
    // MAKE A VALUE, i think, like const

}

displayUser();