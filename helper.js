function showNow() {
  const now = new Date();
  showDate("now" , now)
}

function showDate(preMessage,date) {
    console.log(`date :                      ${preMessage} ***********`);
    console.log(`date.toString() :           ${date.toString()}`);
    console.log(`date.toUTCString() :        ${date.toUTCString()}`);
    console.log(`date.toTimeString() :       ${date.toTimeString()}`);
    console.log(`date.toLocaleTimeString() : ${date.toLocaleTimeString()}`);
    console.log(`date.toLocaleString() :     ${date.toLocaleString()}`);
    console.log(`date.toLocaleDateString() : ${date.toLocaleDateString()}`);
    console.log(`date :                      ${date}\n`);
  }

function handleTimeZone(){
    const strDate = 'August 19, 1975 23:15:30 GMT+07:00';
    const date1 = new Date(strDate);
    showDate(strDate,date1);
    console.log(`your local timezone offset : ${date1.getTimezoneOffset()/60} [hours]`);
}

module.exports = {showNow , handleTimeZone}