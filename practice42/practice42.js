// برنامه ای بنویسید که هر  5 ثانیه بصورت رندوم بک گراند رو عوض کنه

let getBodyElement = document.getElementsByTagName("body")

setInterval(() => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}, 5000)