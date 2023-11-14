// یک برنامه بنویسید که فرم هارا ولیدیشن کند بطوریکه نام کاربری 8 کاراکتر و پسورد 6 و هنگام تایپ کاربر چک کند
// با ایونت بلور بنویسید
let username = document.getElementById("typeUsernameX")
let password = document.getElementById("typePasswordX")
function checkusername() {
    let getSpanUsernameHint = document.getElementById("usernameHint")
    if(username.value.length < 8) {
        getSpanUsernameHint.innerHTML = "نام کاربری باید حداقل 8 کاراکتر باشد"
    } else {
        getSpanUsernameHint.innerHTML = "نام کاربر مورد تایید است"
    }
}


function checkpassword() {
    let getSpanPasswordHint = document.getElementById("passwordHint")
    if(password.value.length < 6) {
        getSpanPasswordHint.innerHTML = "پسورد باید حداقل 6 کاراکتر باشد"
    } else {
        getSpanPasswordHint.innerHTML = "پسورد مورد تایید است"
    }
}