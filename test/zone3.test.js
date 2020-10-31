
const timezone_mock = require('timezone-mock');

describe('zone mockes tests',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    

    test('getHours on Australia/Adelaide is ok',()=>{
        timezone_mock.register('Australia/Adelaide');//+10:30
        const date =new Date("2020-11-28 12:33:34");
        expect(date.getHours()).toBe(12);
    })

    test("GMT+1030 is part of local time in Australia/Adelaide ",()=>{
        timezone_mock.register('Australia/Adelaide');//+10:30

        const now =new Date();
        expect(now.toLocaleString()).toContain("GMT+1030")
    })

    test('compare time in aus and utc is ok',()=>{
        timezone_mock.register('Australia/Adelaide');//+10:30
        const dateAus =new Date("2020-11-28 18:33:34");
        timezone_mock.unregister();

        timezone_mock.register('UTC');//00:00
        const dateUTC =new Date("2020-11-28 08:03:34");

        expect(dateAus.getTime()).toBe(dateUTC.getTime());
    })

    
    
})

