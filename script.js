let form = document.getElementById("form")

function submit(event) {
    event.preventDefault()

    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value) 
}

form.addEventListener("submit", (e) => submit(e))