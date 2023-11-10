// برنامه ای بنویسید که یک عدد از کاربر بگیرد و تشخیص دهد که زوج است یا فرد

let number = prompt("Please enter a number")

let calculate = +number % 2

if(calculate === 0) {
    alert("even")
} else {
    alert("odd")
}