// move success message here :)

export function successMessage(response, alertElement) {

    if (response.ok) {
    
        console.log("response is ok :)");
    
        alertElement.innerHTML = `
                <div  class="form-text alert alert-success">
                <p>You successfully registered, go to Login to log in</p>
              </div>`;
    
      }
}