const min = (i)=>{
    if(i==null || i.length==0) return undefined;
    return Math.min.apply(null, i);
}

module.exports = min;