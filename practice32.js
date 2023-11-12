// یک پروژه تودولیست پیاده سازی کنید
// بطوریکه یک آرایه برای ذخیره تودو ها داشته باشید و بصورت دیفالت 3 تودو درون ان وجود داشته باشد
// هر تودو مشخصاتی مثل آیدی، اسم تودو و وضعیت را دارد
// منویی به سه گزینه به صورت زیر نشان دهید
// 1.اضافه کردن تودو
// 2.حذف تودو
// 3.انجام تودو
// در قسمت اول اسم تودو را بگیرد و به لیست تودو ها اضافه کند
// در قسمت دوم اسم تودو را بگیرد و آن را از لیست حذف کند
// در قسمت سوم اسم تودو را دریافت کند و همان تودو را در وضعیت انجام شده قرار دهد. 
// تودو تکراری در لیست نباشد
// در اخر در کنسول لیست را نمایش دهید

let todos = [
    { id: 1, name: "Learning", isDo: false },
    { id: 2, name: "Cooking", isDo: false },
    { id: 3, name: "Swimming", isDo: false }
]

let userMenu = +prompt("1: Add Todo \n 2: Delete Todo \n 3: Change Status")

switch (userMenu) {
    case 1:
        let getTodoFromUser = prompt("Please enter todo")
        const data = {
            id: 4,
            name: getTodoFromUser,
            isDo: false
        }
        todos.push(data);
        break;
    case 2:
        let deleteTodoText = prompt("Please enter todo for delete")
        let todoFindIndex = todos.findIndex((item) => {
            return item.name === deleteTodoText
        })
        todos.splice(todoFindIndex, 1)
        break;
    case 3:
        let changeTodoStatus = prompt("Please enter todo for Change Status")
        let todoFindIndexForChangeStatus = todos.findIndex((item) => {
            return item.name === changeTodoStatus
        })
        todos[todoFindIndexForChangeStatus].isDo = true
        break;
}

console.log(todos)