const imageSrc = [
    {id: 1, src: "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg"},
    {id: 2, src: "https://img.freepik.com/premium-photo/resume-john-roe-with-graphic-name-john-roe_528398-273.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais"},
    {id: 3, src: "https://img.freepik.com/premium-photo/wooden-dock-is-front-mountain-lake_924629-11386.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais"},
    {id: 4, src: "https://img.freepik.com/premium-photo/dock-mountains-with-lake-background_865967-116430.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais"},
    {id: 5, src: "https://img.freepik.com/premium-photo/painting-river-with-tree-foreground-pink-flower-background_882954-4617.jpg"},
  ]
  function loadRandomImage(){
    const getBody = document.querySelector('body')
    let randomNumber = Math.floor(Math.random() * 5) + 1
    getBody.style.backgroundImage = `url(${imageSrc[randomNumber].src})`
    getBody.style.backgroundRepeat = `no-repeat`
    getBody.style.backgroundSize = `cover`
  }

  loadRandomImage()


  const cityData = {
    tehran: {temp: 18, humidity: 26, Wind: 78},
    shiraz: {temp: 28, humidity: 53, Wind: 48},
    tabriz: {temp: 48, humidity: 24, Wind: 64},
  }

const getButton = document.querySelector("button")
console.log(cityData.tehran)
getButton.addEventListener("click", () => {
    getInputValue = document.querySelector(".search-bar").value
    document.querySelector(".city").innerHTML = "Weather in  "+ getInputValue
    document.querySelector(".temp").innerHTML = cityData[getInputValue].temp+ "°C"
    document.querySelector(".humidity").innerHTML = "Humidity: " + cityData[getInputValue].humidity
    document.querySelector(".wind").innerHTML = "Wind speed: " + cityData[getInputValue].Wind
})