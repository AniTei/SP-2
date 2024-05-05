const listingsContainer = document.querySelector(".listings-container");
listingsContainer.innerHTML = `<p>hei</p>`;

import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";

const url = baseURL + allListings;
console.log("url:" , url)

const value = await getData(url);

async function displayData(value) {
  try {
    console.log("in displayData, value: ", value)
    console.log("value . something:", value.data)

    const value2 = value.data;
    console.log("dispayData function, value2", value2)

    listingsContainer.innerHTML = "";

    //loop through data, and display, find way wo/ innerHTML
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
displayData(value);



//////////////////
const searchBar = document.querySelector("input");
console.log("searchBar:", searchBar)

searchBar.onkeyup = function harvestValue(event) {
  event.preventDefault();
  console.log("input:", searchBar.value);

  const criterium = searchBar.value.toLowerCase();
  console.log("criterium:", criterium);

  filterListings(criterium, value);

};

async function filterListings(kriterium, listings) {
  console.log("Kriterium:", kriterium);
  console.log("listings in filterListings(), to be filtered:", listings);

  // make new array from data gotten
  const filteredListings = listings.data.filter(function (listing) {
    if (listing.title.toLowerCase().startsWith(kriterium)) {
      return true;
    }
  });
  console.log("filteredListings in filterListings:", filteredListings);
  displaySearchResults(filteredListings);
};



// new element, display searchResults()

async function displaySearchResults(filteredListings) {
  try {
    //ok until here
    console.log("filteredListings in dispaySearchResults():", filteredListings);

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < filteredListings.length; i++) {
      // dette dukker opp etter alllistings
      listingsContainer.innerHTML += 
/*       `<h5 class="card-title">${filteredListings[i].title}</h5>`;
 */
      `<div
      class="card m-3 card col-12 col-sm-6 col-lg-4"
      style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${filteredListings[i].title}</h5>
        <p class="card-text"> ${filteredListings[i].description}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Bids: ${filteredListings[i]._count.bids}</li>
        <li class="list-group-item">Deadline: ${filteredListings[i].endsAt}</li>
      </ul>
      <div class="card-body">
        <a href="html/listing.html?id=${filteredListings[i].id}" class="card-link">open</a>
      </div>
    </div>`;
      
      
      
     /*  `<h3>search Results<h3>
      <div
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
    </div>`; */
    }
  } catch {}
};

// it works, now just make the search results look the same as first listings on index
