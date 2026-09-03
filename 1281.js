var subtractProductAndSum = function(n) {
    let prouct=String(n).split("").reduce((a,b)=>a*b,1)
    let sum= String(n).split("").map(Number).reduce((a,b)=>a+b,0)
    return prouct+sum
};
console.log(subtractProductAndSum(234))