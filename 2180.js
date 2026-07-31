var countEven = function(num) {
     
     let count= 0
    for (let i=0;i<=num;i++){
       let sum=0
       let str = i.toString()

      for(let ch of str){
        sum += Number(ch)   
      }
        if(sum%2 ===0){
            count++
        }
      
    }
    return count
};

console.log(countEven(30))
