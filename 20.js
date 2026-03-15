
var isValid = function(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        let char = s[i];
        

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
           
        } 
        else {

            let top = stack.pop();
            console.log(top);

        }
    }

    return stack.length === 0;

};
isValid("()[]{}");