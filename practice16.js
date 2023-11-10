// از کاربر 5 عدد را دریافت کند و سپس میانگین انها را محسایه کند

let userNumber = 0;
let sum = 0;

for (let i = 0; i < 5; i++) {
    userNumber = +prompt(`please enter number ${i}`) 
    sum = sum + userNumber
}

console.log(sum / 5)