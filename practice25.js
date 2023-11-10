// یک سامانه ثبت نام پیاده سازی شود
// بطوریکه یک آرایه برای ذخیره اطلاعات کابران داشته باشیم و 3 کاربر بصورت دیفالت داشته باشد
// از کاربری که قصد ثبت نام دارد نام، نام خانواگی؛ سن ایمیل را دریافت کند
// و داخل آبجکتی مجزا ثبت نماید و درون آرایه ذخیره کند

// نکات 
// نام حداقل باید 3 کاراکتر باشد و حداکثر 10 باشد
// نام خانوادگی حداقل باید 3 کاراکتر باشد و حداکثر 20 باشد
// سن حداکثر 3 رقم باشد

const users = [
    { id: 1, name: "Ali", family: "Masoumi", age: 20 },
    { id: 2, name: "Alireza", family: "Hosseini", age: 26 },
    { id: 3, name: "Mohammad", family: "Mohammadi", age: 100 },
]

const name = prompt("Please enter name")
const family = prompt("Please enter family")
const age = +prompt("Please enter age")

if (!name.length >= 3 || !name.length <= 10) {
    alert("name min3 max 10")
} else if (!family.length >= 2 || !family.length <= 20) {
    alert("family min3 max 20")
} else if (age.length > 3) {
    alert("age not be max 3")
} else {
    const newUser = {
        id: 4,
        name,
        family,
        age
    }
    users.push(newUser)
}

