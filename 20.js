
// var isValid = function(s) {

//     let stack = [];

//     for (let i = 0; i < s.length; i++) {

//         let char = s[i];
        

//         if (char === "(" || char === "[" || char === "{") {
//             stack.push(char);
           
//         } 
//         else {

//             let top = stack.pop();
//             console.log(top);

//         }
//     }

//     return stack.length === 0;

// };
// isValid("()[]{}");
let str ="()"
console.log(typeof(str))
var isValid = function(s) {
  let arr=s.split("")
  for (let i =0;i<arr.length;i++){
    if (arr.includes("("&&")" ||"{"&&"}"||"["&&"]")){
        return true
    }else{
        return false
    }

  }
 

};

console.log(isValid("()[]{}"))

