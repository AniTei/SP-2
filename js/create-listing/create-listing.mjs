//Story: A registered user may create a Listing 
//with a title, deadline date, media gallery and description

/* Create listing

POST
/auction/listings
Create a new listing. 
The title and endsAt properties are required, 
but we recommend at least including the description and media properties as well. */

//TO DO

// connect html and mjs
// frist make contact w server,
// error handling. 
// make object to send

// request example form documentation
/* {
  "title": "string", // Required
  "description": "string", // Optional
  "tags": ["string"], // Optional
  "media": [
    {
      "url": "https://url.com/image.jpg",
      "alt": "string"
    }
  ], // Optional
  "endsAt": "2020-01-01T00:00:00.000Z" // Required - Instance of new Date()
} */


console.log("hello create :)")

// url
import { baseURL } from "../endpoints.mjs"
import { allListings } from "../endpoints.mjs"
const url = baseURL + allListings;
console.log("create, url:" , url);

//form
const form = document.querySelector('form');
console.log("dette er skjemat:", form);

form.addEventListener('submit', makeListing);

//error element
const alertElement = document.querySelector('#formHelp');
console.log("alertElement:", alertElement);

// func for making obj
async function makeListing (event){
    event.preventDefault();
    console.log("makeListing function saying hi");

    alertElement.innerHTML = "";

    //Expected array, received string, dvs media
    /* const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries()); */


    //first just try to hardcode an object
    // it works
    // now connect it to form
    //loop ?? or name?


/*     const titleValue = "hello";
 */    /* const descriptionValue = ", dette er en beskrivelse";
    const urlValue = "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bamsemums.JPG";
    const endsAtValue = "2024-05-06T09:37:00.000Z"; */

 
    const titleValue = document.querySelector('#titleInput').value;
    const urlValue = document.querySelector('#mediaInput').value;
    const descriptionValue = document.querySelector('#descriptionInput').value;
    const endsAtValue = document.querySelector('#deadlineInput').value;

    const newListing = {
        title: titleValue,
        description: descriptionValue,
        media: [
          {
            url: urlValue,
          }
        ],
        endsAt: endsAtValue,
      };
  
    console.log("from form:", newListing);

    try {
        await publishListing(newListing);
    } catch (error) {
        console.log(error);
    }
};

import { createSuccess } from "./createSuccess.mjs";
import { errorMessage } from "../registerAndLogin/errorMessage.mjs";
const token = localStorage.getItem('token');
const key = localStorage.getItem('key');


// func for making contact
async function publishListing (object){

    //options
    const createOptions = {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": key,
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    const response = await fetch(url, createOptions);
    const data = await response.json();

    console.log("makeContact, response:", response);
    console.log("makeContact, data:", data);

    try{
        
        createSuccess (data, response);

        errorMessage(data, response, alertElement);
    }
    catch (error){
      console.log("error:", error)
    }
};


//////////////////////////////////////////////////////////

// server says, 500, something went wrong, 
// kanskje fordi det ikke er noe objekt?

// når jeg sender noe så får jeg 400, 
// så nå er det neste å få til objektet

//"2024-05-06T09:37:00.000Z"

/* yyyy-mm-ddThh:mm:ss.000Z */

//Expected array, received string, dvs media

/* {
  "title": "string", // Required
  "description": "string", // Optional
  "tags": ["string"], // Optional
  "media": [
    {
      "url": "https://url.com/image.jpg",
      "alt": "string"
    }
  ], // Optional
  "endsAt": "2020-01-01T00:00:00.000Z" // Required - Instance of new Date()
} */

// jeg tror det funker??!!, men hva skal jeg gjøre med listingen??
//send user to it by querystring??


const bamsTest1 = "93c62068-4736-411c-bdc3-5efbb0a02838";

const iMadeAListing = url + bamsTest1;

console.log("finne igjen listingen min", iMadeAListing);