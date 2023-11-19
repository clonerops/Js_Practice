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

  const cityData = [
    {id: 1, city:"tehran", temp: 18, humidity: 26, Wind: 78},
    {id: 2, city:"shiraz", temp: 56, humidity: 45, Wind: 38},
    {id: 3, city:"tabriz", temp: 23, humidity: 53, Wind: 54},
  ]

const getButton = document.querySelector("button")
getButton.addEventListener("click", () => {
    getInputValue = document.querySelector(".search-bar").value
    const findData = cityData.find((i) => i.city === getInputValue)
    document.querySelector(".city").innerHTML = "Weather in  "+ findData.city
    document.querySelector(".temp").innerHTML = findData.temp+ "°C"
    document.querySelector(".humidity").innerHTML = "Humidity: " + findData.humidity
    document.querySelector(".wind").innerHTML = "Wind speed: " + findData.Wind
})