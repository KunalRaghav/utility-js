const tail = (a) =>{
    if(a==null){
        return []
    }
    return a.slice(1);
}

module.exports = tail