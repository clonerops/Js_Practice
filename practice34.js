// پیاده سازی سامانه بلیط فروشی 
// به این صورت که مبدا (استان) را از کاربر بگیرد و لیست شهر های ان را نمایش دهد

let province = [
    {id: 1, name: "Tehran"},
    {id: 2, name: "Esfahan"},
]

let cities = [
    {id: 2, name: 'Tehran', provinceId: 1},
    {id: 3, name: 'Baharestan', provinceId: 1},
    {id: 4, name: 'Shabestar', provinceId: 2},
]

let provinceUser = prompt("Please enter province")

let provinceFind = province.find((item) =>{
    return item.name === provinceUser
})

let cityBaseOfProvince = cities.filter((item) => {
    return item.provinceId === provinceFind.id
})


console.log(cityBaseOfProvince)