// فرض کنید سامانه ا یپیاده سازی کردید وقتی کاربر وارد سایت می شود 5 ثانیه فرصت دارد عکسی را برای پروفایل خود انتخاب کند 
// در غیر این صورت بهش پیغام بدهد که زمان انتخاب پروفایل شما تمام شد

const isCanUpload = false;

setTimeout(() => {
    if(!isCanUpload) {
        console.log('you can upload your profile picture');
    } 
}, 5000)

