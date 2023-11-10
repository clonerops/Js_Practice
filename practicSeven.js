// برنامه ای بنویسید که از کاربر سن و جنسیت را دریافت کند
// اگر جنسیت مونث یا زیر 18 سال بود خطا دسترسی غیرمجاز بدهد در غیر این صورت دسترسی مجاز بدهد
let age = prompt("Please enter your age")
let gender = prompt("Please enter your gender")

if(+age < 18 || gender == "Female") {
    alert("Access Denied")
} else {
    alert("Hello Welcome to panel")
}