// از کاربر 5 عدد را دریافت کند و سپس میانگین انها را محسایه کند
//با حلقه while

let sum = 0;
let i = 0;
while (i < 5) {
    sum = sum + +prompt(`Please enter number ${i}`)
    i++
}
console.log(sum / 5)
