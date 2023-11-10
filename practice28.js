// یک فروشگاه آنلاین پیاده سازی کنید
// بطوریکه محصولات فروشگاه را در یک آرایه ذخیره کند و آرایه ای برای سبد خرید کاربر داشته باشید
// و از کاربر تسم محصولی را که میخواهد اضافه کند به سید خرید را بگیرد
// اگر محصول در انبار موجود بود، به سبد خرید اضافه کند و سپس مبلغ کل سبد خرید را محاسبه کرده و نمایش دهد
// سپس در غبراینصورت به کاربر پیام اتمام موجودی بدهد
// نکات
// بعد از اضافه کردن به سبد خرید سبد را نمایش دهد
// بضورت دیفالت 3 محصول را در سبد خرید موجود باشد

let userPurchasePrice = 0;
let products = [
    {productName: "Laptop", price: 25000},
    {productName: "PC", price: 28000},
    {productName: "Lazer", price: 24000},
    {productName: "Mobile", price: 23000},
    {productName: "Mouse", price: 22000},
]

let purchase = [
    {productName: "Laptop", price: 25000},
    {productName: "PC", price: 28000},
    {productName: "Lazer", price: 24000},
]

let userProduct = prompt("Please enter product")

let isProductHas = products.some((item) => {
    return item.productName == userProduct
})

if(isProductHas) {
    purchase.push({productName: userProduct, price: 29000})
    purchase.forEach((item) => {
        userPurchasePrice = +userPurchasePrice + +item.price
    })
} else {
    alert("we dont have this product")
}

console.log(purchase)
console.log(userPurchasePrice)