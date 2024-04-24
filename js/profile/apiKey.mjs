//now i get response ok igjen

console.log("hello create-listing, working on api-key :))");

import { baseURL } from "../endpoints.mjs";
import { apiKey } from "../endpoints.mjs";
const url = baseURL + apiKey;
console.log("url:",url)

const token = localStorage.getItem('token');
console.log("token:", token)

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

async function createApiKey(url, options) {

    const response = await fetch(url, options);
    const apiKey = await response.json();

    console.log("response:", response)
    console.log ("key:", apiKey.data.key)

    localStorage.setItem("key", apiKey.data.key);

};
createApiKey(url, options);

const key = localStorage.getItem('key');
console.log("localestorage key:", key)



// i get the right response, now how do i get thet key out of the function?