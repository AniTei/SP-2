
export async function createSuccess (json, response) {
    if(response.ok){
        console.log("this is the createSuccess func saying hi")

        function takeUserToListing() {
            window.location.href = `listing.html?id=${json.data.id}`;
        }
        takeUserToListing();

    }
  };

