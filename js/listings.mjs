const listingsContainer = document.querySelector(".listings-container");
listingsContainer.innerHTML = `<p>hei</p>`;

import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";

/* const numberOfPosts = "12";
const limit = "?limit=" + numberOfPosts;
console.log ("limit:" , limit) */

const url = baseURL + allListings /* + limit */;
console.log("url:" , url)

async function displayData() {
  try {
    const value = await getData(url);
    console.log("in displayData, value: ", value)

    const value2 = value.data;
    console.log("dispayData function, value2", value2[3].title)

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < value2.length; i++) {

      listingsContainer.innerHTML += `<div
      class="card m-3 card col-12 col-sm-6 col-lg-4"
      style="width: 18rem">
    
      <div class="card-body">
        <h5 class="card-title">${value2[i].title}</h5>
        <p class="card-text"> ${value2[i].description}
        </p>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">Bids: ${value2[i]._count.bids}</li>
        <li class="list-group-item">Deadline: ${value2[i].endsAt}</li>
      </ul>

      <div class="card-body">
        <a href="html/listing.html?id=${value2[i].id}" class="card-link">open</a>
      </div>
    </div>`;
      
      
      
  /*     `<div
      class="card m-3 card col-12 col-sm-6 col-lg-4"
      style="width: 18rem">  
      <div class="card-body">
      <h3>${value2[i].title}<h3>
      <p class="card-text"> ${value2[i].description}
      </p> </div>
      <li class="list-group-item">Bids: ${value2[i]._count.bids}</li>
      <div class="card-body">
          <a href="../html/listing.html?id=${value2[i].id}" class="card-link">open</a>
        </div>
        </div>
      `; */

      /* listingsContainer.innerHTML += `<div
        class="card m-3 card col-12 col-sm-6 col-lg-4"
        style="width: 18rem">
        <img
          src="${value2[i].media[0].url}"
          class="card-img-top"
          alt="${value2[i].media[0].alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${value2[i].title}</h5>
          <p class="card-text"> ${value2[i].description}
          </p>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bids: ${value2[i]._count.bids}</li>
          <li class="list-group-item">Deadline: ${value2[i].endsAt}</li>
        </ul>

        <div class="card-body">
          <a href="html/listing.html?id=${value2[i].id}" class="card-link">open</a>
        </div>
      </div>`; */
    }
  } catch {}
}

displayData();



