// محاسبه قیمت کل سبد خرید با حلقه while
//بطوریکه 5 سفارش را ار کاربر گرفته و محموع مبالغ محاسبه گردد

let allPrice = 0;
let sum = 0;

let i= 0;
while (i < 5) {
    sum = sum + +prompt(`Please enter product ${i}`)
    i++;
}

console.log("sum", sum)