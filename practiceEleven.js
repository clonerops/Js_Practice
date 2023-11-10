//یک برنامه ثبت نام بنویسید بطوریکه
//یوزر نیم و پسورد را از کاربر دریافت کند
//یوزرنیم حداقل 3 کاراکتر و پسورد 6 کاراکتر

let userName = prompt("Please enter userName")
let password = prompt("Please enter password")

if(userName.length < 3) {
    alert("username must be upper 3 character")
} else if(password.length < 6) {
    alert("password must be upper 6 character")
} else {
    alert("User Register")
}