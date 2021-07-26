const map = require("./map");

describe('Map', ()=>{
    it('Identity map of [1,2,3]',() => {
        expect(map([1,2,3],(i)=>i)).toEqual([1,2,3]);
    })

    it('Cube map of [1,2,3]',() => {
        expect(map([1,2,3],(i)=>i**3)).toEqual([1,8,27]);
    })

    it('Object map of [{x:10},{x:20}]',() => {
        expect(map([{x:10},{x:20}],(i)=>i.x+1)).toEqual([11,21]);
    })
})