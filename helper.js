function showNow() {
  const now = new Date();
  showDate(now)
}

function showDate(date) {
    console.log('date ***********');
    console.log(`date.toString() :           ${date.toString()}`);
    console.log(`date.toUTCString() :        ${date.toUTCString()}`);
    console.log(`date.toTimeString() :       ${date.toTimeString()}`);
    console.log(`date.toLocaleTimeString() : ${date.toLocaleTimeString()}`);
    console.log(`date.toLocaleString() :     ${date.toLocaleString()}`);
    console.log(`date.toLocaleDateString() : ${date.toLocaleDateString()}`);
    console.log(`date :                      ${date}`);
  }

function handleTimeZone(){
    const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
    showDate(date1);
    console.log(`your local timezone offset : ${date1.getTimezoneOffset()/60} [hours]`);
}

module.exports = {showNow , handleTimeZone}