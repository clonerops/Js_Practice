//برنامه ای بنویسید که یک عدد را از کاربر دریافت کند و سپس مجموع اعداد را محاسبه کند
//145 => 1 +4 +5 = 10

let userNumber = prompt("Please enter yout number")
let sum = 0;

for (let i = 0; i < userNumber.length; i++) {
    sum = sum + +userNumber[i]
}
console.log(sum)
