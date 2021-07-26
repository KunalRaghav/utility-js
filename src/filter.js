const filter =(a,func)=>{
    return a.filter((i)=>func(i))
} 

module.exports = filter