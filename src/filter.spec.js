const filter = require("./filter");

describe('Filter', ()=>{
    it('True filter of []',() => {
        expect(filter([],(i)=>true)).toEqual([]);
    })

    it('True filter of [1,2,3]',() => {
        expect(filter([1,2,3],(i)=>true)).toEqual([1,2,3]);
    })

    it('False filter of [1,2,3]',() => {
        expect(filter([1,2,3],(i)=>false)).toEqual([]);
    })

    it('Filter x>1 of [1,2,3]',()=>{
        expect(filter([1,2,3],(i)=>i>1)).toEqual([2,3]);
    })

    it('Filter uppercase of["a","A","b","B"]',()=>{
        expect(filter(["a","A","b","B"],(i)=>{
            if(i===i.toUpperCase()){
                return i;
            }
        })).toEqual(["A","B"]);
    })
})