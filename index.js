
// Store data
sessionStorage.setItem('firstName', document.getElementById('firstName').value);
sessionStorage.setItem('lastName', document.getElementById('lastName').value);
sessionStorage.setItem('userEmail', document.getElementById('userEmail').value);
sessionStorage.setItem('userPass', document.getElementById('userPass').value);

// Retrieve data
const firstName = sessionStorage.getItem('firstName');
const lastName = sessionStorage.getItem('lastName');
const userEmail = sessionStorage.getItem('userEmail');
const userPass = sessionStorage.getItem('userPass');

console.log(sessionStorage.getItem('firstName'));
console.log(sessionStorage.getItem('lastName'));
console.log(sessionStorage.getItem('userEmail'));
console.log(sessionStorage.getItem('userPass'));