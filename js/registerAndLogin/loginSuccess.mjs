
import { baseURL } from "../endpoints.mjs";
import { apiKey } from "../endpoints.mjs";
const url = baseURL + apiKey;
console.log("url:",url)

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

import { createApiKey } from "../profile/createApiKey.mjs";

export async function loginSuccess (json, response) {
    if(response.ok){

        console.log("this is the loginSuccess func saying hi")
        console.log("do we have a token?:", json.data.accessToken)

        localStorage.setItem("token", json.data.accessToken);
        const token = localStorage.getItem('token');


        console.log ("local storage holds:", localStorage)

        //its works until here

        // just place options in here for now?
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


        /* await createApiKey(keyUrl, keyOptions );
 */
        await createApiKey(url, keyOptions);

        console.log ("local storage holds 2 :", localStorage)
        // now we have both a token and a key!!!
        // createApiKey should not be run again, now that we have it 

console.log("json.data.name, in success",json.data.name)
localStorage.setItem("userID", json.data.name);




// createApiKey should be run here, not on profile,
// becase, key should only be created once, 
// and then used when needed. maybe 
// use token to get key
// when key is set in storage, take user to profile
// then use token and key to get user content
// use token and key to edit avatar?


// don't take user to profile for now, make key first
        function takeUserToProfile() {
            window.location.href = "profile.html";

/*             window.location.href=`profile.html?id=${json.data.name}`;
 */

        }
        takeUserToProfile();


    }
  };

