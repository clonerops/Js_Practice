// برنامه ای بنویسید که یک یوزرنیم از کاربر بگیرد و چک کند ایا کاربر لاگین شده است یا خیر
// اگر کاربر در ارایع بود یعنی لاگین کرده است

const users = ["cloner", "clonerops", "abolfazl", "masoumi"]

const userName = prompt("Please enter user name")

const isLogin = users.includes(userName)

if(!isLogin) {
    alert("Access Denied")
} else {
    alert("Welcome to Panel")
}