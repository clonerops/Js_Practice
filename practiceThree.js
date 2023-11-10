// برنامه ای بنویسید که سن کاربر را دریافت کند و اگر زیر 18 سال یود پیغام دسترسی غیر مجاز در غیر این صورت دسترسی مجاز بدهد

let age = prompt("Please enter your age")

if(age < 18) {
    alert("Access Denied")
} else {
    alert("Hello Welcom To Site")
}