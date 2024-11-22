document.getElementById("userForm").onsubmit = function(){
    sessionStorage.setItem(
        "firstName", document.getElementById("firstName").value
    )
    sessionStorage.setItem(
        "lastName", document.getElementById("lastName").value
    )
    sessionStorage.setItem(
        "userEmail", document.getElementById("userEmail").value
    )
    sessionStorage.setItem(
        "userPass", document.getElementById("userPass").value
    )
};