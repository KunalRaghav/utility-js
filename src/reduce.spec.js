const reduce = require("./reduce");

describe('Reduce', ()=>{
    it('Reduce of [] using (x,y)=x+y',() => {
        expect(reduce([],(i,j)=>i+j)).toEqual(undefined);
    })

    it('Reduce of [] using ((x,y)=x+y,10)',() => {
        expect(reduce([],(i,j)=>i+j,10)).toEqual(10);
    })

    it('Reduce of ["a","b","c"] using ((x,y)=x+y)',() => {
        expect(reduce(['a','b','c'],(i,j)=>{
            return i+j
        })).toEqual('abc');
    })
    it('Reduce of ["a","b","c"] using ((x,y)=x+y)',() => {
        expect(reduce(['a','b','c'],(i,j)=>{
            return i+j
        },'z')).toEqual('zabc');
    })
})