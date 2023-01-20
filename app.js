document.addEventListener("DOMContentLoaded", function(){

const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const password_error = document.querySelector("#password-error");
const confirm_password_error = document.querySelector("#confirm-password-error");
const form = document.querySelector("#form");

//prevent to submit if password dont match
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(password.value !== confirm_password.value){
    confirm_password_error.textContent = "Passwords dont match";
   }
   else{
     confirm_password_error.textContent = "";
   }
});

});



  