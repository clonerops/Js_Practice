// برنامه ای بنویسید که سه عدد از کاربر بگیرد و میانگین آنها را محسابه و نمایش دهد

let numberOne = prompt("Please enter number one")
let numberTwo = prompt("Please enter number two")
let numberThree = prompt("Please enter number three")

const result = (+numberOne + +numberTwo + +numberThree) / 3

alert(`Average is: ${result}`)
