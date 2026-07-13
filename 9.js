// var isPalindrome = function(x) {
//     let reverse =Number(x.toString().split("").reverse().join(""))
//     return x===reverse
    
// };


var isPalindrome =function(x){
    let changeIntoString=x.toString()
    let reverse=""
    for (let i=changeIntoString.length-1;i>=0;i--){
        reverse +=changeIntoString[i]
    }
    return x ==reverse
}
console.log(isPalindrome(121))