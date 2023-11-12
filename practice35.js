// یک آزمون آنلاین پیاده سازی کنید
// بطوریکه سوالاتی را به کاربر نشان دهد و پاسخ انها را دریافت کند 
// به ازای هر پاسخ درست یک امتیاز به کاربر بدهد 
// مجموع امتیازات در کنسول نمایش داده شود

const questions = [
    {id: 1, question: "2 + 2", answer: "4"},
    {id: 2, question: "3 + 2", answer: "5"},
    {id: 3, question: "Javascript framework trend?", answer: "react"},
    {id: 4, question: "10 * 2", answer: "20"},
    {id: 5, question: "2 + 8", answer: "10"},
]

let score = 0
questions.forEach((item) => {
    let userAnswer = prompt(item.question)

    if(userAnswer === item.answer) score ++
})

console.log(score)