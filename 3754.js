// let n=10203004


// var sumAndMultiply = function(n) {
//     var input = n.toString()
//     var x=[]
//    for(let i =0;i<input.length;i++){
      
//      if (input[i]!="0") {
//         x.push(Number(input[i]))
//      } 
//    } 
//   let sum =x.reduce((a,b)=>a+b,0)
//   let num =Number(x.join(""))
//   return sum*num
// };

// console.log(sumAndMultiply(10203004))


var sumAndMultiply = function(n) {
    let arr =[]
    let  num=n.toString().split("")
    let sum =num.reduce((acc,curr)=>acc+Number(curr),0)
    return sum
};
console.log(sumAndMultiply(12345))













