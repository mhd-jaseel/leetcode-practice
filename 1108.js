var defangIPaddr = function(address) {
    let arr=address.split("")
    let output=""
    for (let i=0;i<arr.length;i++){

        if(arr[i]==="."){
            output+="[.]"
        }else{
            output+=arr[i]
        }
        
    }
  return output


};
console.log(defangIPaddr("1.1.1.1"))