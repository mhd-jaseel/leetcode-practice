var judgeCircle = function(moves) {
    let ud=0;
    let rl=0;
   
    for(let ch of moves){
        if (ch==="U"){
            ud++
        }else if(ch==="D"){
            ud--
        }else if(ch==="R"){
            rl++
        }else if (ch==="L"){
            rl--
        }
    }
    return ud===0 && rl===0
}
console.log(judgeCircle("ULDRLDRUURDL"))