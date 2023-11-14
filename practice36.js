// فرض کنید در سامانه ای که پیاده سازی کردید کاربری پسوردش را فراموش کرده است
// و شما از کاربر یوزرنیم رو میگیرید و پسوردش را بهش نمایش میدین
// اگر کاربری با یوزر نیم وارد شده در دیتابیس نبود به کاربر پیغام مناسب بدهد

const users = [
    {id: 1, name:"Ali", password: "dhkhzckz"},
    {id: 2, name:"Alireza", password: "dqewqehkhzckz"},
    {id: 3, name:"Mohammad", password: "dhkhzqweqweckz"},
    {id: 4, name:"Hossein", password: "dhkhzckwqeqwez"},
    {id: 5, name:"Sajad", password: "dhkhzc3213kz"},
]

let username = prompt("if you forget password please enter username")

let isUserExist = users.some((item) => {
    return item.name === username
})

if(!isUserExist) {
    alert(`username ${username} does not exist`)
} else {
    let userPassword = users.find((item) => {
        return item.name === username
    })
    alert(`You password is ${userPassword.password}`)
}