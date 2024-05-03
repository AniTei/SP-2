//now i get response ok igjen

import { baseURL } from "../endpoints.mjs";
import { apiKey } from "../endpoints.mjs";
const url = baseURL + apiKey;

const token = localStorage.getItem('token');
console.log("createApi, token:", token)

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },  
    body: JSON.stringify({
        "name": "My API Key name" 
      }),
}

export async function createApiKey(url, options) {

    const response = await fetch(url, options);
    const apiKey = await response.json();

    console.log("createApiKey, response:", response)
    console.log ("apiKey.data.key in create, line 27:", apiKey.data.key)
    // this one is called two times, 
    //which means the whole fumc is called two times, which it shouldnt?
    localStorage.setItem("key", apiKey.data.key);
    const key = localStorage.getItem('key');
    console.log("inside createApiKey line 36, key:", key)

};
/* createApiKey(url, options);
 */



// i get the right response, now how do i get thet key out of the function?
// token / key? hvordan få begge, 
// first I need the token, because I need the token to get the key, 
// WHERE DO I GET TOKEN FROM haha

// this is super wierd, it has to be bacause its called twice
// but where?? 
// here AND in profile :)))

// did I fix it by commenting out calling the function in this file?? :)

// log out and in to check 
// got invalid API key, men det funker når jeg trykker oppdater i nettleseren
// one is from editAvatar, 
// the other oene is logged from create api and profile

// if I press update button "invalid api"

// if i reload page by browser, ok

// which key is invalid??? 