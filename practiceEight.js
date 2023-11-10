//برنامه ای بنویسید که معدل کاربر را دریافت کند و تعیین سطح کند
//برای نمرات 18 الی 20 سطح A
//برای نمرات 15 الی 17 سطح B
//برای نمرات 12 الی 14 سطح C
// نمره کمتر از 12 مشروط

let grade = prompt("Please enter your grate")

switch (+grade) {
    case 18:
    case 19:
    case 20:
        alert("Youre grade A")
        break;
    case 15:
    case 16:
    case 17:
        alert("Youre grade B")
        break;
    case 12:
    case 13:
    case 14:
        alert("Youre grade C")
        break;

    default:
        alert("Your Failed")
        break;
}