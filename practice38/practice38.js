let bodyElement = document.querySelector('body')

let createImageelement = document.createElement('img')

createImageelement.setAttribute("src", "./image/light.png")
createImageelement.setAttribute("width", 300)
createImageelement.setAttribute("height", 300)

bodyElement.append(createImageelement)

let createButtonElement = document.createElement("button")
createButtonElement.innerHTML = 'Change Image'

bodyElement.append(createButtonElement)
createButtonElement.addEventListener('click', () => {
    if(createImageelement.getAttribute("src") === "./image/light.png") {
        createImageelement.setAttribute("src", "./image/down.png")
    } else {
        createImageelement.setAttribute("src", "./image/light.png")
    }
})


