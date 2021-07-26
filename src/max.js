const max = (i)=>{
    if(i==null || i.length==0) return undefined;
    return Math.max.apply(null, i);
}

module.exports = max;