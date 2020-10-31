const dateGreeneech = new Date("2020-10-26 20:12:06 GMT+0000"); // this is utc time
const dateIsrael = new Date("2020-10-26 22:12:06 GMT+0200");    // this is israel time
const dateKorea = new Date("2020-10-27 05:12:06 GMT+0900"); // this is korea time

test('GMT+0900 is lost on toString on israel pc',()=>{
    expect(dateKorea.toString()).toBe("Mon Oct 26 2020 22:12:06 GMT+0200 (GMT+02:00)");
})

test('GMT+0200 is not lost on toString on israel pc',()=>{
    expect(dateIsrael.toString()).toBe("Mon Oct 26 2020 22:12:06 GMT+0200 (GMT+02:00)");
})
