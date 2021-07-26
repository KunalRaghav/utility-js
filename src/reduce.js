const reduce =(a,funcA,variB)=>{
    if(variB==null && a.length == 0) return undefined;
    if(variB!=null) return a.reduce(funcA,variB);
    return a.reduce(funcA);
} 

module.exports = reduce