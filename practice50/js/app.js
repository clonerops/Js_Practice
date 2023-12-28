const Input = document.querySelector("input")
const ListedDivTag = document.getElementById("listed")

const BtnSave = document.getElementById("btn-save")
const BtnDelete = document.getElementById("btn-delete")
const ColorBox = document.querySelectorAll(".color-box")
BtnSave.addEventListener("click", () => {
    const createContanierList = document.createElement("div")
    createContanierList.setAttribute("class", "card shadow-sm rounded")
    
    const createTextList = document.createElement("p")
    createTextList.innerHTML = Input.value
    createTextList.setAttribute("class", "card-text p-3")
    createContanierList.append(createTextList)

    createContanierList.style.backgroundColor = Input.style.backgroundColor
    ListedDivTag.append(createContanierList)

    createContanierList.addEventListener("click", () => {
        createContanierList.remove()
    })
})

ColorBox.forEach((item) => {
    item.addEventListener("click", (event) => {
        Input.style.backgroundColor = event.target.style.backgroundColor
    })
})


BtnDelete.addEventListener('click', () => {
    Input.removeAttribute("style")
})