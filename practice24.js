//اعدادی را به تعداد دلخواه از کاربر گرفته و سپس داخل یک ارایه ذخیره کنیم
// سپس میانگین آنها را محاسبه کنید

let userNumbers = []

let userNumber = 0;
let sum = 0;

while(userNumber != -1){
    userNumber = +prompt("Please enter a number \n if dont number please enter -1 number")

    if(userNumber != -1) {
        userNumbers.push(userNumber)
    }

}

for (let i=0; i<userNumbers.length; i++){
    sum = sum + userNumbers[i]
}

console.log(sum / +userNumbers.length)