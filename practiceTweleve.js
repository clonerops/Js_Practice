//یک برنامه لاگین بنویسید بطوریکه
//یوزر نیم و پسورد را از کاربر دریافت کند
//چک کند که کاربر لاگین هست یا نه و فقط کاربر ali می تواند لاگین کند
//نباید به حروف کوجک و بزرگ حساس باشد

let userName = prompt("Please enter username")
let password = prompt("Please enter password")

if(userName.toLowerCase() === "ali") {
    alert("User Login")
} else {
    alert("Access Denied")
}