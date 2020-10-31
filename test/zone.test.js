const dateIsrael = new Date("2020-10-26 22:12:06 GMT+0200");    // this is israel time
const dateGreeneech = new Date("2020-10-26 20:12:06 GMT+0000"); // this is utc time

test('getTime is equal on same date different zone time',()=>{
    expect(dateIsrael.getTime()).toBe(dateGreeneech.getTime())
})

test('getHours is not 20 for dateGreeneech in israel PC because localtime is used',()=>{
    // --- result will be different when invoke on zone GMT+0000
    expect(dateGreeneech.getHours()).not.toBe(20)
})

 test('getUTCHours is 20 for dateGreeneech',()=>{
     expect(dateGreeneech.getUTCHours()).toBe(20)
 })