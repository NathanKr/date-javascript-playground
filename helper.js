function showNow() {
  const now = new Date();
  showDate("now" , now)
}

function showDate(preMessage,date) {
    console.log(`input date :                ${preMessage} ***********`);
    console.log(`date.toString() :           ${date.toString()}`);
    console.log(`date :                      ${date}`);
    console.log(`date.toLocaleString() :     ${date.toLocaleString()}`);
    console.log(`date.toUTCString() :        ${date.toUTCString()}`);
    console.log();
    console.log(`date.toTimeString() :       ${date.toTimeString()}`);
    console.log(`date.toLocaleTimeString() : ${date.toLocaleTimeString()}`);
    console.log(`date.toLocaleDateString() : ${date.toLocaleDateString()}`);
    console.log(`your local timezone offset : ${date.getTimezoneOffset()/60} [hours]`);

    console.log("\n");
  }


function handleTimeZone(strDate){
    const date1 = new Date(strDate);
    showDate(strDate,date1);
}

module.exports = {showNow , handleTimeZone}