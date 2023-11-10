// فرض کنید پلتفرمی مانند تلگرام داریم و چند نفر در آن گروه ایجاد کرده اند
// و قصد ایجاد تماس کنفرانسی داشته باشد
// اما شرط لازم این است که تمامی اعضا بالای 18 سال باشند 

let users = [
    {id:1, name: "ali", family: "masoumi", age: 19},
    {id:1, name: "alireza", family: "mohammadi", age: 28},
    {id:1, name: "farhad", family: "hosseini", age: 25},
]

let isAccessUsers = users.every((user) => {
    return user.age > 18
})

if(isAccessUsers) {
    alert("Welcome to Confrence")
} else {
    alert("Access Denied")
}