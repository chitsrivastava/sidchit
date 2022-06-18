const index = require('./index.js');

describe('Unit test cases for index.js', () => {
    test('Check if getChaiShops exists', () => {
        expect(typeof index.getChaiShops).toBe('function');
    })

    test('getChaiShops should return list of chai shops', () => {
        expect(index.getChaiShops().length).toBeGreaterThan(0);
    })
})