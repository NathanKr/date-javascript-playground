
const { TestScheduler } = require('jest');
const timezone_mock = require('timezone-mock');

describe('zone mockes tests',()=>{
    let serverTime;

    beforeAll(()=>{
        timezone_mock.register('Australia/Adelaide');//+10:30
        serverTime = new Date("2020-11-28 12:33:34");;
    })
    

    test('israel sample hour which locally is 12 on AUS server is not 12',()=>{
        filterStartLocalTime = 10,filterEndLocalTime = 19;
        // local sample is 12:33:34 israel time i.e. "2020-11-28 12:33:34 GMT+0200" its getTime is 1606559614000
        const dateIsrael = new Date(1606559614000);

        expect(dateIsrael.getHours()).not.toBe(12);
    })

    test('is israel sample hour in filter on AUS server ',()=>{
        filterStartLocalTime = 10,filterEndLocalTime = 19;
        // local sample is 12:33:34 israel time i.e. "2020-11-28 12:33:34 GMT+0200" its getTime is 1606559614000
        const dateIsrael = new Date(1606559614000);

        expect(dateIsrael.getHours()).not.toBe(12);
    })
    
})

