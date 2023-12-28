let getInput = document.querySelector('input')


getInput.addEventListener("keyup", () => {
    document.querySelector(".counter").innerHTML = +getInput.getAttribute("maxlength") - +getInput.value.length
})