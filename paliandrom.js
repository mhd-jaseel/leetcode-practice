let str ="jaseel"
let pal=""

for (let i = str.length-1;i>=0;i--){
    pal+=str[i]
}
if (str==pal){
    console.log(true)
}else{
    console.log(false)
}