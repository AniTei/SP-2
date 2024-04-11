import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";
import { bids } from "./endpoints.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = baseURL + allListings + id;
console.log(url);

const urlBids = url + bids;
console.log(urlBids);

const bidsContainer = document.querySelector(".bids-container");

export async function displayBids() {
  const value = await getData(urlBids);
  console.log("displayBids value:", value.data.bids);
  
  bidsContainer.innerHTML = "";

  for (let i = 0; i < value.data.bids.length; i++) {
  
    bidsContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${value.data.bids[i].bidder.name}</div>
        <p>Created: ${value.data.bids[i].created} </p>
      </div>
      <span class="badge text-bg-primary rounded-pill">${value.data.bids[i].amount} €</span>
    </li>`;
  }
};

