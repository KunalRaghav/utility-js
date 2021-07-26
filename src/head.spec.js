const head = require("./head");

describe('Head', () => {
    
    it('First Element returned from [1,2,3]', () => {
        expect(head([1,2,3])).toEqual(1);
    })

    it('First Element returned from [] is null', () => {
        expect(head([])).toEqual(null);
    })

    it('First Element returned from null is null', () => {
        expect(head()).toEqual(null);
    })
})