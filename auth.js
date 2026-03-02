function login(){

const email =
document.getElementById("email").value
        .trim()
        .toLowerCase();
const password =
    document.getElementById("password").value.trim();

if(!email){
    alert("Enter Email");
    return;
}
if(!password){
    alert("Enter Password");
    return;
}

// store user identifier only (password not persisted)
localStorage.setItem("loggedUser", email);
// ADMIN LOGIN

if(email === "admin@gmail.com"){

localStorage.setItem("role","admin");

window.location.href="admin.html";

return;

}


// USER LOGIN

localStorage.setItem("role","user");

if(!localStorage.getItem("userPreferences")){

window.location.href="onboarding.html";

}else{

window.location.href="dashboard.html";

}

}