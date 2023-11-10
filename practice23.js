//برنامه ای بنویسید که یک عدد را از کاربر دریافت کند و سپس مجموع اعداد را محاسبه کند
//145 => 1 +4 +5 = 10
//با حلقه while

let userNumber = prompt("Please enter your number")
let sum = 0;
let i = 0;
while(i < userNumber.length) {
    sum = sum + +userNumber[i]
    i++
}

console.log(sum)