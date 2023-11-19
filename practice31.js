// پروژه فروشگاه را در نظر بگیرید
// به این صورت که یک آرایه به عنولن سبد خرید در نطر بگیرید که 6 محصول داشته باشد
// برای محصولاتی که قیمت آنها بالای 100 هزار تومات باشد هزینه پست دریافت نمی گردد
// اما برای زیر 100 هزار تومان 1000 تومان هزینه پست دریافت می گردد
// کل سبد خرید را به همراه هزینه پست نمایش دهید


const basket = [
    {id: 1, title: "Laptop", price: 25000},
    {id: 2, title: "Mobile", price: 35000},
    {id: 3, title: "Pc", price: 196000},
    {id: 4, title: "Console", price: 185000},
    {id: 5, title: "Keyboard", price: 174000},
    {id: 6, title: "Mouse", price: 98000},
    {id: 3, title: "Pc", price: 136000},
    {id: 5, title: "Keyboard", price: 74000},
    {id: 6, title: "Mouse", price: 198000},
]

const filterMore100000 = basket.filter((item) => {
    return item.price < 100000
})

let cost = filterMore100000.length * 1000 

let sum = 0;

basket.forEach((item) => {
    sum = sum + item.price
})

let totalPrice = sum + cost