console.log ("logut");

const logout = document.querySelector(".logout");
const h1 = document.querySelector("h1");
logout.addEventListener("click", emptyLocaleStorage);

function emptyLocaleStorage(){
    //den ble tom, men oppdaterte ikke pagem, så det skjedde ikke noe
    localStorage.clear();

    /* h1.innerHTML= "sdfghjk";
 */

   
    window.location.reload();
//etter reload slutter funcsjonen, for sider reloader!!

}
