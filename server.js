console.log('app is loading ...\n');

const helper = require('./helper');
helper.showNow();
helper.handleTimeZone('August 19, 1975 23:15:30 GMT+07:00');
helper.handleTimeZone('Sat Mar 11 2017 11:30:00 GMT+0900');
helper.handleTimeZone('2017-03-11T11:30:00Z');
helper.handleTimeZone('2020-10-26 22:12:06 IST');
helper.handleTimeZone('2020-10-26 22:12:06 GMT+0200');