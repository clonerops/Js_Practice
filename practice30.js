// پروژه فروشگاه را در نظر بگیرید
// محصولات فروشگاه را داخل آرایه ای در نظر بگیرید و یک آرایه برای سبد خرید در نظر بگیرید
// و داخل سبد خرید 3 محصول بصورت دیفالت باشد
// منویی را به کاربر نشان دهید که شامل 2 گزینه هست
// گزینه ای برای حذف محصول به سبد خرید
// گزینه ای برای افزودن محصول به سبد خرید
// عملیات لازم برای هر گزینه را پیاده سازی کنید

const products = [
    {id: 1, title: "Laptop", price: 25000},
    {id: 2, title: "Mobile", price: 35000},
    {id: 3, title: "Pc", price: 36000},
    {id: 4, title: "Console", price: 85000},
    {id: 5, title: "Keyboard", price: 74000},
    {id: 6, title: "Mouse", price: 98000},
]

const basket = [
    {id: 3, title: "Pc", price: 36000},
    {id: 5, title: "Keyboard", price: 74000},
    {id: 6, title: "Mouse", price: 98000},

]

const userChoose = +prompt("if you want to delete Product please write -1 \n for add product please write 1")

if(userChoose === 1) {
    const productName = prompt("Please enter a product Name")
    const productPrice = prompt("Please enter a product Price")

    const formdata = {
        id: 8,
        title: productName,
        price: +productPrice
    }

    basket.push(formdata)
} else {
    const productName = prompt("Please enter a product Name for delete")
    const findIndex = basket.findIndex((item) => {
        return item.title == productName
    })
    console.log(findIndex)
    basket.splice(findIndex, 1)
}

console.log("basket0", basket)