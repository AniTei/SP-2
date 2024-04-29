
/* 
import { baseURL } from "../endpoints.mjs";
import { apiKey } from "../endpoints.mjs";
const url = baseURL + apiKey;
console.log("url:",url) */

/* const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },  
    body: JSON.stringify({
        "name": "My API Key name" 
      }),
} */


export function loginSuccess (json, response) {
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
  };