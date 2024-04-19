// show error messeage when response is not ok, for register
// and maybe other instances ?? :)

export function errorMessage(json, response, alertElement) {

    console.log("json:", json);
    console.log("errormessage:", json.errors[0].message);
  
    if (!response.ok) {
      console.log("response is not ok :(");
  
      for (let i = 0; i < json.errors.length; i++) {
        alertElement.innerHTML += `
            <div  class="form-text alert alert-danger">
              <p>Server says: ${json.errors[i].message}</p>
            </div>`;
      }
    }
  }