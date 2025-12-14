let form = document.getElementById("form")

function submit(event) {
    event.preventDefault()

    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(password.value);  
}

// parameter & argument
form.addEventListener("submit", (e) => submit(e))

