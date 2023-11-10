//تابعی بنویسید که یک پارامتر را با نوع عدد دریافت کند و زوج یا فرد بودن آن را مشخص کند

// Declaration Function
function calculateDeclaration(number) {
    if(number % 2 == 0) {
        alert("even")
    } else {
        alert("odd")
    }
}

calculateDeclaration(15)

// Expression Function
let calculateExpression = function(number) {
    if(number % 2 == 0) {
        alert("even")
    } else {
        alert("odd")
    }
}

calculateExpression(36)