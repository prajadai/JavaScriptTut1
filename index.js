const Btn = document.getElementById("Btn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const terms = document.getElementById("terms");

Btn.onclick = function(){
  terms.textContent = `Signed in Successfully ${firstName.value} ${lastName.value}.`;
  firstName.value = "";
  lastName.value = "";
  userEmail.value = "";
  userPass.value = "";
}

