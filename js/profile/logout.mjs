console.log ("logout");

const logout = document.querySelector(".logout");
logout.addEventListener("click", emptyLocaleStorage);

function emptyLocaleStorage(){
    localStorage.clear();
    window.location.reload();
};
