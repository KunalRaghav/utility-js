const tail = require("./tail");

describe('Tail', () => {
    
    it('Tail Element returned from [1,2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    })

    it('Tail Element returned from [] is []', () => {
        expect(tail([])).toEqual([]);
    })

    it('Tail Element returned from null is []', () => {
        expect(tail()).toEqual([]);
    })
})