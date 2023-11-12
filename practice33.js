// یک پروژه تسک منجیمنت داشته باشید
// در این سامانه مدیر می تواند به کارمندان خود تسک های مختلفی بدهد
// به عنوان مثال می تواند به محمد تسک خاصی را اعمال کند
// یک ساختار داشته باشید که در آن 4 کارمند موجو بوده است و هر کارمند وظایفی را دارد
// سپس از کاربر (مدیر) یک تست دریافت کند و همچنین اسم کارمند که قصد اضافه کردن کارمند را دارد
// سپس تسک را مدیر به کارمندش اعمال کند و در نهایت لیست را نمایش دهد

const users = [
    {id: 1, name: "Ali", tasks: [
        {id: 1, title: "Develop"},
        {id: 2, title: "Design"}
    ]},
    {id: 2, name: "Abolfazl", tasks: [
        {id: 1, title: "Develop"},
    ]}
]

let task = prompt("Hi, Welcome, Please insert a task")

let taskUser = prompt("Which one user? Please insert user name")

let findUser = users.findIndex((item) => {
    return item.name === taskUser
})

const data = {
    id: Math.random(),
    title: task,
}

users[findUser].tasks.push(data)

console.log(users)