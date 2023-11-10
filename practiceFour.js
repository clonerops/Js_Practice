// برنامه ای بنویسیئ که سال تولد را از کاربر بگیرد و سن او را محسابه و نمایش دهد

let userAgeYear = prompt("Please enter your age year")

let result = +new Date(Date.now()).getFullYear() - +userAgeYear 

alert(result)