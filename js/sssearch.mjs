import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";
const url = baseURL + allListings;


const searchBar = document.querySelector("input");
console.log("input:", searchBar)
const listingsContainer = document.querySelector(".listings-container");

/* listingsContainer.innerHTML = `<p>hei</p>`;
 */

////////


// this part is ok
searchBar.onkeyup = function harvestValue(event) {
  event.preventDefault();
  console.log("input:", searchBar.value);

  const criterium = searchBar.value.toLowerCase();
  console.log("criterium:", criterium);

  filterListings(criterium);

};


// når jeg tok vekk denne så dukket alle listings opp igjen
async function filterListings(kriterium) {
  console.log("Kriterium:", kriterium);


  // det er her feilen ligger, 
  // men kanskje jeg ikke trenger å call the function again??
  // jeg har jo allerede listings, import from??
/*   const listings = await getData(url);
 */

  console.log("why cant this be filtered?:", listings.data);

  // make new array from data gotten
  const filteredListings = listings.data.filter(function (listing) {
    if (listing.title.toLowerCase().startsWith(kriterium)) {
      return true;
    }
  });

  console.log("filteredListings:", filteredListings);
  displayData(filteredListings);
}

filterListings();

/* const searchTitle = document.querySelector(".search-title");
 */
async function displayData(value) {
  try {
    console.log("filteredListings in dispay function:", value);

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < value.length; i++) {
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
  
    }
  } catch {

  }
};


 /*    `<div
          class="card m-3 card col-12 col-sm-6 col-lg-4"
          style="width: 18rem">
          <img
            src="${value[i].media[0].url}"
            class="card-img-top"
            alt="${value[i].media[0].alt}"
          />
          <div class="card-body">
            <h5 class="card-title">${value[i].title}</h5>
            <p class="card-text"> ${value[i].description}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Bids: ${value[i]._count.bids}</li>
            <li class="list-group-item">Deadline: ${value[i].endsAt}</li>
          </ul>
          <div class="card-body">
            <a href="html/listing.html?id=${value[i].id}" class="card-link">open</a>
          </div>
        </div>`; */