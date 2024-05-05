//Story: A registered user may add a Bid to another user's Listing

/* Bid on listing
POST
/auction/listings/<id>/bids
Create new bid on a listing.
 */


// make POST-request
    // url, ok i think?
    // options
    // reload page for bid to be displayed.
    // wait a minute! I already have this endpoint in display bids??



// url 
// url 
import { baseURL } from "../endpoints.mjs";
import { allListings } from "../endpoints.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = baseURL + allListings + id;
console.log("addBid url:", url);

const makeBid = "/bids"

const bidUrl = url + makeBid;
console.log("addBid urlBids",bidUrl);
console.log("/auction/listings/<id>/bids")


const token = localStorage.getItem('token');
const key = localStorage.getItem('key');

/////////

const alertElement = document.querySelector('#formHelp');
console.log("alertElement, addBid:", alertElement);
import { errorMessage } from "../registerAndLogin/errorMessage.mjs";
// first try to get error message

const bidForm = document.querySelector("form");
console.log("logging bid form:",bidForm )
bidForm.addEventListener("submit", collectFormInput);


//get values from form

 async function collectFormInput(event) {
    event.preventDefault();
  
    alertElement.innerHTML = "";
  
/*     const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());
    console.log("bid, collect form input, from form:",informationPutIn); */

    const bidValue = document.querySelector('#bidInput').value;

console.log("bidValue", bidValue);

const bidValueNumber = Number(bidValue)


    //build object for option 
    // first just hard code :))
    const obj = {
        amount: bidValueNumber
      }

console.log("obj:", obj);
console.log(typeof bidValueNumber);


  
    try {
      await makeContact(obj);
    } catch (error) {
      console.log(error);
    }
  }
// start contact func in 



async function makeContact (bid){

//options
const bidOptions = {
    method: "POST",
    body: JSON.stringify(bid),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": key
    },
  };

   
    const response = await fetch(bidUrl, bidOptions);
    const json = await response.json();
  
    console.log("bid, makeContact, json:",json);
    console.log("bid, makeContact, response:", response)

    try{

        //if success, reload, for bid to show up
/*         successMessage(response, alertElement);
 */        

reloadPage(response);
errorMessage(json, response, alertElement);
    }
    catch (error){
      console.log("error:", error)
    }
};

//getting 500 for now, but made contact w server at least


function reloadPage (response){
    if(response.ok){
            location.reload(); 

    }
};

/// 16:51, it worked!!!, next clean up!!