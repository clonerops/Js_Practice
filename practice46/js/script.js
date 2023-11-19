const getChangeButton = document.querySelector(".changeButton")
const getResetButton = document.querySelector(".resetButton")
const getConvertButton = document.querySelector(".convertButton")
const getResult = document.querySelector(".result")


const getInput = document.querySelector('input')
let isChanged = false;


getChangeButton.addEventListener("click", () => {
    if(!isChanged) {
        document.title = "Sabzlearn Js | F to C"
        getInput.placeholder = "F"
        document.querySelector(".C").innerHTML = "F"
        document.querySelector(".F").innerHTML = "C"
        isChanged = true
    } else {
        document.title = "Sabzlearn Js | C to F"
        getInput.placeholder = "C"
        document.querySelector(".C").innerHTML = "C"
        document.querySelector(".F").innerHTML = "F"
        isChanged = false;
    }

})

getResetButton.addEventListener('click', () => {
    getInput.value = ""
    document.querySelector('.result').innerHTML = ''
})

getConvertButton.addEventListener("click", () => {
    let inputValue = +getInput.value;

    let changeCToF = (inputValue * 9/5) + 32

    getResult.innerHTML = changeCToF

})