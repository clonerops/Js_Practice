let emailInputSelector = document.getElementById("typeEmailX")
let passwordInputSelector = document.getElementById("typePasswordX")

let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
    if(emailInputSelector.value === "" || passwordInputSelector === "") {
        alert('Please fill all fields')
    } else {
        localStorage.setItem("userName", emailInputSelector.value)
    }
})
