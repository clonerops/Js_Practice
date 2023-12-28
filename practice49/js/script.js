const $ = document;

const body = $.querySelector("body")
const section = $.querySelector("section")

const getButton = $.querySelector('button')
const modalParent = $.querySelector('.modal-parent')

const getClose = $.querySelector(".X")

getButton.addEventListener('click', function (){
    modalParent.style.display = "block"
    section.style.filter = "blur(10px)"
})

getClose.addEventListener('click', () => {
    modalParent.style.display = "none"
    section.style.filter = "blur(0px)"
})

body.addEventListener('keyup', (event) => {
    if(event.keyCode === 27) {
        modalParent.style.display = "none"
        section.style.filter = "blur(0px)"
    }
})