// یک برنامه جاوا اسکریپت بنویسید تا روز و ساعت فعلی را با فرمت زیر نمایش دهد.
// خروجی نمونه: امروز: سه شنبه است.
// زمان فعلی : 10 بعد از ظهر : 30 : 38 است

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const nowDate = new Date(Date.now())

const getTodayDay = nowDate.getDay()
const showDay = daylist[getTodayDay]

const hour = nowDate.getHours()
const minutes = nowDate.getMinutes()
const second = nowDate.getSeconds()
