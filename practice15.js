// محاسبه قیمت کل سبد خرید با حلقه for
//بطوریکه 5 سفارش را ار کاربر گرفته و محموع مبالغ محاسبه گردد

let allPrice = 0;
let i = 0;
for(i; i < 5; i++){
    allPrice = allPrice + +prompt(`Please enter product ${i}`)
}

console.log(allPrice)