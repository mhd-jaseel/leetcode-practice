// let n=10203004


var sumAndMultiply = function(n) {
    var input = n.toString()
    var x=[]
   for(let i =0;i<input.length;i++){
      
     if (input[i]!="0") {
        x.push(Number(input[i]))
     } 
   } 
  let sum =x.reduce((a,b)=>a+b,0)
  let num =Number(x.join(""))
  return sum*num
};

console.log(sumAndMultiply(10203004))